import { useEffect, useState } from "react";
import { placeholderDataUri } from "@/data/placeholder";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
}

// Tries to load the real image; falls back to a styled placeholder
// if the file is missing, so the layout never breaks.
export function SmartImage({ src, alt, className = "" }: SmartImageProps) {
  const url = src.startsWith("/") ? src : `/photos/${src}`;
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [url]);

  if (failed) {
    return (
      <img
        src={placeholderDataUri}
        alt={alt}
        className={className}
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
