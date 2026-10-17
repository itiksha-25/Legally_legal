interface StarsProps {
  count?: number;
  className?: string;
}

// Tiny decorative stars scattered in the background.
export function Stars({ count = 8, className = "" }: StarsProps) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 4 + Math.random() * 6,
    delay: Math.random() * 2.5,
    duration: 2 + Math.random() * 2,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s) => (
        <svg
          key={s.id}
          className="absolute animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
          viewBox="0 0 24 24"
          fill="#C58D91"
          opacity="0.5"
        >
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6z" />
        </svg>
      ))}
    </div>
  );
}
