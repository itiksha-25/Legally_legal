import { useMemo } from "react";
import type { Photo } from "@/types";
import { SmartMedia } from "@/components/SmartMedia";

interface PolaroidProps {
  photo: Photo;
  index: number;
  onClick?: () => void;
  rotate?: number;
  className?: string;
  interactive?: boolean;
}

// Deterministic "random" rotation per index so the wall looks organic
// but doesn't reshuffle on every render.
function rotFor(i: number): number {
  const v = Math.sin(i * 12.9898) * 43758.5453;
  return ((v - Math.floor(v)) - 0.5) * 8; // -4 to +4 deg
}

export function Polaroid({
  photo,
  index,
  onClick,
  rotate,
  className = "",
  interactive = false,
}: PolaroidProps) {
  const r = rotate ?? rotFor(index);

  const tape = useMemo(() => {
    // tape position varies per card
    const v = Math.abs(Math.sin(index * 7.123)) % 1;
    if (v < 0.33) return "top";
    if (v < 0.66) return "top-left";
    return "top-right";
  }, [index]);

  const tapeEl =
    tape === "top" ? (
      <div className="tape left-1/2 -top-2.5 -translate-x-1/2 -rotate-3" />
    ) : tape === "top-left" ? (
      <div className="tape -top-2.5 left-3 rotate-[-8deg]" />
    ) : (
      <div className="tape -top-2.5 right-3 rotate-[8deg]" />
    );

  return (
    <figure
      className={[
        "polaroid relative inline-block",
        interactive ? "cursor-pointer transition-transform duration-300 hover:scale-[1.04] hover:z-10" : "",
        className,
      ].join(" ")}
      style={{ transform: `rotate(${r}deg)` }}
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {tapeEl}
      <div className="relative aspect-square w-full overflow-hidden bg-parchment">
        <SmartMedia
          src={photo.src}
          alt={photo.caption || photo.title || "photo"}
          type={photo.type}
          className="h-full w-full object-cover"
        />
        {photo.date && (
          <span className="absolute bottom-1.5 right-1.5 rounded bg-ink/70 px-1.5 py-0.5 font-body text-[10px] uppercase tracking-wide text-cream/90">
            {photo.date}
          </span>
        )}
      </div>
      <figcaption className="mt-2 px-1 text-center">
        {photo.title && (
          <p className="font-display text-base leading-tight text-burgundy">{photo.title}</p>
        )}
        {photo.caption && (
          <p className="handwritten mt-0.5 text-lg leading-snug text-ink/80">{photo.caption}</p>
        )}
      </figcaption>
    </figure>
  );
}
