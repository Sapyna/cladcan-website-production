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
  if(data.loading) return <div className="reviewStatus">Loading Google reviews…</div>;
  if(!data.configured && !(data.reviews||[]).length) return <div className="reviewStatus">
    <b>Google Reviews are temporarily unavailable.</b>
    <span>Please visit our Google Business Profile to read current customer feedback.</span>
  </div>;
  if(data.error && !(data.reviews||[]).length) return <div className="reviewStatus"><b>Google Reviews temporarily unavailable.</b><span>Please check back shortly or view our reviews directly on Google.</span></div>;

  const reviews=(data.reviews||[]).filter(r=>Number(r.rating)===5);
  return <div className="googleReviewsBlock">
    <div className="reviewSummary">
      <div>
        <div className="reviewStars">{[1,2,3,4,5].map(i=><Star key={i} size={20} fill="currentColor"/>)}</div>
        <strong>{data.businessRating ?? "—"}/5</strong>
        <span>{data.businessReviewCount ?? "—"} Google Reviews</span>
      </div>
      <p>A selection of five-star feedback from CladCan customers.</p>
      {data.googleUrl&&<a className="googleReviewLink" href={data.googleUrl} target="_blank" rel="noreferrer">View all reviews on Google <ExternalLink size={12}/></a>}
    </div>
    {reviews.length===0?<div className="reviewStatus"><span>No five-star reviews are available to display right now.</span></div>:
    <div className="reviewGrid">
      {reviews.map((r,i)=><article className="reviewCard" key={`${r.id||r.author_name}-${r.create_time||r.time||i}`}>
        <div className="reviewStars smallStars">{[1,2,3,4,5].map(j=><Star key={j} size={13} fill="currentColor"/>)}</div>
        <blockquote>“{r.text}”</blockquote>
        <div className="reviewPerson">
          {r.profile_photo_url?<img src={r.profile_photo_url} alt={`${r.author_name} Google review profile`} />:<span>{initials(r.author_name)}</span>}
          <div><b>{r.author_name}</b><small>{r.relative_time_description || "Google review"}</small></div>
        </div>
      </article>)}
    </div>}
  </div>;
}
