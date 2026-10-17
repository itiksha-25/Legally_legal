import { useCallback, useEffect, useState } from "react";
import type { GameProgress } from "@/types";

const STORAGE_KEY = "all-our-yesterdays-progress";

const initialProgress: GameProgress = {
  phase: "invitation",
  currentChapter: 0,
  chapterStage: "intro",
  currentQuestion: 0,
  answers: {},
  unlockedPhotos: [],
  completedChapters: [],
};

function load(): GameProgress {
  if (typeof window === "undefined") return initialProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialProgress;
    const parsed = JSON.parse(raw) as Partial<GameProgress>;
    return { ...initialProgress, ...parsed };
  } catch {
    return initialProgress;
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<GameProgress>(load);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // storage full or unavailable — progress just won't persist
    }
  }, [progress]);

  const reset = useCallback(() => {
    setProgress(initialProgress);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { progress, setProgress, reset };
}
