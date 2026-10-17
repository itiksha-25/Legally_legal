import type { Chapter } from "@/types";

interface ProgressBarProps {
  chapters: Chapter[];
  currentChapter: number;
  completedChapters: number[];
  unlockedCount: number;
  totalPhotos: number;
}

// A horizontal chapter trail + memory counter.
export function ProgressBar({
  chapters,
  currentChapter,
  completedChapters,
  unlockedCount,
  totalPhotos,
}: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2">
        {chapters.map((ch, idx) => {
          const isDone = completedChapters.includes(idx);
          const isCurrent = idx === currentChapter;
          return (
            <div key={ch.id} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-serif transition-all duration-500",
                    isDone
                      ? "border-burgundy bg-burgundy text-cream"
                      : isCurrent
                        ? "border-burgundy bg-cream text-burgundy animate-fadeInScale"
                        : "border-parchment bg-cream/50 text-ink/40",
                  ].join(" ")}
                  aria-label={`Chapter ${ch.number}: ${ch.title}${isDone ? " (complete)" : isCurrent ? " (current)" : ""}`}
                >
                  {isDone ? "✓" : ch.number}
                </div>
                <span
                  className={[
                    "hidden text-[10px] font-body uppercase tracking-wider sm:block",
                    isCurrent ? "text-burgundy" : isDone ? "text-burgundy/70" : "text-ink/40",
                  ].join(" ")}
                >
                  {ch.title}
                </span>
              </div>
              {idx < chapters.length - 1 && (
                <div
                  className={[
                    "mx-1 h-0.5 flex-1 rounded-full transition-all duration-500",
                    isDone ? "bg-burgundy" : "bg-parchment",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 font-body text-sm text-ink/70">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
        <span>
          Memories collected:{" "}
          <span className="font-semibold text-burgundy">
            {unlockedCount}/{totalPhotos}
          </span>
        </span>
      </div>
    </div>
  );
}
