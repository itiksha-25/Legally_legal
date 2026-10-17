
import type { Chapter } from "@/types";

// ============================================================
// ALL OUR YESTERDAYS — Content Configuration
// ============================================================
// Put photos/videos in public/photos/ and use their exact filenames.
// Images: .jpg, .jpeg, .png, .webp, .svg
// Videos: .mp4, .mov, .webm
//
// Each question's `memories` array is revealed one memory at a time.
// `chapter.photos` is reserved for the final memory wall.
// `slideshowMedia` contains leftover photos/videos shown after the letter.
// ============================================================

export const site = {
  title: "ALL OUR YESTERDAYS",
  subtitle: "A little website. A million memories. One very annoying sister.",
  intro:
    "Before you open your birthday gift, I have a few things to remind you of. Some are embarrassing. Some are adorable. Unfortunately, you have to go through all of them.",
  startButton: "Take a trip down memory lane",
  sisterName: "Shomu ZIZI ZIIIIII 💖🥰💝",
};

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

// ============================================================
// CHAPTERS
// ============================================================

export const chapters: Chapter[] = [
  {
    id: "lore",
    title: "THE LORE",
    number: 1,
    intro:
      "Every legend begins somewhere. Ours began with two small humans sharing a house, a bloodline, and a truly unreasonable amount of stubbornness.",
    photos: [],
    questions: [
      {
        type: "multiple-choice",
        question: "Aap kaha se ho?",
        options: [
          "Mere dil se",
          "Pahaado se",
          "Mumbai se",
          "Pagalkhaane se",
        ],
        memories: [
          {
            src: "1.jpeg",
            title: "CHINI GUDIYAAA!",
            date: "Mumbai mei the tab hum so ig 2012?",
            caption: "Itni cute ab kyu nahi dikhti bhai",
          },
        ],
      },
      {
        type: "either-or",
        question: "Aapke best friends kon hain?",
        options: [
          "Mommy daddy",
          "Tum khud",
          "Parchhaiya",
          "Mei (Obviously)",
        ],
        memories: [
          {
            src: "2.jpeg",
            title: "Bhai ne uski kitab pe paad diya ☹",
            date: "Raheja Mumbai ig?",
            caption: "Parchhaiyo se mera kuch naata hai",
          },
        ],
      },
      {
        type: "multiple-choice",
        question: "Parr kya apko pta hai mera best friend kon hai??",
        options: [
          "Mei apni fav hu",
          "Mera role model",
          "Chaubey Jiii heheh",
          "Kaddu Paneeerrr",
        ],
        memories: [
          {
            src: "3.jpeg",
            title: "Will always be you grillypopp",
            date: "Good old days jab hum saath rehte the 24/7",
            caption: "How I miss these days!",
          },
          {
            src: "4.jpeg",
            title: "Will always be you grillypopp",
            date: "Good old days jab hum saath rehte the 24/7",
            caption: "How I miss these days!",
          },
          {
            src: "5.jpeg",
            title: "Will always be you grillypopp",
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
    photos: [],
    questions: [
      {
        type: "multiple-choice",
        question: "Aapke kitne daant hain??",
        options: [
          "Insaano jitne",
          "32",
          "Sabse 2 kamm",
          "16*2=8",
        ],
        memories: [
          {
            src: "6.jpeg",
            title: "Pta tha kya tujhe?",
            date: "sann 2010?",
            caption: "CUTUUUUU 😭😭",
            note: "Bebo mei bebooooo",
          },
        ],
      },
      {
        type: "either-or",
        question: "What's our most iconic inside joke?",
        options: [
          "SOOOOO HAAAPPPYYY",
          "That one face 😝",
          "Car ki reserved seats",
          "Thanda thanda paaaniii!!",
        ],
        memories: [
          {
            src: "7.jpeg",
            title: "SOOOO FUUNNYYYYY",
            date: "kya malumm",
            caption:
              "Bhai dekho apki bestie kinna pyaarrrr krti hain aap seee AWWW",
            note: "Besties For Life",
          },
        ],
      },
      {
        type: "multiple-choice",
        question: "Do you believe in angels??",
        options: [
          "Well duhh",
          "Nahh",
          "Naastik hu bete",
          "Ha kyuki mei khud hu",
        ],
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
    photos: [],
    questions: [
      {
        type: "multiple-choice",
        question: "Aapka asli naam kya hai??",
        options: [
          "DADDAD",
          "Zizi",
          "Shomu",
          "Lovely didi",
        ],
        memories: [
          {
            src: "9.jpg",
            title: "Shomu and Radha",
            date: "mausi ki saal girah",
            caption: "Awwww meri to aankhe bhar aaiii",
          },
        ],
      },
      {
        type: "multiple-choice",
        question:
          "Aapne sabse pehle apne andar ke konse jaanwar ko pehchaana tha??",
        options: [
          "Shomu",
          "Naagin",
          "Khada hua Mongoose",
          "Ek Bhais",
        ],
        memories: [
          {
            src: "10.jpeg",
            title: "Ye to apka OG roop haii",
            date: "Ek zamaane ki baat hai",
            caption: "Fact to hai- same dikhte hain dono",
          },
        ],
      },
      {
        type: "multiple-choice",
        question: "Who is more dramatic?",
        options: [
          "Me",
          "You",
          "Dono ka Sansik mantulan kharab hai",
          "Drama is our love language",
        ],
        memories: [
          {
            src: "11.jpeg",
            title: "Do ‘pagal si’ bacchiya",
            date: "Mujhe yaad bhi nahi- but yaha maine malai chaap khai thi",
            caption: "Sanki to hum hain",
          },
          {
            src: "12.jpeg",
            title: "Do ‘pagal si’ bacchiya",
            date: "Mujhe yaad bhi nahi- but yaha maine malai chaap khai thi",
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
    photos: [],
    questions: [
      {
        type: "multiple-choice",
        question: "What do you do best?",
        options: [
          "Judge",
          "Study",
          "Bombastic side - eye",
          "Aegyo (Cute harkate)",
        ],
        memories: [
          {
            src: "13.jpeg",
            title:
              "BOMBASSSTICCC SIDE EYE! CRIMINAL OFFENSIVEE SIDE EYE",
            date: "Aapki bestie ki kisi function pe liya tha",
            caption: "SOOOOO HAAPPPYYY",
          },
        ],
      },
      {
        type: "multiple-choice",
        question: "Aap kya hain?",
        options: [
          "Bhootni",
          "Sotudu Billa",
          "Apnea ap se obsessed",
          "Deepika Padukone",
        ],
        memories: [
          {
            src: "14.jpg",
            title: "Mujhe khud nahi pta mei kya bolu ispe",
            date: "Saalo se nautanki",
            caption: "Aap meri jaan hain <3",
          },
          {
            src: "15.jpg",
            title: "Mujhe khud nahi pta mei kya bolu ispe",
            date: "Saalo se nautanki",
            caption: "Aap meri jaan hain <3",
          },
          {
            src: "16.jpeg",
            title: "Mujhe khud nahi pta mei kya bolu ispe",
            date: "Saalo se nautanki",
            caption: "Aap meri jaan hain <3",
          },
          {
            src: "17.jpeg",
            title: "Mujhe khud nahi pta mei kya bolu ispe",
            date: "Saalo se nautanki",
            caption: "Aap meri jaan hain <3",
          },
        ],
      },
    ],
  },
];

// ============================================================
// SLIDESHOW
// All files below should be inside public/photos/.
// Each media file is a separate object in the array.
// ============================================================

export const slideshowMedia: {
  src: string;
  type?: "image" | "video";
  caption?: string;
}[] = [
  {
    src: "19.jpg",
    type: "image",
    caption: "sleepy babuuu",
  },
  {
    src: "20.jpg",
    type: "image",
    caption: "Darrpokkk",
  },
  {
    src: "22.jpg",
    type: "image",
    caption: "Darrpokkk",
  },
  {
    src: "23.jpg",
    type: "image",
    caption: "Love youu",
  },
  {
    src: "24.jpg",
    type: "image",
    caption: "Always and FOREVERRRR",
  },
  {
    src: "25.jpg",
    type: "image",
    caption: "Btao ye kya daali hai",
  },
  {
    src: "27.jpeg",
    type: "image",
    caption: "Hotties to hum hainnn",
  },
  {
    src: "29.jpeg",
    type: "image",
    caption: "Cuties simce day 1!!",
  },
  {
    src: "26.mp4",
    type: "video",
    caption: "BASSPANN SE MUZE BULLY KRI HOOOOOO",
  },
  {
    src: "21.MOV",
    type: "video",
    caption: "Ha ye krwalo bass",
  },
  {
    src: "30.mp4",
    type: "video",
    caption: "Ye to HONA HI THAAAA",
  },
];

export const slideshowConfig = {
  heading: "The outtakes",
  subheading:
    "The ones that didn't make the cut. Honestly, maybe the best ones.",
  secondsPerImage: 4,
  startButton: "Play the outtakes",
  skipButton: "Skip to the letter",
};

// ============================================================
// FINAL LETTER
// ============================================================

export const letter = {
  openButton: "Open your letter",
  paragraphs: [
    "Heeloooo CUTIE PATOOTIEEE!!!! Meri pyaari didi I love you so muchhhh! You have no idea how much I truly love you, irrespective of whateveer I say or do. I love you to the fucking core."
    "Aap meri bohot zyada pyaari behna ho- you're all I need to survive this place. I sure hope you are happy and healthy and hope for you to be ALWAYS AND FOREVERRRRR!!"
    "Happy Birthday. You made it another year, and I made it another year of having you around — which, tbh, is the real gift here.",
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

// ============================================================
// ANSWER SHARING
// ============================================================

export const sharing = {
  // Enter your phone number in international format without + or spaces.
  // Example: "919876543210". Leave empty to let her choose the recipient.
  whatsappNumber: "",
  heading: "One last thing before you go 💌",
  message:
    "I hope you loved your little trip down memory lane. Want to send your answers back to me? I really want to see what you picked.",
  whatsappButton: "Send my answers on WhatsApp 💗",
  downloadButton: "Download my answers",
  downloadFilename: "all-our-yesterdays-answers.txt",
  greeting:
    "Happy Birthday! Here are all my answers from All Our Yesterdays.",
  closingLine:
    "That's everything. Thank you for making this one so special. ♡",
};

export const photoInstructions = {
  note:
    "",
};

// ============================================================
// COUNTS
// `totalPhotos` counts only chapter-level memory-wall photos.
// Question memories are revealed separately.
// ============================================================

export const totalPhotos = chapters.reduce(
  (count, chapter) => count + (chapter.photos?.length ?? 0),
  0,
);

export const totalQuestions = chapters.reduce(
  (count, chapter) => count + chapter.questions.length,
  0,
);
