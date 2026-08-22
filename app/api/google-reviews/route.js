import currentGoogleReviews from "@/data/google-reviews-current.json";
export const dynamic="force-dynamic";

function normalize(review){
 return {
  author_name:review.author_name||"Google reviewer",
  profile_photo_url:review.profile_photo_url||"",
  rating:Number(review.rating||0),
  relative_time_description:review.relative_time_description||"",
  text:review.text||"",
  time:Number(review.time||0),
  source:"google"
 };
}
export async function GET(){
 const apiKey=process.env.GOOGLE_PLACES_API_KEY;
 const placeId=process.env.GOOGLE_PLACE_ID || "ChIJEavtLo3V1IkRFJP6hE3vyrI";

 if(!apiKey){
  return Response.json({
   configured:false,
   source:"verified_google_snapshot",
   businessRating:4.8,
   businessReviewCount:39,
   reviews:currentGoogleReviews.filter(r=>Number(r.rating)===5),
   message:"Displaying only review excerpts currently retrievable from CladCan's Google business result. Add a Google API key for live refresh."
  });
 }
 try{
  const url=new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id",placeId);
  url.searchParams.set("fields","name,rating,user_ratings_total,reviews,url");
  url.searchParams.set("reviews_sort","newest");
  url.searchParams.set("key",apiKey);
  const response=await fetch(url,{cache:"no-store"});
  const data=await response.json();
  if(data.status&&data.status!=="OK")throw new Error(data.error_message||data.status);
  const place=data.result||{};
  const reviews=(place.reviews||[]).map(normalize).filter(r=>r.rating===5).sort((a,b)=>b.time-a.time);
  return Response.json({
   configured:true,source:"google_places",googleUrl:place.url||"",
   businessRating:place.rating??null,businessReviewCount:place.user_ratings_total??null,reviews
  });
 }catch(error){
  return Response.json({
   configured:false,source:"verified_google_snapshot",businessRating:4.8,businessReviewCount:39,
   reviews:currentGoogleReviews.filter(r=>Number(r.rating)===5),
   message:"Live Google request failed; showing only previously verified Google review excerpts."
  });
 }
}
