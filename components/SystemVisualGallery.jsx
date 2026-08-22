import Image from "next/image";

export default function SystemVisualGallery({ title, images = [] }) {
  if (!images.length) return null;
  return <section className="systemVisualGallery" aria-label={`${title} project and product images`}>
    <div className="wrap">
      <div className="systemVisualGalleryHead">
        <span>PRODUCT & PROJECT VISUALS</span>
        <h2>See the system in context.</h2>
      </div>
      <div className="systemVisualGalleryGrid">
        {images.slice(0, 3).map((src, index) => <figure key={src} className={index === 0 ? "systemVisualGalleryLead" : ""}>
          <Image src={src} alt={`${title} ${index === 0 ? "exterior application" : "product detail"}`} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"} />
        </figure>)}
      </div>
    </div>
  </section>;
}
