// One styled placeholder SVG used for every missing photo.
// Generates a vintage "photo not yet added" card so the layout
// never breaks even before real images are dropped in.
const PLACEHOLDER_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
  <defs>
    <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.25 0 0 0 0.25 0'/></filter>
  </defs>
  <rect width='400' height='400' fill='#E8DCC8'/>
  <rect width='400' height='400' filter='url(#n)' opacity='0.5'/>
  <g fill='#672F3A' opacity='0.6'>
    <rect x='170' y='150' width='60' height='60' rx='6' fill='none' stroke='#672F3A' stroke-width='2'/>
    <circle cx='200' cy='180' r='14' fill='none' stroke='#672F3A' stroke-width='2'/>
    <path d='M178 210 L222 210 L235 230 L165 230 Z' fill='none' stroke='#672F3A' stroke-width='2'/>
  </g>
  <text x='200' y='270' font-family='Georgia,serif' font-size='16' fill='#672F3A' text-anchor='middle' opacity='0.7'>your photo here</text>
  <text x='200' y='292' font-family='Georgia,serif' font-size='11' fill='#672F3A' text-anchor='middle' opacity='0.5'>replace in public/photos/</text>
</svg>`;

export const placeholderDataUri = `data:image/svg+xml,${encodeURIComponent(PLACEHOLDER_SVG)}`;
