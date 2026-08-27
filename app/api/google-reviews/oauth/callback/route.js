import { NextResponse } from "next/server";
import { saveGoogleBusinessTokens } from "@/lib/googleBusinessReviews";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const oauthError = searchParams.get("error");

  if (oauthError) {
    return NextResponse.json({ error: `Google OAuth error: ${oauthError}` }, { status: 400 });
  }

  if (!code) {
    return NextResponse.json({ error: "Missing authorization code." }, { status: 400 });
  }

  const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_BUSINESS_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_BUSINESS_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Google Business OAuth environment variables are incomplete." },
      { status: 500 }
    );
  }

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
    cache: "no-store",
  });

  const tokenData = await tokenResponse.json();
  if (!tokenResponse.ok) {
    return NextResponse.json(
      { error: "Failed to exchange authorization code for tokens.", details: tokenData },
      { status: tokenResponse.status }
    );
  }

  const stored = await saveGoogleBusinessTokens(tokenData);

  return NextResponse.json({
    success: true,
    refreshTokenStored: stored,
    hasAccessToken: Boolean(tokenData.access_token),
    hasRefreshToken: Boolean(tokenData.refresh_token),
    expiresIn: tokenData.expires_in || null,
    next: "/api/google-reviews",
  });
}
