import { useEffect, useRef, useState } from "react";
import { slideshowConfig, slideshowMedia } from "@/data/birthdayContent";
import { SmartMedia } from "@/components/SmartMedia";

interface SlideshowProps {
  onSkip: () => void;
}

const VIDEO_EXTS = [".mp4", ".mov", ".webm", ".ogg", ".avi"];

function isVideo(src: string, type?: "image" | "video"): boolean {
  if (type === "video") return true;
  if (type === "image") return false;
  return VIDEO_EXTS.some((ext) => src.toLowerCase().endsWith(ext));
}

// A fun auto-playing slideshow of leftover photos and videos.
// Images advance on a timer; videos advance when they end.
export function Slideshow({ onSkip }: SlideshowProps) {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const media = slideshowMedia;

  const advance = () => {
    setIdx((i) => {
      if (i + 1 >= media.length) {
        // Loop back to start — she can skip to the letter when ready.
        return 0;
      }
      return i + 1;
    });
  };

  // Image auto-advance timer
  useEffect(() => {
    if (media.length === 0) return;
    const current = media[idx];
    if (!isVideo(current.src, current.type)) {
      timerRef.current = setTimeout(advance, slideshowConfig.secondsPerImage * 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, media.length]);

  if (media.length === 0) {
    // Nothing to show — skip straight to the letter.
    return null;
  }

  const current = media[idx];

  return (
    <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-12">
      <div className="mb-8 text-center animate-fadeIn">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-rose">The outtakes reel</p>
        <h2 className="mt-3 font-display text-3xl text-burgundy sm:text-5xl">
          {slideshowConfig.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-base italic text-ink/70">
          {slideshowConfig.subheading}
        </p>
      </div>

      <div key={idx} className="polaroid relative w-full max-w-sm animate-flipIn sm:max-w-md">
        <div className="tape left-1/2 -top-2.5 -translate-x-1/2 -rotate-3" />
        <div className="relative w-full overflow-hidden rounded-sm bg-parchment">
          {isVideo(current.src, current.type) ? (
            <video
              src={`/photos/${current.src}`}
              className="w-full object-cover"
              controls
              playsInline
              autoPlay
              muted
              onEnded={advance}
              onError={(e) => {
                // skip broken media
                e.currentTarget.style.display = "none";
                advance();
              }}
            />
          ) : (
            <SmartMedia
              src={current.src}
              alt={current.caption || "outtake"}
              type={current.type}
              className="w-full object-cover"
            />
          )}
        </div>
        {current.caption && (
          <p className="handwritten mt-3 text-center text-xl text-ink/80">{current.caption}</p>
        )}
      </div>

      {/* progress indicators */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
        {media.map((_, i) => (
          <span
            key={i}
            className={[
              "h-1.5 rounded-full transition-all duration-300",
              i === idx ? "w-6 bg-burgundy" : "w-1.5 bg-parchment",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={advance}
          className="rounded-full border-2 border-parchment px-5 py-2.5 font-body text-sm text-ink/70 transition hover:border-burgundy hover:text-burgundy"
        >
          Next
        </button>
        <button
          onClick={onSkip}
          className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-2.5 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
        >
          {slideshowConfig.skipButton}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      </div>
    </section>
  );
}
