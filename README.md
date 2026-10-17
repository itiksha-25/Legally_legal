# All Our Yesterdays

An interactive birthday gift — a nostalgic journey through chapters of questions, photo unlocks, a memory wall, and a heartfelt letter.

Built with React + Vite + Tailwind. No backend, no database, no API keys. Everything runs in the browser and works offline once loaded.

## Run it locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import your repo.
3. Vercel auto-detects Vite. No settings needed — just click Deploy.
4. Your birthday site is live. Share the URL.

## Where to customize everything

**All content lives in one file:** `src/data/birthdayContent.ts`

In that file you can edit:
- Your sister's name (`sisterName`)
- The title and subtitle
- Each chapter's title, intro, questions, and answer options
- The reaction messages shown after answers
- Every photo's caption, title, date, and personal note
- The final birthday letter text
- The final birthday message and sign-off

## How to add your own photos

1. Put your image files in the `public/photos/` folder.
2. In `src/data/birthdayContent.ts`, set each photo's `src` to match your filename exactly.

   For example, if you add `public/photos/sister-kid.jpg`, change the photo entry to:
   ```ts
   src: "sister-kid.jpg",
   ```

3. Supported formats: `.jpg`, `.png`, `.webp`, `.svg`.
4. If a file is missing, a styled placeholder appears automatically — the page never breaks.

The placeholder images included are named `placeholder-01.svg` through `placeholder-12.svg`. Replace them or update the filenames in the content file.

## Good to know

- Progress saves automatically in the browser. Refreshing the page resumes where she left off.
- A discreet "Start over" link appears on every screen after the invitation.
- The site is mobile-first and respects reduced-motion preferences.
