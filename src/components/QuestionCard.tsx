import { useState } from "react";
import type { Question } from "@/types";
import { reactions } from "@/data/birthdayContent";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

function pickReaction(type: Question["type"]): string {
  const pool =
    type === "multiple-choice"
      ? reactions.multipleChoice
      : type === "either-or"
        ? reactions.eitherOr
        : reactions.reflective;
  return pool[Math.floor(Math.random() * pool.length)];
}

// SCREEN C — Interactive Questions
export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [reaction, setReaction] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    setReaction(pickReaction(question.type));
  };

  const handleReflectiveSubmit = () => {
    if (selected) return;
    const value = text.trim() || "(kept that one to herself)";
    setSelected(value);
    setReaction(pickReaction(question.type));
  };

  const isReflective = question.type === "reflective" || question.type === "short-answer";

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
      {!isReflective && question.options && (
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

      {/* Reflective / short-answer */}
      {isReflective && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={!!selected}
            placeholder="Type whatever comes to mind…"
            rows={4}
            className="w-full rounded-lg border-2 border-parchment bg-cream/80 px-5 py-4 font-body text-base text-ink placeholder:text-ink/40 focus:border-burgundy focus:outline-none disabled:opacity-60"
          />
          {!selected && (
            <button
              onClick={handleReflectiveSubmit}
              className="rounded-full bg-burgundy px-6 py-2.5 font-body text-sm font-medium text-cream shadow-soft transition hover:bg-burgundy-dark"
            >
              Share it
            </button>
          )}
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

          {isReflective && (
            <p className="max-w-sm text-center font-body text-sm italic text-ink/60">
              You wrote: "{selected}"
            </p>
          )}

          <button
            onClick={() => onAnswer(selected)}
            className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-7 py-3 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark"
          >
            Keep going
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
