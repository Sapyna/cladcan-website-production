import currentGoogleReviews from "@/data/google-reviews-current.json";
import { getAllGoogleBusinessReviews } from "@/lib/googleBusinessReviews";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getAllGoogleBusinessReviews();
    return Response.json({
      configured: true,
      ...data,
    });
  } catch (error) {
    console.error("Google Business Profile reviews error:", error);
    return Response.json({
      configured: false,
      source: "verified_google_snapshot",
      businessRating: 4.8,
      businessReviewCount: 39,
      reviews: currentGoogleReviews,
      message:
        "Live Google Business Profile reviews are not available yet; showing the previously verified snapshot.",
      error: error?.message || "Unknown Google Business Profile error",
    });
  }
}
