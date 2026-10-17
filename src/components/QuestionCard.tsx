import { useState } from "react";
import type { Question, Memory } from "@/types";
import { reactions } from "@/data/birthdayContent";
import { MemoryReveal } from "@/components/MemoryReveal";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

function pickReaction(type: Question["type"]): string {
  const pool =
    type === "either-or" ? reactions.eitherOr : reactions.multipleChoice;
  return pool[Math.floor(Math.random() * pool.length)];
}

// SCREEN C — Interactive Questions
// Flow: pick answer → reaction → reveal this question's memories one at
// a time → continue to next question.
export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [reaction, setReaction] = useState<string | null>(null);
  const [showMemories, setShowMemories] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    setReaction(pickReaction(question.type));
  };

  const handleContinueToMemories = () => {
    if (question.memories && question.memories.length > 0) {
      setShowMemories(true);
    } else {
      // No memories for this question — go straight to the next one.
      onAnswer(selected!);
    }
  };

  const handleMemoriesDone = () => {
    onAnswer(selected!);
  };

  // ---- Memory reveal stage ----
  if (showMemories && question.memories && question.memories.length > 0) {
    return (
      <MemoryReveal
        memories={question.memories}
        onDone={handleMemoriesDone}
      />
    );
  }

  // ---- Question + answer stage ----
  return (
    <div className="mx-auto w-full max-w-xl animate-fadeIn">
      <div className="mb-6 flex items-center justify-center gap-2 font-body text-xs uppercase tracking-widest text-ink/50">
        <span>Question {questionNumber}</span>
        <span className="text-ink/30">/</span>
        <span>{totalQuestions}</span>
      </div>

      <h2 className="text-center font-display text-2xl leading-snug text-burgundy sm:text-3xl">
        {question.question}
      </h2>

      {/* Multiple choice / either-or */}
      {question.options && (
        <div className="mt-8 flex flex-col gap-3">
          {question.options.map((opt, i) => {
            const isPicked = selected === opt;
            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={[
                  "group relative rounded-lg border-2 px-5 py-4 text-left font-body text-base transition-all duration-300",
                  isPicked
                    ? "border-burgundy bg-burgundy text-cream shadow-soft"
                    : "border-parchment bg-cream/70 text-ink hover:border-rose hover:bg-cream hover:shadow-soft",
                ].join(" ")}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className={[
                  "mr-3 font-display text-lg",
                  isPicked ? "text-cream" : "text-rose",
                ].join(" ")}>
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
                {isPicked && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cream">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Reaction + continue */}
      {selected && reaction && (
        <div className="mt-8 flex flex-col items-center gap-5 animate-fadeIn">
          <div className="relative max-w-md rounded-lg border border-rose/30 bg-rose/10 px-5 py-4 text-center">
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rotate-2 bg-cream px-2 font-hand text-sm text-rose">
              from me
            </span>
            <p className="handwritten text-xl leading-snug text-burgundy">{reaction}</p>
          </div>

          <button
            onClick={handleContinueToMemories}
            className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
          >
            {question.memories && question.memories.length > 0
              ? "See what you unlocked"
              : "Keep going"}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
