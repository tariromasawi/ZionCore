# ZionCore

Empty shell. Drop files in, then wire them in a later pass.

Nothing here runs your scripts by itself. `index.html` only reads `data/manifest.json` and lists what is registered. Unlisted files stay on disk.

## Where to drop files

| Kind | Folder | Notes |
| --- | --- | --- |
| JavaScript | `js/incoming/` | Browser scripts. Not loaded until wired. |
| HTML | `html/incoming/` | Fragments or extra pages. |
| JSON | `data/` | Config and records. |
| Python | `python/incoming/` | Repo only. GitHub Pages does not run Python. |

## Live page

https://tariromasawi.github.io/ZionCore/

The page is static. It does not call banks, networks, or other repositories.

## After you add a script

Say which file to connect. Wiring is a separate step.
