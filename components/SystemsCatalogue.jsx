"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Grid2X2, List } from "lucide-react";
import Image from "next/image";
import { getPrimaryVisual } from "@/data/visualCatalog";

export default function SystemsCatalogue({ systems }) {
  const [view, setView] = useState("grid");

  return (
    <section className="systemsCatalogueUI">
      <div className="wrap">
        <div className="systemsCatalogueHead">
          <div>
            <span className="systemsPageEyebrow systemsPageEyebrowDark">Explore the Collection</span>
            <h2>Exterior systems.</h2>
          </div>

          <div className="systemsCatalogueHeadRight">
            <p>
              Compare systems by material, appearance and application, then open the individual system page for details.
            </p>
            <div className="systemsViewSwitcher" role="group" aria-label="Product view">
              <button type="button" className={view === "grid" ? "active" : ""} onClick={() => setView("grid")} aria-pressed={view === "grid"}>
                <Grid2X2 size={16} /> Grid
              </button>
              <button type="button" className={view === "list" ? "active" : ""} onClick={() => setView("list")} aria-pressed={view === "list"}>
                <List size={17} /> List
              </button>
            </div>
          </div>
        </div>

        {view === "grid" ? (
          <div className="systemsVisualGrid">
            {systems.map((system) => (
              <Link href={system.href} key={system.href} className="systemsVisualCard">
                <div className="systemsVisualMedia">
                  <Image className="systemsCatalogueImage" src={system.image || getPrimaryVisual(`${system.title} ${system.subtitle}`)} alt={`${system.title} exterior system`} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="systemsCardNumber">{system.number}</span>
                  <span className="systemsCardArrow"><ArrowUpRight size={19} /></span>
                </div>
                <div className="systemsVisualBody">
                  <span className="systemsCardSubtitle">{system.subtitle}</span>
                  <h3>{system.title}</h3>
                  <p>{system.text}</p>
                  <span className="systemsExploreLink">Explore System <ArrowUpRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="systemsListTable">
            <div className="systemsListHeader">
              <span>System</span><span>Description</span><span>Explore</span>
            </div>
            {systems.map((system) => (
              <Link href={system.href} key={system.href} className="systemsListRow">
                <div className="systemsListIdentity">
                  <div className="systemsListThumb"><Image src={system.image || getPrimaryVisual(`${system.title} ${system.subtitle}`)} alt="" fill sizes="80px" /></div>
                  <div>
                    <span className="systemsListNumber">{system.number}</span>
                    <h3>{system.title}</h3>
                    <span className="systemsListSubtitle">{system.subtitle}</span>
                  </div>
                </div>
                <p>{system.text}</p>
                <span className="systemsListArrow"><ArrowUpRight size={18} /></span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
