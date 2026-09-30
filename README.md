# ZionCore

Local-first personal matrix. Journal, intentions, and a rewrite lab live in this browser. Dropped historical scripts stay in `js/incoming`, `html/incoming`, and `python/incoming` and are **not executed**.

## Live page

https://tariromasawi.github.io/ZionCore/

Enable Pages if that URL is still dark: Settings → Pages → GitHub Actions, or Deploy from branch `main` / root.

## What is wired

- `js/brain.js` — kernel, local state, events
- `js/main.js` — interface
- `data/manifest.json` — registered modules
- `data/archive/dropped-catalog.json` — inventory of held material

## What is not wired

Device-control agents, Firebase seed floods, colonisation pages, government/finance override objects, and infinite Python seed loops. Those remain archived source. They do not run on page load.

## After you add a new script

Put it in the matching incoming folder and say which file to connect.
