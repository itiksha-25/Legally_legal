import { useEffect, useMemo, useState } from "react";

interface ConfettiProps {
  active: boolean;
  count?: number;
}

const COLORS = ["#672F3A", "#C58D91", "#E8DCC8", "#8A444F", "#D6C5AB"];
const SHAPES = ["rect", "circle"] as const;

interface Piece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotate: number;
  shape: (typeof SHAPES)[number];
}

// Tasteful, one-shot confetti that respects reduced-motion.
export function Confetti({ active, count = 60 }: ConfettiProps) {
  const [show, setShow] = useState(false);
  const prefersReduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    if (!active) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 6000);
    return () => clearTimeout(t);
  }, [active]);

  if (!show || prefersReduced) return null;

  const pieces: Piece[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 3 + Math.random() * 3,
    color: COLORS[i % COLORS.length],
    size: 6 + Math.random() * 8,
    rotate: Math.random() * 360,
    shape: SHAPES[i % 2],
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-confettiFall"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "1px",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            opacity: 0.9,
          }}
        />
      ))}
    </div>
  );
}
