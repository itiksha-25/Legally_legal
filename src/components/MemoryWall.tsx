import type { Photo } from "@/types";
import { Polaroid } from "@/components/Polaroid";
import { memoryWall, photoInstructions } from "@/data/birthdayContent";

interface MemoryWallProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
  onContinue: () => void;
}

// SCREEN E — Memory Wall: a curated collage, not a uniform grid.
export function MemoryWall({ photos, onPhotoClick, onContinue }: MemoryWallProps) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-12">
      <div className="text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-rose">The Memory Wall</p>
        <h2 className="mt-3 font-display text-3xl text-burgundy sm:text-5xl">{memoryWall.heading}</h2>
        <p className="mx-auto mt-3 max-w-md font-body text-base italic text-ink/70">
          {memoryWall.subheading}
        </p>
      </div>

      {/* Film strip accent */}
      <div className="film-strip mx-auto my-8 h-5 w-full max-w-3xl rounded opacity-70" aria-hidden="true" />

      {/* Masonry-like collage using CSS columns */}
      <div className="mt-8 columns-2 gap-4 sm:gap-6 md:columns-3 [&>*]:mb-4 sm:[&>*]:mb-6">
        {photos.map((photo, i) => (
          <div key={i} className="break-inside-avoid">
            <Polaroid
              photo={photo}
              index={i}
              interactive
              onClick={() => onPhotoClick(photo)}
              className="w-full animate-fadeIn"
            />
          </div>
        ))}
      </div>

      <p className="mt-10 text-center font-body text-xs text-ink/40">{photoInstructions.note}</p>

      <div className="mt-10 flex justify-center">
        <button
          onClick={onContinue}
          className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-8 py-3.5 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
        >
          There's one more thing
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}
