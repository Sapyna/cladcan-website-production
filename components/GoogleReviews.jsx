"use client";
import {useEffect,useMemo,useState} from "react";
import {Star,ExternalLink,ChevronLeft,ChevronRight} from "lucide-react";
import s from "./GoogleReviews.module.css";

function initials(name){return (name||"Google reviewer").split(" ").filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase()}
function reviewDate(r){const value=r.create_time||r.createTime||r.update_time||r.updateTime;if(!value)return "Google review";const d=new Date(value);return Number.isNaN(d.getTime())?"Google review":d.toLocaleDateString("en-CA",{year:"numeric",month:"short"})}
function rating(value){const n=Number(value);return Number.isFinite(n)?n.toFixed(1):"—"}
export default function GoogleReviews(){
 const [data,setData]=useState({loading:true,reviews:[]}); const [page,setPage]=useState(0);
 useEffect(()=>{fetch("/api/google-reviews",{cache:"no-store"}).then(async r=>({ok:r.ok,...await r.json()})).then(d=>setData({loading:false,...d})).catch(()=>setData({loading:false,reviews:[],error:"Google Reviews could not be loaded."}))},[]);
 const reviews=useMemo(()=>(data.reviews||[]).filter(r=>Number(r.rating)===5&&String(r.text||"").trim()).sort((a,b)=>new Date(b.create_time||b.createTime||0)-new Date(a.create_time||a.createTime||0)).slice(0,9),[data.reviews]);
 const pageCount=Math.max(1,Math.ceil(reviews.length/3)); const visible=reviews.slice(page*3,page*3+3);
 if(data.loading)return <div className={s.status}>Loading live Google reviews…</div>;
 if((data.error||!data.configured)&&!(data.reviews||[]).length)return <div className={s.status}><b>Google Reviews temporarily unavailable.</b><span>Please check back shortly.</span></div>;
 return <div className={s.block}>
  <div className={s.summary}>
   <div className={s.scoreGroup}><span className={s.googleLabel}><b>G</b> Google Reviews</span><div className={s.scoreLine}><strong>{rating(data.businessRating)}</strong><div className={s.scoreMeta}><div className={s.stars}>{[1,2,3,4,5].map(i=><Star key={i} size={18} fill="currentColor"/>)}</div><span>Based on {data.businessReviewCount??"—"} reviews</span></div></div></div>
   <div className={s.actions}>{pageCount>1&&<div className={s.arrows}><button onClick={()=>setPage(p=>(p-1+pageCount)%pageCount)} aria-label="Previous reviews"><ChevronLeft size={17}/></button><span>{page+1} / {pageCount}</span><button onClick={()=>setPage(p=>(p+1)%pageCount)} aria-label="Next reviews"><ChevronRight size={17}/></button></div>}{data.googleUrl&&<a className={s.googleLink} href={data.googleUrl} target="_blank" rel="noreferrer">View on Google <ExternalLink size={12}/></a>}</div>
  </div>
  {reviews.length===0?<div className={s.status}>No five-star reviews are available to display right now.</div>:<div className={s.grid}>{visible.map((r,i)=><article className={s.card} key={`${r.id||r.author_name}-${r.create_time||i}`}><div className={s.cardTop}><div className={s.stars}>{[1,2,3,4,5].map(j=><Star key={j} size={13} fill="currentColor"/>)}</div><span>Google</span></div><blockquote>“{r.text}”</blockquote><div className={s.person}>{r.profile_photo_url?<img src={r.profile_photo_url} alt="" referrerPolicy="no-referrer"/>:<span className={s.avatar}>{initials(r.author_name)}</span>}<div><b>{r.author_name||"Google reviewer"}</b><small>{reviewDate(r)}</small></div></div></article>)}</div>}
  {data.source==="google_business_profile"&&<div className={s.liveNote}><span/> Live from Google Business Profile</div>}
 </div>
}
