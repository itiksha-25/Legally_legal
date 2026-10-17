import { useCallback, useMemo, useState } from "react";
import { chapters, totalPhotos, site } from "@/data/birthdayContent";
import type { GameProgress, Photo } from "@/types";
import { useProgress } from "@/hooks/useProgress";
import { Invitation } from "@/components/Invitation";
import { ProgressBar } from "@/components/ProgressBar";
import { ChapterIntro, ChapterComplete } from "@/components/ChapterViews";
import { QuestionCard } from "@/components/QuestionCard";
import { PhotoReveal } from "@/components/PhotoReveal";
import { MemoryWall } from "@/components/MemoryWall";
import { Lightbox } from "@/components/Lightbox";
import { FinalLetter } from "@/components/FinalLetter";

function App() {
  const { progress, setProgress, reset } = useProgress();
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null);
  const [confirmRestart, setConfirmRestart] = useState(false);

  const currentChapter = chapters[progress.currentChapter];
  const allUnlockedPhotos = useMemo(() => {
    const photos: { photo: Photo; index: number }[] = [];
    chapters.forEach((ch, ci) => {
      if (progress.completedChapters.includes(ci) || ci === progress.currentChapter) {
        ch.photos.forEach((p, pi) => {
          const globalIdx = chapters
            .slice(0, ci)
            .reduce((n, c) => n + c.photos.length, 0) + pi;
          photos.push({ photo: p, index: globalIdx });
        });
      }
    });
    return photos;
  }, [progress.completedChapters, progress.currentChapter]);

  const update = useCallback(
    (patch: Partial<GameProgress>) => setProgress((p) => ({ ...p, ...patch })),
    [setProgress]
  );

  // ---- Navigation handlers ----

  const startJourney = () =>
    update({ phase: "trail", currentChapter: 0, chapterStage: "intro", currentQuestion: 0 });

  const answerQuestion = (answer: string) => {
    const ch = currentChapter;
    const answerKey = `${ch.id}-q${progress.currentQuestion}`;
    const newAnswers = { ...progress.answers, [answerKey]: answer };
    const nextQ = progress.currentQuestion + 1;

    if (nextQ < ch.questions.length) {
      update({ answers: newAnswers, currentQuestion: nextQ });
    } else {
      // chapter questions done → unlock photos
      update({ answers: newAnswers, chapterStage: "photos" });
    }
  };

  const keepMemory = () => {
    const ch = currentChapter;
    // unlock all photos of this chapter
    const newUnlocked = new Set(progress.unlockedPhotos);
    const startIdx = chapters
      .slice(0, progress.currentChapter)
      .reduce((n, c) => n + c.photos.length, 0);
    ch.photos.forEach((_, pi) => newUnlocked.add(startIdx + pi));

    const newCompleted = [...new Set([...progress.completedChapters, progress.currentChapter])];

    const isLastChapter = progress.currentChapter === chapters.length - 1;

    if (isLastChapter) {
      update({
        unlockedPhotos: [...newUnlocked],
        completedChapters: newCompleted,
        chapterStage: "complete",
        phase: "wall",
      });
    } else {
      update({
        unlockedPhotos: [...newUnlocked],
        completedChapters: newCompleted,
        chapterStage: "complete",
      });
    }
  };

  const nextChapter = () => {
    const next = progress.currentChapter + 1;
    if (next >= chapters.length) {
      update({ phase: "wall" });
    } else {
      update({ currentChapter: next, chapterStage: "intro", currentQuestion: 0 });
    }
  };

  const goToLetter = () => update({ phase: "letter" });

  const relive = () => {
    reset();
    setConfirmRestart(false);
  };

  const hasProgress =
    progress.phase !== "invitation" ||
    progress.completedChapters.length > 0 ||
    progress.unlockedPhotos.length > 0;

  // ---- Render ----

  if (progress.phase === "invitation") {
    return (
      <div className="paper-grain min-h-screen bg-cream">
        <Invitation onStart={startJourney} hasProgress={hasProgress} onContinue={startJourney} />
      </div>
    );
  }

  if (progress.phase === "wall") {
    return (
      <div className="paper-grain min-h-screen bg-cream">
        <Header onRestart={() => setConfirmRestart(true)} />
        <MemoryWall
          photos={allUnlockedPhotos.map((p) => p.photo)}
          onPhotoClick={setLightboxPhoto}
          onContinue={goToLetter}
        />
        <Lightbox photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />
        {confirmRestart && (
          <ConfirmRestart onCancel={() => setConfirmRestart(false)} onConfirm={relive} />
        )}
      </div>
    );
  }

  if (progress.phase === "letter") {
    return (
      <div className="paper-grain min-h-screen bg-cream">
        <Header onRestart={() => setConfirmRestart(true)} />
        <FinalLetter onRelive={relive} answers={progress.answers} />
        {confirmRestart && (
          <ConfirmRestart onCancel={() => setConfirmRestart(false)} onConfirm={relive} />
        )}
      </div>
    );
  }

  // phase === "trail"
  return (
    <div className="paper-grain min-h-screen bg-cream">
      <Header onRestart={() => setConfirmRestart(true)} />

      <main className="mx-auto flex min-h-[calc(100vh-140px)] max-w-3xl flex-col justify-center px-4 py-8 sm:py-12">
        <div className="mb-10 sm:mb-14">
          <ProgressBar
            chapters={chapters}
            currentChapter={progress.currentChapter}
            completedChapters={progress.completedChapters}
            unlockedCount={progress.unlockedPhotos.length}
            totalPhotos={totalPhotos}
          />
        </div>

        {progress.chapterStage === "intro" && (
          <ChapterIntro chapter={currentChapter} onStart={() => update({ chapterStage: "questions" })} />
        )}

        {progress.chapterStage === "questions" && (
          <QuestionCard
            question={currentChapter.questions[progress.currentQuestion]}
            questionNumber={progress.currentQuestion + 1}
            totalQuestions={currentChapter.questions.length}
            onAnswer={answerQuestion}
          />
        )}

        {progress.chapterStage === "photos" && (
          <PhotoReveal
            photos={currentChapter.photos}
            chapterTitle={currentChapter.title}
            startIndex={chapters
              .slice(0, progress.currentChapter)
              .reduce((n, c) => n + c.photos.length, 0)}
            onKeep={keepMemory}
          />
        )}

        {progress.chapterStage === "complete" && (
          <ChapterComplete
            chapter={currentChapter}
            onContinue={nextChapter}
            isLast={progress.currentChapter === chapters.length - 1}
          />
        )}
      </main>

      {confirmRestart && (
        <ConfirmRestart onCancel={() => setConfirmRestart(false)} onConfirm={relive} />
      )}
    </div>
  );
}

// ---- Small inline components ----

function Header({ onRestart }: { onRestart: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-burgundy/10 bg-cream/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <p className="font-display text-sm tracking-wide text-burgundy sm:text-base">
          {site.title}
        </p>
        <button
          onClick={onRestart}
          className="font-body text-xs text-ink/50 underline-offset-4 transition hover:text-burgundy hover:underline"
        >
          Start over
        </button>
      </div>
    </header>
  );
}

function ConfirmRestart({ onCancel, onConfirm }: { onCancel: () => void; onConfirm: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4"
      onClick={onCancel}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-w-sm rounded-lg border border-burgundy/20 bg-cream p-6 text-center shadow-soft animate-fadeInScale"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-display text-xl text-burgundy">Start over?</p>
        <p className="mt-2 font-body text-sm text-ink/70">
          You'll walk the memory trail from the beginning. Your photos and letter will still be here.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={onCancel}
            className="rounded-full border-2 border-parchment px-5 py-2 font-body text-sm text-ink/70 hover:border-burgundy"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-full bg-burgundy px-6 py-2 font-body text-sm font-medium text-cream hover:bg-burgundy-dark"
          >
            Start over
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
