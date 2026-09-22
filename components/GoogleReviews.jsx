"use client";
import {useEffect,useMemo,useState} from "react";
import {Star,ExternalLink,ChevronLeft,ChevronRight} from "lucide-react";

function initials(name){
  return (name||"Google reviewer").split(" ").filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase();
}
function reviewDate(r){
  const value=r.create_time||r.createTime||r.update_time||r.updateTime;
  if(!value) return "Google review";
  const d=new Date(value);
  return Number.isNaN(d.getTime())?"Google review":d.toLocaleDateString("en-CA",{year:"numeric",month:"short"});
}
export default function GoogleReviews(){
  const [data,setData]=useState({loading:true,reviews:[]});
  const [page,setPage]=useState(0);
  useEffect(()=>{
    fetch("/api/google-reviews",{cache:"no-store"})
      .then(async r=>({ok:r.ok,...await r.json()}))
      .then(d=>setData({loading:false,...d}))
      .catch(()=>setData({loading:false,reviews:[],error:"Google Reviews could not be loaded."}));
  },[]);

  const reviews=useMemo(()=>{
    return (data.reviews||[])
      .filter(r=>Number(r.rating)===5 && String(r.text||"").trim())
      .sort((a,b)=>new Date(b.create_time||b.createTime||0)-new Date(a.create_time||a.createTime||0))
      .slice(0,9);
  },[data.reviews]);
  const pageCount=Math.max(1,Math.ceil(reviews.length/3));
  const visible=reviews.slice(page*3,page*3+3);

  if(data.loading) return <div className="reviewStatus">Loading live Google reviews…</div>;
  if(data.error && !(data.reviews||[]).length) return <div className="reviewStatus"><b>Google Reviews temporarily unavailable.</b><span>Please check back shortly.</span></div>;
  if(!data.configured && !(data.reviews||[]).length) return <div className="reviewStatus"><b>Google Reviews are temporarily unavailable.</b></div>;

  return <div className="googleReviewsBlock googleReviewsLive">
    <div className="reviewSummary">
      <div className="reviewScoreGroup">
        <span className="reviewGoogleWordmark"><b>G</b> Google Reviews</span>
        <div className="reviewScoreLine"><strong>{data.businessRating ?? "—"}</strong><div><div className="reviewStars">{[1,2,3,4,5].map(i=><Star key={i} size={18} fill="currentColor"/>)}</div><span>Based on {data.businessReviewCount ?? "—"} reviews</span></div></div>
      </div>
      <p>Recent five-star feedback from customers who worked with CladCan.</p>
      <div className="reviewSummaryActions">
        {pageCount>1&&<div className="reviewArrows"><button onClick={()=>setPage(p=>(p-1+pageCount)%pageCount)} aria-label="Previous reviews"><ChevronLeft size={17}/></button><span>{page+1} / {pageCount}</span><button onClick={()=>setPage(p=>(p+1)%pageCount)} aria-label="Next reviews"><ChevronRight size={17}/></button></div>}
        {data.googleUrl&&<a className="googleReviewLink" href={data.googleUrl} target="_blank" rel="noreferrer">View on Google <ExternalLink size={12}/></a>}
      </div>
    </div>
    {reviews.length===0?<div className="reviewStatus"><span>No five-star reviews are available to display right now.</span></div>:
    <div className="reviewGrid reviewGridLive">
      {visible.map((r,i)=><article className="reviewCard reviewCardLive" key={`${r.id||r.author_name}-${r.create_time||i}`}>
        <div className="reviewCardTop"><div className="reviewStars smallStars">{[1,2,3,4,5].map(j=><Star key={j} size={13} fill="currentColor"/>)}</div><span>Google</span></div>
        <blockquote>“{r.text}”</blockquote>
        <div className="reviewPerson">
          {r.profile_photo_url?<img src={r.profile_photo_url} alt="" referrerPolicy="no-referrer" />:<span>{initials(r.author_name)}</span>}
          <div><b>{r.author_name||"Google reviewer"}</b><small>{reviewDate(r)}</small></div>
        </div>
      </article>)}
    </div>}
    {data.source==="google_business_profile"&&<div className="reviewLiveNote"><span></span> Live from Google Business Profile</div>}
  </div>;
}
