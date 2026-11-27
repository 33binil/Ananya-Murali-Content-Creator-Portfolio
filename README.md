# Ananya Murali A T — Portfolio

Personal portfolio website built with Vite, React (plain JavaScript `.jsx`), Tailwind CSS, and `lucide-react`.

## Running Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Updating Text & Replacing Placeholder Images

All copy, links, metrics, and image paths live in **`src/data/content.js`**, so you never need to edit JSX to update content.

To replace any placeholder with a real photo:
1. Place your image files (e.g. `hero-cutout.png`, `portrait.jpg`, `full-length.png`, `work-1.jpg`) inside **`src/assets/`**.
2. Import them at the top of `src/data/content.js` (or reference files in `public/`):
   ```js
   import heroCutout from '../assets/hero-cutout.png';
   import portraitPhoto from '../assets/portrait.jpg';
   ```
3. Set the matching `src` field in `src/data/content.js` from `null` to your imported image:
   ```js
   cutoutPhoto: {
     src: heroCutout,
     alt: 'Ananya Murali A T cutout portrait',
     placeholderLabel: 'Cutout photo',
   },
   ```
4. For the Hero and Content Niches cutout slots, use transparent-background PNGs so the subject cleanly overlaps the background typography and list edges.
