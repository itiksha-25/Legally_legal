import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  paragraphs: string[];
  onComplete?: () => void;
  // ms per character
  speed?: number;
  // ms between paragraphs
  paragraphDelay?: number;
}

// Reveals text character-by-character with a line-by-line feel.
// Honours reduced-motion by showing everything immediately.
export function Typewriter({
  paragraphs,
  onComplete,
  speed = 28,
  paragraphDelay = 500,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState<string[]>([""]);
  const [done, setDone] = useState(false);
  const skipRef = useRef(false);
  const completedRef = useRef(false);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      setDisplayed(paragraphs);
      setDone(true);
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    setDisplayed([""]);
    setDone(false);
    skipRef.current = false;
    completedRef.current = false;

    let cancelled = false;
    let paraIdx = 0;
    let charIdx = 0;

    const tick = () => {
      if (cancelled || skipRef.current) return;

      const current = paragraphs[paraIdx] ?? "";

      if (charIdx <= current.length) {
        setDisplayed((prev) => {
          const next = [...prev];
          while (next.length <= paraIdx) next.push("");
          next[paraIdx] = current.slice(0, charIdx);
          return next;
        });
        charIdx++;
        setTimeout(tick, speed);
      } else {
        paraIdx++;
        charIdx = 0;
        if (paraIdx < paragraphs.length) {
          setDisplayed((prev) => [...prev, ""]);
          setTimeout(tick, paragraphDelay);
        } else {
          setDone(true);
          if (!completedRef.current) {
            completedRef.current = true;
            onComplete?.();
          }
        }
      }
    };

    setTimeout(tick, 300);
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paragraphs, prefersReduced, speed, paragraphDelay]);

  const skip = () => {
    if (done) return;
    skipRef.current = true;
    setDisplayed(paragraphs);
    setDone(true);
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }
  };

  return {
    displayed,
    done,
    skip,
  };
}
