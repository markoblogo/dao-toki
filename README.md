# dao-toki

**Chinese Wisdom in toki pona**  
Bilingual landing for a book series that brings classical Chinese philosophy into toki pona reading formats.

Live site: https://dao-toki.abvx.xyz/

## About

This repository contains the landing page for **Chinese Wisdom in toki pona** — a bilingual (EN / TP) series site built on the same landing architecture as the Stoic series.

The project presents classical Chinese texts through compact reading editions that combine:

- Traditional Chinese
- English
- toki pona
- sitelen-pona–ready layouts

The site currently launches with three books:

1. **Dao De Jing**
2. **Sunzi: The Art of War in toki pona**
3. **Mozi — Universal Love** *(free preview edition)*

## Languages

- English: `/en`
- toki pona: `/tp`

Root redirect:

- `/` → `/en`

## Launch books

### Dao De Jing
A visual edition pairing the classical Chinese text with toki pona in a sitelen-pona–ready layout, plus an English foreword and reading guide.

### Sunzi: The Art of War in toki pona
A multilingual study-friendly edition with Traditional Chinese, English, toki pona, and sitelen-pona–ready parallel reading.

### Mozi — Universal Love
A free preview-format volume introducing the series through a full toki pona edition of *Universal Love*.

## Tech stack

- Next.js (App Router)
- TypeScript
- CSS Modules
- Dictionary-based EN / TP content
- Vercel deployment

## Project structure

- `src/app/[lang]/page.tsx` — main landing pages
- `src/app/[lang]/books/[id]/page.tsx` — book detail / learn more pages
- `src/app/[lang]/legal/page.tsx` — legal page
- `src/app/[lang]/privacy/page.tsx` — privacy page
- `src/dictionaries/en.json` — English UI/content
- `src/dictionaries/tp.json` — toki pona UI/content
- `src/data/books.ts` — book metadata, links, flags
- `public/assets/books/<book-slug>/` — covers and promo images

## Content editing

### Dictionaries
Edit visible copy here:

- `src/dictionaries/en.json`
- `src/dictionaries/tp.json`

### Books dataset
Edit book metadata and links here:

- `src/data/books.ts`

### Book assets
Store assets here:

- `public/assets/books/dao-de-jing/`
- `public/assets/books/sunzi/`
- `public/assets/books/mozi-universal-love/`

## Development

```bash
npm install
npm run dev
npm run build
```

## Related projects

- Toki Pona Translator — https://toki.abvx.xyz/
- Toki Pona Free Kit — https://toki-free.abvx.xyz/
- Stoic Wisdom in Toki Pona — https://stoic.abvx.xyz/

## License

MIT
