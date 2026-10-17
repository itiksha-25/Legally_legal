export type QuestionType = "multiple-choice" | "either-or";

export type MediaType = "image" | "video";

export interface Memory {
  src: string;
  title?: string;
  date?: string;
  caption?: string;
  note?: string;
  type?: MediaType;
}

export interface Question {
  type: QuestionType;
  question: string;
  options?: string[];
  memories?: Memory[];
}

export interface Photo {
  src: string;
  title?: string;
  date?: string;
  caption?: string;
  note?: string;
  type?: MediaType;
}

export interface Chapter {
  id: string;
  title: string;
  number: number;
  intro: string;
  questions: Question[];
  photos: Photo[];
}

export type Phase = "invitation" | "trail" | "wall" | "slideshow" | "letter";
export type ChapterStage = "intro" | "questions" | "complete";

export interface GameProgress {
  phase: Phase;
  currentChapter: number;
  chapterStage: ChapterStage;
  currentQuestion: number;
  answers: Record<string, string>;
  unlockedPhotos: number[];
  completedChapters: [];
}
