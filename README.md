# Naylen Ramlakhan — Portfolio

A game-menu portfolio: a main menu of six screens, an ambient Great Sea backdrop, and a
light/dark theme. React + Vite + TypeScript, static, no backend.

All artwork is original SVG/CSS. Nothing is taken from or imitates Nintendo or Game Freak
assets, and there is no audio anywhere on the site.

---

## Screens

| Route         | Screen        | Contents                                   |
| ------------- | ------------- | ------------------------------------------ |
| `/`           | Main Menu     | Hero + six menu cards                      |
| `/about`      | Trainer Card  | ID card, photo, bio, stat bars             |
| `/projects`   | Inventory     | TapOnThat + two locked "coming soon" slots |
| `/skills`     | Field Guide   | Dex-style entries for each tool            |
| `/expertise`  | Badge Case    | One badge per area of mastery              |
| `/experience` | Quest Log     | Main quest and side quests                 |
| `/contact`    | Save Point    | Contact form (opens your email app)        |

---

## Run it locally

```bash
npm install
npm run dev              # http://localhost:5173
```

Other scripts:

```bash
npm run build       # typecheck + production build into dist/
npm run preview     # serve the production build
npm run typecheck   # tsc --noEmit
```

---

## Editing the content

**Every word on the site lives in `src/content.ts`.** You never need to touch a component
to change copy. Anything still needing your input is marked with a `// TODO` comment, and
the full list is in the `TODO_CHECKLIST` export at the bottom of that file.

The Trainer Card photo lives at `public/photo.jpg`, referenced via `trainerCard.photoSrc`
in `content.ts`. Swap the file to change it (set `photoSrc` to `null` to fall back to the
illustrated placeholder instead).

---

## Contact form

The Save Point form has no backend and calls no third-party API. On submit it builds a
`mailto:` link from the name, email and message and opens the visitor's own email app with
everything pre-filled — the message is sent from their inbox, not this site's. See
`buildMailto` in `src/screens/SavePoint.tsx`.

---

## Deploy to Vercel

### 1. Put the code on GitHub

```bash
cd "/Users/nayle/Desktop/Naylen Portfolio"
git init
git add .
git commit -m "Initial commit: game-menu portfolio"
git branch -M main
```

Create an empty repository at [github.com/new](https://github.com/new) — no README,
no .gitignore, no license — then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Import the repo at Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to the repository you just pushed.
3. Vercel detects Vite automatically. Leave the defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy** — no environment variables needed.

You get a free `your-project.vercel.app` URL. Every push to `main` redeploys automatically.

`vercel.json` rewrites all paths to `index.html`, so deep links like
`your-project.vercel.app/projects` work on a hard refresh.

---

## Accessibility & performance notes

- Keyboard: arrow keys move through the menu and item lists, Enter opens, Esc goes back.
  Esc inside a form field blurs the field instead of navigating away.
- One tabbable item per menu (roving tabindex), so Tab moves past the menu rather than
  through all six cards.
- Visible focus rings everywhere; a skip link to the main content.
- The ambient scene is `aria-hidden`, `pointer-events: none`, and animates only
  `transform`/`opacity`. `prefers-reduced-motion: reduce` freezes it to a still image.
- The theme is applied by a tiny inline script in `index.html` before first paint, so
  there is no light-mode flash on a dark device.
- No images, no fonts beyond two Google families, no runtime dependencies past React.

---

## Project structure

```
src/
├── content.ts            ← all copy and TODOs live here
├── types.ts
├── App.tsx               route switch + global Esc handling
├── main.tsx
├── styles/
│   ├── tokens.css        palette, type scale, spacing (light + dark)
│   ├── global.css        reset, app shell, HUD, ambient scene
│   ├── components.css    menu cards, dialogue box, buttons, panels
│   └── screens.css       per-screen layout
├── hooks/
│   ├── useTheme.ts       localStorage + prefers-color-scheme
│   ├── useRoute.ts       History API router
│   └── useMenuKeys.ts    roving-tabindex grid navigation
├── components/
│   ├── Hud.tsx  Ocean.tsx  Screen.tsx  DialogueBox.tsx
│   └── art/              Icons.tsx, BadgeMedal.tsx (original SVG)
└── screens/
    ├── MainMenu.tsx  TrainerCard.tsx  Inventory.tsx
    └── FieldGuide.tsx  BadgeCase.tsx  QuestLog.tsx  SavePoint.tsx
```
