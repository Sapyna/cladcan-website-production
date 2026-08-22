"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, ChevronLeft, ChevronRight } from "lucide-react";
import {
  HIDDEN_BREADCRUMB_SEGMENTS,
  PRODUCT_PARENT_OVERRIDES,
  NAV_CHILDREN_ORDER,
  routeLabel,
  routeTypeLabel,
} from "@/data/pageNavigation";
import { SITE_ROUTES } from "@/data/siteRoutes";

function cleanPath(pathname){
  if(!pathname) return "/";
  const clean = pathname.split("?")[0].split("#")[0].replace(/\/$/,"");
  return clean || "/";
}

function makeCrumbs(pathname){
  const path=cleanPath(pathname);
  if(path==="/") return [];
  const preferredParent=PRODUCT_PARENT_OVERRIDES[path];
  const basePath=preferredParent || path;
  const baseParts=basePath.split("/").filter(Boolean);
  const currentSegment=path.split("/").filter(Boolean).at(-1);

  const crumbs=[{label:"Home",href:"/"}];
  let cursor="";
  baseParts.forEach((part)=>{
    cursor += `/${part}`;
    if(HIDDEN_BREADCRUMB_SEGMENTS.has(part)) return;
    crumbs.push({label:routeLabel(part),href:cursor});
  });

  if(preferredParent){
    crumbs.push({label:routeLabel(currentSegment),href:null});
  } else if(crumbs.length){
    crumbs[crumbs.length-1]={...crumbs[crumbs.length-1],href:null};
  }
  return crumbs;
}

function nearestValidParent(path){
  if(!path || path==="/") return "/";
  let parent=PRODUCT_PARENT_OVERRIDES[path];
  if(parent && SITE_ROUTES.includes(parent)) return parent;

  const parts=path.split("/").filter(Boolean);
  parts.pop();
  while(parts.length){
    const candidate="/"+parts.join("/");
    if(SITE_ROUTES.includes(candidate)) return candidate;
    parts.pop();
  }
  return "/";
}

function directChildren(parent){
  if(NAV_CHILDREN_ORDER[parent]) return NAV_CHILDREN_ORDER[parent].filter(route=>SITE_ROUTES.includes(route));
  const parentParts=parent==="/" ? [] : parent.split("/").filter(Boolean);
  return SITE_ROUTES.filter(route=>{
    if(route==="/" || route===parent) return false;
    const parts=route.split("/").filter(Boolean);
    return parts.length===parentParts.length+1 && parts.slice(0,-1).join("/")===parentParts.join("/");
  });
}

function siblingInfo(pathname){
  const path=cleanPath(pathname);
  if(path==="/" || !SITE_ROUTES.includes(path)) return null;

  const parent=nearestValidParent(path);
  let siblings=directChildren(parent);

  // Shared product routes may not physically sit below their canonical application.
  // Include them in the user's logical context rather than the /products folder.
  if(!siblings.includes(path)){
    const contextual=NAV_CHILDREN_ORDER[parent] || [];
    if(contextual.includes(path)) siblings=contextual.filter(route=>SITE_ROUTES.includes(route));
  }

  if(!siblings.includes(path) || siblings.length<2){
    return {previous:null,next:null,parent};
  }

  const idx=siblings.indexOf(path);
  return {
    previous: idx>0 ? siblings[idx-1] : null,
    next: idx<siblings.length-1 ? siblings[idx+1] : null,
    parent,
  };
}

function labelFromPath(path){
  if(!path || path==="/") return "Home";
  return routeLabel(path.split("/").filter(Boolean).at(-1));
}

export function PageBreadcrumb(){
  const pathname=usePathname();
  const path=cleanPath(pathname);
  const [scrolled,setScrolled]=useState(false);
  const crumbs=useMemo(()=>makeCrumbs(pathname),[pathname]);
  const typeLabel=routeTypeLabel(path);

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>460);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  if(!crumbs.length) return null;

  return <>
    <nav className="pageBreadcrumbOverlay" aria-label="Breadcrumb">
      <div className="wrap pageBreadcrumbInner">
        {typeLabel && <span className="pageBreadcrumbType">{typeLabel}</span>}
        {crumbs.map((crumb,index)=><span key={`${crumb.label}-${index}`} className={index===crumbs.length-1?"current":""}>
          {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
          {index<crumbs.length-1&&<i aria-hidden="true">/</i>}
        </span>)}
      </div>
    </nav>

    <nav className={`pageStickyTrail ${scrolled?"visible":""}`} aria-label="Current page path">
      <div className="wrap pageStickyTrailInner">
        <div className="pageStickyTrailCrumbs">
          {typeLabel && <span className="pageStickyType">{typeLabel}</span>}
          {crumbs.slice(Math.max(0,crumbs.length-4)).map((crumb,index,array)=><span key={`${crumb.label}-sticky-${index}`} className={index===array.length-1?"current":""}>
            {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
            {index<array.length-1&&<i aria-hidden="true">/</i>}
          </span>)}
        </div>
        <button type="button" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Back to top">
          <ArrowUp size={14}/> <span>Top</span>
        </button>
      </div>
    </nav>
  </>;
}

export function PageSiblingNav(){
  const pathname=usePathname();
  const info=useMemo(()=>siblingInfo(pathname),[pathname]);
  const path=cleanPath(pathname);
  const supported=path.startsWith("/exterior-systems") || path.startsWith("/services") || path.startsWith("/projects") || path.startsWith("/systems");
  if(!supported || !info) return null;

  const parentLabel=labelFromPath(info.parent);
  const contextLabel=path.includes("/products/") ? "View all in" : "Back to";

  return <nav className="pageSiblingNav" aria-label="Previous and next pages">
    <div className="wrap pageSiblingNavInner">
      <div className="pageSiblingSlot previous">
        {info.previous ? <Link href={info.previous}>
          <ChevronLeft size={16}/><span><small>Previous</small><strong>{labelFromPath(info.previous)}</strong></span>
        </Link> : <span/>}
      </div>
      <Link href={info.parent} className="pageSiblingParent">
        <small>{contextLabel}</small><strong>{parentLabel}</strong>
      </Link>
      <div className="pageSiblingSlot next">
        {info.next ? <Link href={info.next}>
          <span><small>Next</small><strong>{labelFromPath(info.next)}</strong></span><ChevronRight size={16}/>
        </Link> : <span/>}
      </div>
    </div>
  </nav>;
}
