import { useEffect, useState } from "react";
import { placeholderDataUri } from "@/data/placeholder";

interface SmartMediaProps {
  src: string;
  alt: string;
  className?: string;
  type?: "image" | "video";
}

const VIDEO_EXTS = [".mp4", ".mov", ".webm", ".ogg", ".avi"];

function isVideoFile(src: string): boolean {
  const lower = src.toLowerCase();
  return VIDEO_EXTS.some((ext) => lower.endsWith(ext));
}

// Renders an image or <video> depending on the file extension (or an
// explicit `type` override). Falls back to a styled placeholder if the
// file fails to load, so the layout never breaks.
export function SmartMedia({ src, alt, className = "", type }: SmartMediaProps) {
  const url = src.startsWith("/") ? src : `/photos/${src}`;
  const isVideo = type === "video" || (type === undefined && isVideoFile(src));
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

  if (isVideo) {
    return (
      <video
        src={url}
        className={className}
        controls
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
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
