import { site } from "@/data/birthdayContent";
import { Stars } from "@/components/Stars";

interface InvitationProps {
  onStart: () => void;
  hasProgress: boolean;
  onContinue?: () => void;
}

// SCREEN A — The Invitation
export function Invitation({ onStart, hasProgress, onContinue }: InvitationProps) {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
      <Stars count={10} />

      {/* Album cover / letter */}
      <div className="paper-texture vignette relative w-full animate-fadeIn rounded-sm border border-burgundy/15 bg-cream/80 p-8 shadow-soft sm:p-12">
        <div className="absolute inset-3 dashed-scrap rounded-sm pointer-events-none" />

        <div className="relative">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-rose">A birthday gift</p>

          <div className="my-6 flex items-center justify-center gap-3 text-rose/60">
            <span className="h-px w-12 bg-rose/40" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="h-px w-12 bg-rose/40" />
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-burgundy sm:text-6xl">
            {site.title}
          </h1>

          <p className="handwritten mt-4 text-xl text-ink/70 sm:text-2xl">
            {site.subtitle}
          </p>

          <div className="mx-auto my-8 h-px w-2/3 bg-burgundy/20" />

          <p className="mx-auto max-w-md font-body text-base leading-relaxed text-ink/80">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-2 rounded-full bg-burgundy px-8 py-3.5 font-body text-base font-medium text-cream shadow-soft transition-all duration-300 hover:bg-burgundy-dark hover:shadow-lg focus-visible:outline-burgundy"
            >
              {site.startButton}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            {hasProgress && onContinue && (
              <button
                onClick={onContinue}
                className="font-body text-sm text-burgundy/70 underline-offset-4 hover:underline"
              >
                Continue where you left off
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="mt-8 font-body text-xs text-ink/40">Best viewed on your phone, with the volume of your heart turned up.</p>
    </section>
  );
}
