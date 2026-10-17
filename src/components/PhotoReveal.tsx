import { useState } from "react";
import type { Photo } from "@/types";
import { Polaroid } from "@/components/Polaroid";

interface PhotoRevealProps {
  photos: Photo[];
  chapterTitle: string;
  startIndex: number;
  onKeep: () => void;
}

// SCREEN D — Photo Unlock, one photo at a time with a flip animation.
export function PhotoReveal({ photos, chapterTitle, startIndex, onKeep }: PhotoRevealProps) {
  const [idx, setIdx] = useState(0);
  const photo = photos[idx];
  const isLast = idx === photos.length - 1;

  const handleNext = () => {
    if (isLast) {
      onKeep();
    } else {
      setIdx((i) => i + 1);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center">
      <p className="mb-2 font-body text-xs uppercase tracking-[0.25em] text-rose">
        Unlocked a memory
      </p>
      <h2 className="mb-8 text-center font-display text-2xl text-burgundy">{chapterTitle}</h2>

      <div key={idx} className="animate-flipIn" style={{ perspective: "1000px" }}>
        <Polaroid photo={photo} index={startIndex + idx} className="w-64 sm:w-72" />
      </div>

      {photo.note && (
        <p className="handwritten mt-5 max-w-xs text-center text-lg text-ink/70">
          {photo.note}
        </p>
      )}

      <div className="mt-6 flex items-center gap-1.5">
        {photos.map((_, i) => (
          <span
            key={i}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              i === idx ? "w-6 bg-burgundy" : i < idx ? "w-1.5 bg-burgundy/50" : "w-1.5 bg-parchment",
            ].join(" ")}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
      >
        {isLast ? "Keep this memory" : "Next photo"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}
