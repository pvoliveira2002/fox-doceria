"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function GalleryLightbox({ photos }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <>
      <div className="masonry-grid reveal">
        {photos.map((photo, index) => (
          <button
            className={index % 3 === 1 ? "masonry-item tall" : "masonry-item"}
            type="button"
            key={photo.alt}
            onClick={() => setActivePhoto(photo)}
          >
            <img src={photo.src} alt={photo.alt} />
            <span>{photo.title}</span>
          </button>
        ))}
      </div>
      {activePhoto ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.title}>
          <button className="lightbox-close" type="button" onClick={() => setActivePhoto(null)} aria-label="Fechar imagem">
            <X size={24} />
          </button>
          <img src={activePhoto.src} alt={activePhoto.alt} />
          <strong>{activePhoto.title}</strong>
        </div>
      ) : null}
    </>
  );
}
