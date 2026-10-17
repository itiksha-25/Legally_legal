export type QuestionType = "multiple-choice" | "either-or";

export interface Question {
  type: QuestionType;
  question: string;
  options?: string[];
}

export interface Photo {
  src: string;
  title: string;
  date: string;
  caption: string;
  note: string;
}

export interface Chapter {
  id: string;
  title: string;
  number: number;
  intro: string;
  questions: Question[];
  photos: Photo[];
}

export type Phase = "invitation" | "trail" | "wall" | "letter";
export type ChapterStage = "intro" | "questions" | "photos" | "complete";

export interface GameProgress {
  phase: Phase;
  currentChapter: number;
  chapterStage: ChapterStage;
  currentQuestion: number;
  answers: Record<string, string>;
  unlockedPhotos: number[];
  completedChapters: number[];
}
