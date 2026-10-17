import { useEffect, useState } from "react";
import type { Photo } from "@/types";
import { SmartMedia } from "@/components/SmartMedia";

interface LightboxProps {
  photo: Photo | null;
  onClose: () => void;
}

export function Lightbox({ photo, onClose }: LightboxProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (photo) {
      setShow(true);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    } else {
      setShow(false);
    }
  }, [photo, onClose]);

  if (!photo) return null;

  return (
    <div
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      <div
        className="polaroid relative max-h-[90vh] max-w-sm animate-fadeInScale overflow-auto sm:max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-burgundy text-cream shadow-soft transition hover:bg-burgundy-dark"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="aspect-square w-full overflow-hidden bg-parchment">
          <SmartMedia src={photo.src} alt={photo.caption || photo.title || "photo"} type={photo.type} className="h-full w-full object-cover" />
        </div>
        <div className="mt-3 px-2 text-center">
          {photo.title && (
            <p className="font-display text-lg text-burgundy">{photo.title}</p>
          )}
          {photo.date && (
            <p className="font-body text-xs uppercase tracking-wide text-ink/50">{photo.date}</p>
          )}
          {photo.caption && (
            <p className="handwritten mt-1 text-xl text-ink/80">{photo.caption}</p>
          )}
          {photo.note && (
            <p className="mt-2 font-body text-sm italic text-ink/60">{photo.note}</p>
          )}
        </div>
      </div>
    </div>
  );
}
