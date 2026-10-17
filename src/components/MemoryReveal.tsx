import { useState } from "react";
import type { Memory } from "@/types";
import { SmartMedia } from "@/components/SmartMedia";

interface MemoryRevealProps {
  memories: Memory[];
  onDone: () => void;
}

// Reveals memories one at a time with a flip animation.
// Works for both images and videos. Each memory has its own Continue.
export function MemoryReveal({ memories, onDone }: MemoryRevealProps) {
  const [idx, setIdx] = useState(0);
  const memory = memories[idx];
  const isLast = idx === memories.length - 1;

  const handleNext = () => {
    if (isLast) {
      onDone();
    } else {
      setIdx((i) => i + 1);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center">
      <p className="mb-2 font-body text-xs uppercase tracking-[0.25em] text-rose">
        Unlocked a memory
      </p>

      <div key={idx} className="animate-flipIn" style={{ perspective: "1000px" }}>
        <div className="polaroid relative w-64 sm:w-72">
          {/* tape */}
          <div className="tape left-1/2 -top-2.5 -translate-x-1/2 -rotate-3" />
          <div className="relative aspect-square w-full overflow-hidden bg-parchment">
            <SmartMedia
              src={memory.src}
              alt={memory.caption || memory.title || "memory"}
              type={memory.type}
              className="h-full w-full object-cover"
            />
            {memory.date && (
              <span className="absolute bottom-1.5 right-1.5 rounded bg-ink/70 px-1.5 py-0.5 font-body text-[10px] uppercase tracking-wide text-cream/90">
                {memory.date}
              </span>
            )}
          </div>
          <div className="mt-2 px-1 text-center">
            {memory.title && (
              <p className="font-display text-base leading-tight text-burgundy">{memory.title}</p>
            )}
            {memory.caption && (
              <p className="handwritten mt-0.5 text-lg leading-snug text-ink/80">{memory.caption}</p>
            )}
          </div>
        </div>
      </div>

      {memory.note && (
        <p className="handwritten mt-5 max-w-xs text-center text-lg text-ink/70">
          {memory.note}
        </p>
      )}

      {/* progress dots if multiple memories */}
      {memories.length > 1 && (
        <div className="mt-6 flex items-center gap-1.5">
          {memories.map((_, i) => (
            <span
              key={i}
              className={[
                "h-1.5 rounded-full transition-all duration-300",
                i === idx ? "w-6 bg-burgundy" : i < idx ? "w-1.5 bg-burgundy/50" : "w-1.5 bg-parchment",
              ].join(" ")}
            />
          ))}
        </div>
      )}

      <button
        onClick={handleNext}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
      >
        {isLast ? "Keep this memory" : "Next memory"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}
