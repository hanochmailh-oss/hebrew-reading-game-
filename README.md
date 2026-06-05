# משחק קריאה בעברית לילדים

A colorful, right-to-left Hebrew reading-learning game built with React and TypeScript. Children see one picture and choose the matching Hebrew word with nikud from three options.

## Features

- React + TypeScript app powered by Vite
- Full right-to-left (`dir="rtl"`) Hebrew interface
- One image per round with 3 Hebrew word choices with nikud
- Score keeping and progress tracking
- Positive feedback after each answer
- 20 starter Hebrew words and child-friendly SVG images
- Responsive, colorful design for tablets and desktops
- Easy image and word replacement through one data file

## Starter words

The game includes: תַּפּוּחַ, בַּיִת, כֶּלֶב, חָתוּל, כַּדּוּר, סֵפֶר, שֶׁמֶשׁ, יָרֵחַ, פֶּרַח, מְכוֹנִית, דָּג, צִפּוֹר, עֵץ, כִּסֵּא, נַעַל, כּוֹבַע, כּוֹכָב, רַכֶּבֶת, עוּגָה, and בָּנָנָה.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL printed by Vite, usually <http://localhost:5173>.

## Build for production

```bash
npm run build
```

The production files will be created in `dist/`.

## Replacing images or words

All cards are managed in [`src/data/words.ts`](src/data/words.ts).

To replace an image:

1. Add your new image file to `src/assets/images/`.
2. Import it at the top of `src/data/words.ts`.
3. Update the matching card's `image` value.

To add or edit words:

1. Edit the `wordCards` array in `src/data/words.ts`.
2. Keep each card's `id` unique.
3. Use Hebrew with nikud in the `word` field.
4. Add descriptive Hebrew text in the `alt` field for accessibility.

Example card:

```ts
{ id: 'apple', word: 'תַּפּוּחַ', image: apple, alt: 'תפוח אדום' }
```
