// ============================================================
//  ALL OUR YESTERDAYS — Content Configuration
// ------------------------------------------------------------
//  Everything you want to personalize lives in THIS file.
//  You do not need to touch any component code.
//
//  HOW TO REPLACE THE PHOTOS:
//    1. Drop your image files into  public/photos/
//    2. Use the SAME filename listed below in `src`
//       (e.g. src: "20230621_165337.jpg")
//    3. Supported formats: .jpg, .png, .webp, .svg
//    4. For videos: .mp4, .mov, .webm — they play inline with controls
//    5. If a file is missing, a styled placeholder is shown
//       automatically — the page never breaks.
//
//  MEMORY ASSOCIATION:
//    Each question has an optional `memories` array. After your sister
//    answers a question, each memory in that array is revealed one at
//    a time. A question with no `memories` just moves to the next
//    question without showing anything.
//
//    chapter.photos is a SEPARATE list used only for the final memory
//    wall collage. Those photos are NOT shown during the questions.
//
//  SLIDESHOW:
//    After the letter, a slideshow plays through any leftover media
//    you list in `slideshowMedia`. Add filenames (images or videos)
//    you didn't use elsewhere. Leave the array empty to skip it.
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
// Each chapter has: id, title, intro, questions[], photos[]
// question types: "multiple-choice" | "either-or"
// Each question may have a `memories` array (revealed one at a time
// after the answer). chapter.photos is for the final memory wall only.

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
question: "Aap kaha se ho?",
options: ["Mere dil se", "Pahaado se", "Mumbai se", "Pagalkhaane se"], 

        memories: [
          {
            src: "1.jpeg",
            title: "CHINI GUDIYAAA! ", 
date: "Mumbai mei the tab hum so ig 2012?", 
caption: "Itni cute ab kyu nahi dikhti bhai", 

          },
        ],
      },
      {
        type: "either-or",
        question: "Aapke best friends kon hain?",",
options: ["Mommy daddy", "Tum khud", "Parchhaiya", "Mei(Obviously)"], 
        memories: [
          {
            src: "2.jpeg",
title: "Bhai ne uski kitab pe paad diya ☹ ", 
date: "Raheja Mumbai ig?", 
caption: "Parchhaiyo se mera kuch naata hai", 

          },
        ],
      },
      {
        type: "multiple-choice",
question: "Parr kya apko pta hai mera best friend kon hai??",
options: ["Mei apni fav hu", "Mera role model", "Chaubey Jiii heheh", "Kaddu Paneeerrr"], 
        memories: [
          {
            src: "3.jpeg",src: "4.jpeg", src: "5.jpeg",
title: "Will always be you grillypopp ", 
date: "Good old days jab hum saath rehte the 24/7", 
caption: "How I miss these days!", 

          },
        ],
      },
    ],
  },
  {
    id: "chaos",
    title: "THE CHAOS",
    number: 2,
    intro:
      "Every sibling relationship has a chaos chapter. Ours has several volumes. We fought, we schemed, and we made our parents question their life choices.",
    questions: [
      {
        type: "multiple-choice",
question: "Aapke kitne daant hain??", 
options: ["Insaano jitne", "32", "Sabse 2 kamm", "16*2=8"],
memories: [
          {
            src: "6.jpeg",
title: "Pta tha kya tujhe?", 
date: "sann 2010?", 
caption: "CUTUUUUU 😭😭", note: "Bebo mei bebooooo",

          },
        ],
      },
      {
        type: "either-or",
question: "What's our most iconic inside joke?", 
options: [ "SOOOOO HAAAPPPYYY", "That one face 😝", "Car ki reserved seats", "Thanda thanda paaaniii!!", ], 

        memories: [
          {
            src: "7.jpeg",
title: "SOOOO FUUNNYYYYY", 
date: "kya malumm", c
aption: "Bhai dekho apki bestie kinna pyaarrrr krti hain aap seee AWWW", 
note: "Besties For Life", }]

          },
        ],
      },
      {
        type: "multiple-choice",
question: "Do you believe in angels??", 
options: ["Well duhh", "Nahh", "Naastik hu bete", "Ha kyuki mei khud hu"],

        memories: [
          {
            src: "8.jpeg",
title: "Tu hai to sahi hehe", 
date: "Once upon a time in Khaitan", 
caption: "CUTUUUUU 😭😭", 

          },
        ],
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
         question: "Aapka asli naam kya hai??", 
options: ["DADDAD", "Zizi", "Shomu", "Lovely didi"], 
 memories: [
          {
            src: "9.jpeg",
            title: "Quiet Day",
title: "Shomu and Radha", 
date: "mausi ki saal girah", 
caption: "Awwww meri to aankhe bhar aaiii", 

          },
        ],
      },
      {
        type: "multiple-choice",
question: "Aapne sabse pehle apne andar ke konse jaanwar ko pehchaana tha??", 
options: ["Shomu", "Naagin", "Khada hua Mongoose ", "Ek Bhais"], 

        memories: [
          {
            src: "10.jpeg",
            title: "Just Us",
title: "Ye to apka OG roop haii", 
date: "Ek zamaane kibaat hai", 
caption: "Fact to hai- same dikhte hain dono", 

          },
        ],
      },
      {
        type: "multiple-choice",
question: "Who is more dramatic?",
options: ["Me", "You", "Dono ka Sansik mantulan kharab hai", "Drama is our love language"], 

        memories: [
          {
            src: "11.jpeg", src: "12.jpeg",
            title: "The Look",
title: "Do ‘pagal si’ bacchiya ", 
date: "mujhe yaad bhi nahi- but yaha maine malai chaap khai thi", 
caption: "Sanki to hum hain", 
          },
        ],
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
question: "What do you do best?",
options: ["Judge", "Study", "Bombastic side - eye", "Aegyo(Cute harkate)"], 
        memories: [
          {
            src: "13.jpeg",
title: "BOMBASSSTICCC SIDE EYE! CRIMINAL OFFENSIVEE SIDE EYE ", 
date: "Aapki bestie ki kisi function pe liya tha", 
caption: "SOOOOO HAAPPPYYY",

          },
        ],
      },
      {
        type: "multiple-choice",
question: "Aap kya hain?",
options: ["Bhootni", "Sotudu Billa", "Apnea ap se obsessed", "Deepika Padukone"], 

        memories: [
          {
            src: "14.jpeg", src: "15.jpeg", src: "16.jpeg", src: "17.jpeg",
title: "Mujhe khud nahi pta mei kya bolu ispe ", 
date: "Saalo se nautanki", 
caption: "Aap meri jaan hain <3 ", 

          },
        ],
      },
    ],
  },
];

// ---------- SLIDESHOW ----------
// Leftover images and videos you didn't use in the questions.
// They play as a fun slideshow after the letter. Add or remove freely.
// Videos auto-advance when they end; images advance on a timer or tap.
// Leave as an empty array [] to skip the slideshow entirely.
export const slideshowMedia: { src: string; type?: "image" | "video"; caption?: string }[] = [
  // Example entries — replace with your own leftover files:
  // { src: "WhatsApp Image 2026-10-17 at 6.16.32 PM.jpeg", caption: "us, being us" },
  // { src: "Snapchat-1263331909.mp4", type: "video", caption: "this one still makes me laugh" },
  {
    src: "placeholder-03.svg",
    caption: "Add your leftover photos and videos in birthdayContent.ts",
  },
];

export const slideshowConfig = {
  heading: "The outtakes",
  subheading: "The ones that didn't make the cut. Honestly, maybe the best ones.",
  secondsPerImage: 4,
  startButton: "Play the outtakes",
  skipButton: "Skip to the letter",
};

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
  note: "Photos shown are placeholders. Replace them in public/photos/ to make this truly yours.",
};

// Total count helper (used by progress indicator)
export const totalPhotos = chapters.reduce((n, c) => n + c.photos.length, 0);
export const totalQuestions = chapters.reduce((n, c) => n + c.questions.length, 0);
