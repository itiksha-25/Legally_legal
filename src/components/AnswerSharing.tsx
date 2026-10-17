import { chapters, sharing, site } from "@/data/birthdayContent";

interface AnswerSharingProps {
  answers: Record<string, string>;
}

// Builds a readable Q&A summary from the stored answers, walking every
// chapter/question in order so nothing is missed.
function buildSummary(answers: Record<string, string>): string {
  const lines: string[] = [];
  lines.push(site.title);
  lines.push(sharing.greeting);
  lines.push("");

  let qNum = 0;
  chapters.forEach((ch) => {
    lines.push(`— ${ch.title} —`);
    ch.questions.forEach((q, qi) => {
      qNum += 1;
      const key = `${ch.id}-q${qi}`;
      const answer = answers[key]?.trim();
      lines.push(`${qNum}. ${q.question}`);
      lines.push(`   → ${answer || "(skipped)"}`);
      lines.push("");
    });
    lines.push("");
  });

  lines.push(sharing.closingLine);
  return lines.join("\n");
}

// SCREEN G — Answer sharing section shown after the letter.
export function AnswerSharing({ answers }: AnswerSharingProps) {
  const handleWhatsApp = () => {
    const text = buildSummary(answers);
    const encoded = encodeURIComponent(text);
    const number = sharing.whatsappNumber.trim();
    // wa.me/<number>?text=...  — if no number, omit it so WhatsApp opens
    // its chat/share picker without a prefilled recipient.
    const url = number
      ? `https://wa.me/${number}?text=${encoded}`
      : `https://wa.me/?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const text = buildSummary(answers);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = sharing.downloadFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-10 animate-fadeIn border-t border-burgundy/15 pt-8">
      <div className="relative rounded-lg border border-rose/30 bg-rose/5 px-5 py-7 text-center sm:px-8">
        {/* little letter detail */}
        <div className="mb-4 flex items-center justify-center gap-2 text-rose">
          <span className="h-px w-8 bg-rose/40" />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="h-px w-8 bg-rose/40" />
        </div>

        <h3 className="font-display text-2xl text-burgundy sm:text-3xl">
          {sharing.heading}
        </h3>
        <p className="mx-auto mt-3 max-w-md font-body text-base leading-relaxed text-ink/80">
          {sharing.message}
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={handleWhatsApp}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-burgundy px-6 py-3.5 font-body text-base font-medium text-cream shadow-soft transition-all hover:bg-burgundy-dark sm:w-auto"
          >
            {sharing.whatsappButton}
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-burgundy/40 bg-cream px-6 py-3.5 font-body text-base font-medium text-burgundy transition-all hover:border-burgundy hover:bg-cream/80 sm:w-auto"
          >
            {sharing.downloadButton}
          </button>
        </div>

        <p className="mt-4 font-body text-xs text-ink/40">
          Nothing is sent automatically — you'll review it before it goes.
        </p>
      </div>
    </div>
  );
}
