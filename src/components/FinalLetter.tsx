import { useEffect, useState } from "react";
import { letter } from "@/data/birthdayContent";
import { site } from "@/data/birthdayContent";
import { Typewriter } from "@/components/Typewriter";
import { Confetti } from "@/components/Confetti";
import { AnswerSharing } from "@/components/AnswerSharing";

interface FinalLetterProps {
  onRelive: () => void;
  answers: Record<string, string>;
}

// SCREEN F — The Final Letter
export function FinalLetter({ onRelive, answers }: FinalLetterProps) {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [confirmRestart, setConfirmRestart] = useState(false);

  const { displayed, done, skip } = Typewriter({
    paragraphs: letter.paragraphs,
    onComplete: () => setCelebrate(true),
  });

  // When the letter is opened, wait for the flap animation then reveal text.
  useEffect(() => {
    if (opened && !revealed) {
      const t = setTimeout(() => setRevealed(true), 900);
      return () => clearTimeout(t);
    }
  }, [opened, revealed]);

  const handleReliveClick = () => setConfirmRestart(true);
  const handleConfirmRelive = () => {
    setConfirmRestart(false);
    onRelive();
  };

  return (
    <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16">
      <Confetti active={celebrate} />

      {!opened ? (
        // Envelope
        <div className="flex flex-col items-center animate-fadeIn">
          <p className="mb-6 font-body text-xs uppercase tracking-[0.3em] text-rose">
            One last thing
          </p>

          <button
            onClick={() => setOpened(true)}
            className="group relative"
            aria-label={letter.openButton}
          >
            {/* Envelope body */}
            <div className="relative h-56 w-80 overflow-hidden rounded-md border-2 border-burgundy/30 bg-cream shadow-soft transition-transform duration-300 group-hover:scale-[1.02] sm:h-64 sm:w-96">
              {/* Flap */}
              <div
                className="absolute left-0 top-0 z-20 h-0 w-0"
                style={{
                  borderTop: "112px solid #E8DCC8",
                    borderLeft: "160px solid transparent",
                    borderRight: "160px solid transparent",
                }}
              />
              <div
                className="absolute left-0 top-0 z-20 h-0 w-0 sm:hidden"
                style={{
                  borderTop: "128px solid #E8DCC8",
                  borderLeft: "192px solid transparent",
                  borderRight: "192px solid transparent",
                }}
              />
              {/* Letter peeking */}
              <div className="absolute inset-x-4 bottom-4 top-20 rounded bg-cream/90 border border-burgundy/15" />
              <div className="absolute left-1/2 top-28 z-10 -translate-x-1/2 text-center">
                <p className="handwritten text-2xl text-burgundy">{site.sisterName}</p>
                <p className="font-body text-xs text-ink/50">a letter, just for you</p>
              </div>
              {/* Wax seal */}
              <div className="absolute left-1/2 top-16 z-30 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-burgundy text-cream shadow-soft">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </button>

          <button
            onClick={() => setOpened(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-8 py-3.5 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
          >
            {letter.openButton}
            <span>💌</span>
          </button>
        </div>
      ) : (
        // Opened letter
        <div className="paper-texture vignette relative w-full animate-slideUp rounded-sm border border-burgundy/15 bg-cream p-6 shadow-soft sm:p-10">
          <div className="pointer-events-none absolute inset-3 dashed-scrap rounded-sm" />

          <div className="relative">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-rose">A letter</p>
            <h2 className="mt-2 font-display text-3xl text-burgundy sm:text-4xl">
              Dear {site.sisterName},
            </h2>

            {revealed ? (
              <div className="mt-6 space-y-4">
                {displayed.map((para, i) => (
                  <p
                    key={i}
                    className="font-body text-base leading-relaxed text-ink/85 sm:text-lg"
                  >
                    {para}
                    {i === displayed.length - 1 && !done && (
                      <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-burgundy align-middle" />
                    )}
                  </p>
                ))}

                {done && (
                  <div className="mt-8 animate-fadeIn border-t border-burgundy/15 pt-6">
                    <p className="text-right font-display text-2xl text-burgundy">
                      {letter.closing}, {site.sisterName} ♡
                    </p>
                    <p className="mt-1 text-right handwritten text-xl text-ink/70">
                      {letter.signOff}
                    </p>
                  </div>
                )}

                {done && <AnswerSharing answers={answers} />}
              </div>
            ) : (
              <div className="mt-6 flex h-40 items-center justify-center">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-burgundy/30 border-t-burgundy" />
              </div>
            )}

            {revealed && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {!done && (
                  <button
                    onClick={skip}
                    className="rounded-full border-2 border-parchment px-5 py-2 font-body text-sm text-ink/70 transition hover:border-burgundy hover:text-burgundy"
                  >
                    Skip animation
                  </button>
                )}
                {done && (
                  <button
                    onClick={() => window.location.reload()}
                    className="rounded-full border-2 border-parchment px-5 py-2 font-body text-sm text-ink/70 transition hover:border-burgundy hover:text-burgundy"
                  >
                    Read it again
                  </button>
                )}
                <button
                  onClick={handleReliveClick}
                  className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-2.5 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
                >
                  {letter.reliveButton}
                  <span className="transition-transform group-hover:-rotate-180 duration-500">↺</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Restart confirmation */}
      {confirmRestart && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4"
          onClick={() => setConfirmRestart(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-sm rounded-lg border border-burgundy/20 bg-cream p-6 text-center shadow-soft animate-fadeInScale"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-display text-xl text-burgundy">Start the journey over?</p>
            <p className="mt-2 font-body text-sm text-ink/70">
              Your photos and letter will still be here. You'll just walk the memory trail again.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setConfirmRestart(false)}
                className="rounded-full border-2 border-parchment px-5 py-2 font-body text-sm text-ink/70 hover:border-burgundy"
              >
                Stay here
              </button>
              <button
                onClick={handleConfirmRelive}
                className="rounded-full bg-burgundy px-6 py-2 font-body text-sm font-medium text-cream hover:bg-burgundy-dark"
              >
                Relive it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
