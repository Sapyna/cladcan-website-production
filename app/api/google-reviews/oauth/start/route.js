import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.GOOGLE_BUSINESS_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_BUSINESS_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    return NextResponse.json({ error: "Google Business OAuth is not configured." }, { status: 500 });
  }

  const authUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("scope", "https://www.googleapis.com/auth/business.manage");
  authUrl.searchParams.set("access_type", "offline");
  authUrl.searchParams.set("prompt", "consent");

  return NextResponse.redirect(authUrl);
}
