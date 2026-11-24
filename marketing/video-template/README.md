# TickFlowAI video template (DRAFT v0.1)

Reusable frame only: brand settings, background, hook card, end card, subtitle style, animation helpers (`src/brand`, `src/template`).
Story, words, screens and voice are new in every video (`src/videos/<id>/`). Never repeat a video or scene.

- Brand logo and colors are PLACEHOLDERS until Sara sends the real ones. Change only `src/brand/brand.ts`.
- Format: 1080x1350 (4:5) for the LinkedIn feed, 30 fps.
- Preview: `npm run studio`. Render: `npx remotion render <composition-id> out/<id>.mp4`.
- Videos are silent with English subtitles. A voice can be added later if Sara wants it.
- Add a new video: copy `src/videos/v001-whatsapp-to-ticket`, write a new script, add one `Composition` in `src/Root.tsx`.
