// ============================================================
//  ALL OUR YESTERDAYS — Content Configuration
// ------------------------------------------------------------
//  Everything you want to personalize lives in THIS file.
//  You do not need to touch any component code.
//
//  HOW TO REPLACE THE PHOTOS:
//    1. Drop your image files into  public/photos/
//    2. Use the SAME filename listed below in `src` for each photo
//       (e.g. public/photos/placeholder-01.jpg  ->  src: "placeholder-01.jpg")
//    3. Supported formats: .jpg, .png, .webp
//    4. If an image file is missing, a styled placeholder is shown
//       automatically — the page never breaks.
// ============================================================

import type { Chapter } from "@/types";

export const site = {
  title: "ALL OUR YESTERDAYS",
  subtitle: "A little website. A million memories. One very annoying sister.",
  intro:
    "Before you open your birthday gift, I have a few things to remind you of. Some are embarrassing. Some are adorable. Unfortunately, you have to go through all of them.",
  startButton: "Take a trip down memory lane",
  sisterName: "[SISTER'S NAME]",
};

// Generic reaction messages shown after multiple-choice answers.
// Picked at random so it never feels scripted.
export const reactions = {
  multipleChoice: [
    "Interesting answer. I will be remembering this.",
    "Wrong? Debatable. You're still my favorite menace.",
    "Okay, that one was actually sweet. Don't make it weird.",
    "Hmm. I have receipts that say otherwise, but I'll allow it.",
    "Bold choice. I'm writing that down.",
    "Sure, let's go with that. We both know the truth though.",
    "Noted. Filed under 'things to bring up later'.",
    "That's generous. Almost suspiciously generous.",
  ],
  eitherOr: [
    "A classic. You never disappoint.",
    "I knew it. I absolutely knew it.",
    "Controversial. I love it.",
    "Of course you'd pick that one.",
  ],
};

// ---------- CHAPTERS ----------
// Each chapter has: id, title, blurb, questions[], photos[]
// question types: "multiple-choice" | "either-or"

export const chapters: Chapter[] = [
  {
    id: "lore",
    title: "THE LORE",
    number: 1,
    intro:
      "Every legend begins somewhere. Ours began with two small humans sharing a house, a bloodline, and a truly unreasonable amount of stubbornness.",
    questions: [
      {
        type: "multiple-choice",
        question: "Who is more dramatic?",
        options: ["Me", "You", "We are equally dramatic", "Drama is our love language"],
      },
      {
        type: "either-or",
        question: "Who cried first at the last sad movie we watched?",
        options: ["Me", "You"],
      },
      {
        type: "multiple-choice",
        question: "What's our most iconic inside joke?",
        options: [
          "Something only we find funny",
          "The one with the voice",
          "That one car ride",
          "I'm not putting that in writing",
        ],
      },
    ],
    photos: [
      {
        src: "placeholder-01.jpg",
        title: "The Beginning",
        date: "circa forever",
        caption: "We shared exactly one brain cell here, and somehow neither of us had it.",
        note: "This is where the trouble started.",
      },
      {
        src: "placeholder-02.jpg",
        title: "Matching Trouble",
        date: "somewhere in the 90s",
        caption: "Two small people, one big conspiracy.",
        note: "Already planning something, obviously.",
      },
      {
        src: "placeholder-03.jpg",
        title: "Officially Partners in Crime",
        date: "undisclosed",
        caption: "I would relive this day a thousand times.",
        note: "Don't tell anyone what we did after this.",
      },
    ],
  },
  {
    id: "chaos",
    title: "THE CHAOS",
    number: 2,
    intro:
      "Every sibling relationship has a chaos chapter. Ours has several volumes. We fought, we schemed, we made our parents question their life choices.",
    questions: [
      {
        type: "multiple-choice",
        question: "Which of us starts the most ridiculous arguments?",
        options: ["Me, obviously", "You, and you know it", "Whoever's hungrier", "The arguments start themselves"],
      },
      {
        type: "either-or",
        question: "Who was the sneakier child?",
        options: ["Me", "You"],
      },
      {
        type: "multiple-choice",
        question: "What's the most chaotic memory we share?",
        options: [
          "The one we swore to take to the grave",
          "That trip that went sideways",
          "The incident with the kitchen",
          "All of them. All of the chaos.",
        ],
      },
    ],
    photos: [
      {
        src: "placeholder-04.jpg",
        title: "Evidence #1",
        date: "exhibit A",
        caption: "Look at these faces. Absolute menaces.",
        note: "We were innocent. Allegedly.",
      },
      {
        src: "placeholder-05.jpg",
        title: "The Great Debate",
        date: "a Tuesday, probably",
        caption: "We were arguing about nothing. We always were.",
        note: "I think you were wrong. You think you were right.",
      },
      {
        src: "placeholder-06.jpg",
        title: "Unbothered",
        date: "who's counting",
        caption: "Somehow we always landed on our feet.",
        note: "Chaotic, but coordinated.",
      },
    ],
  },
  {
    id: "little-things",
    title: "THE LITTLE THINGS",
    number: 3,
    intro:
      "It's the small things that stay with you. The ones that didn't seem important at the time, but somehow became the whole point.",
    questions: [
      {
        type: "multiple-choice",
        question: "What is one thing I do that annoys you but that you'd miss if I stopped?",
        options: ["The texts at weird hours", "My unsolicited advice", "The nicknames", "Everything, honestly"],
      },
      {
        type: "multiple-choice",
        question: "What's a small moment between us that you think about more than you'd admit?",
        options: [
          "That time we just sat and talked for hours",
          "A random ordinary day that stuck with me",
          "Something we laughed about until we cried",
          "I'm not telling you, you'd get smug",
        ],
      },
      {
        type: "multiple-choice",
        question: "What do you appreciate most about having me around?",
        options: [
          "Someone who gets it",
          "A built-in alibi",
          "Free entertainment",
          "More than I usually say",
        ],
      },
    ],
    photos: [
      {
        src: "placeholder-07.jpg",
        title: "Quiet Day",
        date: "no big deal",
        caption: "Nothing happened here. That's why I remember it.",
        note: "Some days don't need a story.",
      },
      {
        src: "placeholder-08.jpg",
        title: "Just Us",
        date: "the good kind of ordinary",
        caption: "This is the version of us I like best.",
        note: "No audience needed.",
      },
      {
        src: "placeholder-09.jpg",
        title: "The Look",
        date: "you know the one",
        caption: "We've never needed words. That's the whole thing.",
        note: "One look. Decades of context.",
      },
    ],
  },
  {
    id: "always-us",
    title: "ALWAYS US",
    number: 4,
    intro:
      "Everything changes except this. We grew up, grew into ourselves, and somehow ended up still each other's first call. That's the whole point of this.",
    questions: [
      {
        type: "multiple-choice",
        question: "If you could relive one day with me, which day would it be?",
        options: [
          "A childhood day, the simple ones",
          "A trip we took together",
          "A random Tuesday that meant more than it should",
          "Any day, honestly. I'd take all of them.",
        ],
      },
      {
        type: "multiple-choice",
        question: "What's one thing you want me to know today?",
        options: [
          "You're my favorite person to call",
          "I'm proud of you too",
          "You owe me, and I'm collecting",
          "More than I usually say",
        ],
      },
    ],
    photos: [
      {
        src: "placeholder-10.jpg",
        title: "Recent History",
        date: "not long enough ago",
        caption: "Still here. Still us.",
        note: "The chaos evolved. It didn't leave.",
      },
      {
        src: "placeholder-11.jpg",
        title: "The One With The Camera",
        date: "a good day",
        caption: "We clean up alright, when we try.",
        note: "Rare photographic evidence.",
      },
      {
        src: "placeholder-12.jpg",
        title: "Always",
        date: "ongoing",
        caption: "However many yesterdays. Still counting on the tomorrows.",
        note: "This is the last placeholder. Replace it with a real one.",
      },
    ],
  },
];

// ---------- FINAL LETTER ----------
// Use \n\n to separate paragraphs. The letter types out line by line.

export const letter = {
  openButton: "Open your letter",
  paragraphs: [
    "Happy Birthday. You made it another year, and I made it another year of having you around — which, let's be honest, is the real gift here.",
    "I built this whole little website instead of just buying a card, because a card felt too small for the kind of history we have. You've been there for every single version of me, even the ones I'd rather forget. That's not nothing. That's most of it.",
    "We fought about nothing, laughed about everything, and somehow built a language only the two of us speak. I don't know what I did to deserve a sister like you, but I'm not asking questions.",
    "So here's to all our yesterdays — the chaos, the quiet, the inside jokes nobody else would understand, and every version of us that got us to today.",
    "I'm proud of you. I'm grateful for you. And yes, fine, I love you, even though you're still the most annoying person I know.",
  ],
  closing: "Happy Birthday",
  signOff: "Always your favorite menace",
  reliveButton: "Relive our memories",
};

export const memoryWall = {
  heading: "Little pieces of us.",
  subheading: "Every version of us is one I want to keep.",
};

// ---------- ANSWER SHARING ----------
// After the letter, your sister can send her answers back to you.
//
// WHATSAPP PHONE NUMBER:
//   Enter YOUR phone number in international format, WITHOUT the "+" or spaces.
//   Example: for +44 7700 900123  →  whatsappNumber: "447700900123"
//   Leave it as "" (empty) to open WhatsApp without a prefilled recipient —
//   she'll choose who to send to herself.
export const sharing = {
  whatsappNumber: "",
  heading: "One last thing before you go 💌",
  message:
    "I hope you loved your little trip down memory lane. Want to send your answers back to me? I really want to see what you picked.",
  whatsappButton: "Send my answers on WhatsApp 💗",
  downloadButton: "Download my answers",
  downloadFilename: "all-our-yesterdays-answers.txt",
  greeting: "Happy Birthday! Here are all my answers from All Our Yesterdays.",
  closingLine: "That's everything. Thank you for making this one so special. ♡",
};

export const photoInstructions = {
  /* shown briefly on the memory wall footer — keeps it human */
  note: "Photos shown are placeholders. Replace them in public/photos/ to make this truly yours.",
};

// Total count helper (used by progress indicator)
export const totalPhotos = chapters.reduce((n, c) => n + c.photos.length, 0);
export const totalQuestions = chapters.reduce((n, c) => n + c.questions.length, 0);
