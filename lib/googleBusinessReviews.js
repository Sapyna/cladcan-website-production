import fs from "node:fs/promises";
import path from "node:path";

const TOKEN_FILE = path.join(process.cwd(), ".google-business-tokens.json");

const STAR_RATINGS = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

async function googleFetch(url, accessToken, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(body?.error?.message || `Google API request failed (${response.status})`);
    error.status = response.status;
    error.details = body;
    throw error;
  }
  return body;
}

export async function saveGoogleBusinessTokens(tokenData) {
  const payload = {
    refresh_token: tokenData.refresh_token,
    saved_at: new Date().toISOString(),
  };

  if (!payload.refresh_token) return false;

  await fs.writeFile(TOKEN_FILE, JSON.stringify(payload, null, 2), {
    encoding: "utf8",
    mode: 0o600,
  });
  return true;
}

export async function getRefreshToken() {
  if (process.env.GOOGLE_BUSINESS_REFRESH_TOKEN) {
    return process.env.GOOGLE_BUSINESS_REFRESH_TOKEN;
  }

  try {
    const raw = await fs.readFile(TOKEN_FILE, "utf8");
    return JSON.parse(raw)?.refresh_token || null;
  } catch {
    return null;
  }
}

export async function getGoogleBusinessAccessToken() {
  const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_BUSINESS_CLIENT_SECRET;
  const refreshToken = await getRefreshToken();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Google Business Profile OAuth is not fully configured.");
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  const data = await response.json();
  if (!response.ok || !data.access_token) {
    const error = new Error(data?.error_description || data?.error || "Unable to refresh Google access token.");
    error.details = data;
    throw error;
  }
  return data.access_token;
}

async function listAccounts(accessToken) {
  const data = await googleFetch(
    "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
    accessToken
  );
  return data.accounts || [];
}

async function listLocationsForAccount(accessToken, accountName) {
  const url = new URL(
    `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations`
  );
  url.searchParams.set("readMask", "name,title,metadata");
  url.searchParams.set("pageSize", "100");

  const locations = [];
  let pageToken = "";
  do {
    if (pageToken) url.searchParams.set("pageToken", pageToken);
    else url.searchParams.delete("pageToken");
    const data = await googleFetch(url.toString(), accessToken);
    locations.push(...(data.locations || []));
    pageToken = data.nextPageToken || "";
  } while (pageToken);

  return locations;
}

export async function findCladCanLocation(accessToken) {
  const accounts = await listAccounts(accessToken);
  const candidates = [];

  for (const account of accounts) {
    if (!account?.name) continue;
    try {
      const locations = await listLocationsForAccount(accessToken, account.name);
      for (const location of locations) {
        candidates.push({ account, location });
      }
    } catch (error) {
      if (error.status !== 404 && error.status !== 403) throw error;
    }
  }

  if (!candidates.length) {
    throw new Error("No Google Business Profile locations were found for this account.");
  }

  return (
    candidates.find(({ location }) => /cladcan/i.test(location?.title || "")) ||
    candidates[0]
  );
}

async function listAllReviews(accessToken, accountName, locationName) {
  const parent = `${accountName}/${locationName}`;
  const reviews = [];
  let pageToken = "";
  let averageRating = null;
  let totalReviewCount = null;

  do {
    const url = new URL(`https://mybusiness.googleapis.com/v4/${parent}/reviews`);
    url.searchParams.set("pageSize", "50");
    url.searchParams.set("orderBy", "updateTime desc");
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const data = await googleFetch(url.toString(), accessToken);
    reviews.push(...(data.reviews || []));
    averageRating = data.averageRating ?? averageRating;
    totalReviewCount = data.totalReviewCount ?? totalReviewCount;
    pageToken = data.nextPageToken || "";
  } while (pageToken);

  return { reviews, averageRating, totalReviewCount };
}

function normalizeReview(review) {
  return {
    id: review.reviewId || review.name || "",
    author_name: review.reviewer?.displayName || "Google reviewer",
    profile_photo_url: review.reviewer?.profilePhotoUrl || "",
    rating: STAR_RATINGS[review.starRating] || 0,
    text: review.comment || "",
    create_time: review.createTime || null,
    update_time: review.updateTime || null,
    review_reply: review.reviewReply || null,
    source: "google_business_profile",
  };
}

export async function getAllGoogleBusinessReviews() {
  const accessToken = await getGoogleBusinessAccessToken();
  const { account, location } = await findCladCanLocation(accessToken);
  const data = await listAllReviews(accessToken, account.name, location.name);

  return {
    source: "google_business_profile",
    accountName: account.accountName || "",
    locationName: location.title || "CladCan",
    locationResource: location.name,
    placeId: location.metadata?.placeId || null,
    businessRating: data.averageRating,
    businessReviewCount: data.totalReviewCount,
    reviews: data.reviews.map(normalizeReview),
  };
}
