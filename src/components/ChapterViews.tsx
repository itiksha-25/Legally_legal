import type { Chapter } from "@/types";
import { Stars } from "@/components/Stars";

interface ChapterIntroProps {
  chapter: Chapter;
  onStart: () => void;
}

// The intro screen shown at the start of each chapter.
export function ChapterIntro({ chapter, onStart }: ChapterIntroProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-xl flex-col items-center text-center">
      <Stars count={5} />

      <p className="font-body text-xs uppercase tracking-[0.3em] text-rose">
        Chapter {chapter.number} of 4
      </p>

      <h2 className="mt-4 font-display text-3xl text-burgundy sm:text-5xl">
        {chapter.title}
      </h2>

      <div className="my-6 flex items-center gap-3 text-rose/50">
        <span className="h-px w-10 bg-rose/40" />
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z" />
        </svg>
        <span className="h-px w-10 bg-rose/40" />
      </div>

      <p className="max-w-md font-body text-base leading-relaxed text-ink/80 sm:text-lg">
        {chapter.intro}
      </p>

      <button
        onClick={onStart}
        className="group mt-10 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
      >
        Let's go
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}

interface ChapterCompleteProps {
  chapter: Chapter;
  onContinue: () => void;
  isLast: boolean;
}

// Brief transition shown after photos are kept, before the next chapter.
export function ChapterComplete({ chapter, onContinue, isLast }: ChapterCompleteProps) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center text-center animate-fadeIn">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-burgundy bg-cream text-burgundy">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <h2 className="mt-5 font-display text-2xl text-burgundy">{chapter.title} — done</h2>
      <p className="mt-2 handwritten text-xl text-ink/70">
        {isLast ? "That's all of them. You ready?" : "Another chapter for the archive."}
      </p>
      <button
        onClick={onContinue}
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
      >
        {isLast ? "See them all together" : "Next chapter"}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}
