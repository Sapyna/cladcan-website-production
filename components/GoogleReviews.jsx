"use client";
import {useEffect,useState} from "react";
import {Star,ExternalLink} from "lucide-react";

function initials(name){
  return (name||"Google reviewer").split(" ").filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase();
}
export default function GoogleReviews(){
  const [data,setData]=useState({loading:true,reviews:[]});
  useEffect(()=>{
    fetch("/api/google-reviews",{cache:"no-store"})
      .then(async r=>({ok:r.ok,...await r.json()}))
      .then(d=>setData({loading:false,...d}))
      .catch(()=>setData({loading:false,reviews:[],error:"Google Reviews could not be loaded."}));
  },[]);
  if(data.loading) return <div className="reviewStatus">Loading current Google reviews…</div>;
  if(!data.configured && !(data.reviews||[]).length) return <div className="reviewStatus">
    <b>Google Reviews feed ready.</b>
    <span>Connect the CladCan Google API credentials to display live reviews. No sample reviews are shown.</span>
  </div>;
  if(data.error) return <div className="reviewStatus"><b>Google Reviews temporarily unavailable.</b><span>No cached or invented testimonials are substituted.</span></div>;

  const reviews=(data.reviews||[]).filter(r=>Number(r.rating)===5);
  return <div className="googleReviewsBlock">
    <div className="reviewSummary">
      <div>
        <div className="reviewStars">{[1,2,3,4,5].map(i=><Star key={i} size={20} fill="currentColor"/>)}</div>
        <strong>{data.businessRating ?? "—"}/5</strong>
        <span>{data.businessReviewCount ?? "—"} Google Reviews</span>
      </div>
      <p>Five-star Google reviews only.</p>
      {data.source==="verified_google_snapshot"&&<small className="googleSnapshotNote">Verified Google snapshot · live refresh activates with Google API credentials</small>}{data.googleUrl&&<a className="googleReviewLink" href={data.googleUrl} target="_blank" rel="noreferrer">View on Google <ExternalLink size={12}/></a>}
    </div>
    {reviews.length===0?<div className="reviewStatus"><span>No five-star reviews were returned by the current Google feed.</span></div>:
    <div className="reviewGrid">
      {reviews.slice(0,6).map((r,i)=><article className="reviewCard" key={`${r.author_name}-${r.time}-${i}`}>
        <div className="reviewStars smallStars">{[1,2,3,4,5].map(j=><Star key={j} size={13} fill="currentColor"/>)}</div>
        <blockquote>“{r.text}”</blockquote>
        <div className="reviewPerson">
          {r.profile_photo_url?<img src={r.profile_photo_url} alt=""/>:<span>{initials(r.author_name)}</span>}
          <div><b>{r.author_name}</b><small>{r.relative_time_description || "Google review"}</small></div>
        </div>
      </article>)}
    </div>}
  </div>;
}
