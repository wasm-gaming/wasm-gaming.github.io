# wasm-gaming — Roadmap

Where every engine stands against the shared plan
([RECORD/2026-11-12.homogenize-engine-integration.WIP.md](RECORD/2026-11-12.homogenize-engine-integration.WIP.md)),
and what comes next. Each repo's own `RECORD/` has the details; this page is the map.

_Last updated: 2026-11-17._

## The target, per engine

1. **Contract 1.0** — `EngineSDKBase` / `EnginePlayBase` from `@wasm-gaming/engine-specs`, a
   self-contained ESM package (the contract's runtime beside the SDK, no import map).
2. **Own storage folder** — saves under OPFS `<engine>/<namespace>/` (`storagePath()`).
3. **Pinned build** — upstream and the emsdk image pinned (never `emsdk:latest`); every source patch checks it applied.
4. **Engine app** — `<engine>/app/app.js` (`EngineApp`): the engine's own start / load-game and
   pause screens on the shared usability scheme (engine-specs `UX.md`, `createInput()`).
5. **Verified with real data** — the owner's test ROMs / data packs (private `test-roms`).

## Status

| Engine | Released | Branch / PR | 1.0 | Storage | Pinned | App | Real data | Notes |
| --- | --- | --- | :-: | :-: | :-: | --- | :-: | --- |
| engine-specs | 0.5.1 | — | — | `storagePath` | — | `UX.md`, `createInput()`, `EngineApp`, **touch pad** | — | #5: synthetic keys must not hide the pad |
| rsdkv4 (Sonic 1/2) | 0.3.3 | — | ✅ | ✅ | ✅ | load-game + pause | partial | options screen pending |
| rsdkv3 (Sonic CD) | 0.2.2 | — | ✅ | ✅ | ✅ | boot + pause | ✅ Sonic CD | load-game screen: phase B pending |
| rsdkv5 (Sonic Mania) | 0.2.1 | — | ✅ | ✅ | ✅ | load-game (8 slots) + pause | ✅ Mania | |
| fbneo (arcade / Neo Geo) | 0.3.2 | — | ✅ | ✅ | ✅ | suspend points + pause, **states in the pause menu** | ✅ mslug, Gridlee | |
| blastem (Mega Drive) | 0.1.3 | — | ✅ | ✅ | ✅ | suspend points + pause, **states in the pause menu** | ✅ | 120 Hz report parked |
| snes9x (SNES) | 0.2.0 | — | ✅ | ✅ | ✅ | suspend points + pause + states | ✅ test ROM | breaking: `load()` → `Snes9xSDK` |
| jgenesis (MD / SMS / GG / SNES / GBA) | 0.2.1 | — | ✅ | ✅ | ✅ upstream 237545e | suspend points + pause + states | test ROM | WebGPU only; states via Rust patch; Docker build not run here |
| mGBA (GBA / GB / GBC) | 0.2.1 | — | ✅ | ✅ | ✅ | suspend points + pause + states | ✅ Tetris, SML, GTA, Kirby | breaking: `load()` → `MgbaSDK` |
| celeste | 0.1.6 | — | ❌ | ❌ | — | — | — | |
| ppsspp | 0.1.1 | — | ✅ | ❌ | — | — | — | |
| geolith | 0.1.3 | — | ❌ | ❌ | — | — | — | |
| smbros | 0.1.1 | — | ❌ | ❌ | — | — | — | |
| mslugxx | — | — | ❌ | ❌ | — | — | — | |

| App | Released | Branch / PR | Notes |
| --- | --- | --- | --- |
| play.germade (launcher) | 0.1.13 | **play.germade#24** (open) | `/roms/` = rom-manager 0.4.0 via `roms-sdk.js`, old library moved in on first start, layers, per-box covers + World box, Sonic 3 A.I.R. 0.0.1 |
| rom-manager | 0.4.0 | — | jq79 UI, layers, mods (IPS / BPS / UPS), `.meta/<System>/index.json`, host mode at `/roms/`, `roms-sdk.js` |
| sonic3air-wasm | 0.0.1 | — | official web build behind an engine-specs SDK + app; on npm (trusted publishing validated) |

Releases bump their own version (`npm version <bump>` in the release workflow): branches keep
the last released one.

## Next

Ordered: what is ready to ship first, then the work it unlocks.

1. **play.germade#24** — merge and release (minor). Done in it: `/roms/` is rom-manager, read
   through `/roms/roms-sdk.js`; the old `library/` moves in by itself; Sonic 3 A.I.R. playable.
2. **rom-manager 0.5.0** (new session and branch) — approved, specified in rom-manager
   `SESSIONS/2026-11-16_02h30…` (extensions 22:50 and 2026-11-17 00:45, and the hand-off at the end):
   - `roms-sdk.js` `openAddDialog()`: its own modal (shadow root), drop or pick ROMs / zips / mods,
     each file shown as recognized / already there / unknown / refused / mod for <game> before
     anything is written.
   - Covers: follow libretro-thumbnails' symlinked boxarts; the cover frame takes the image's own
     proportions (measured medians as placeholders).
   - Then play.germade pins 0.5.0 and its drawer's "Añadir ROMs" opens the modal.
3. **engine-specs 0.6.0** — the shared base for the engines pass (wasm-gaming.github.io
   `RECORD/2026-11-16.engine-settings-screen.WIP.md`):
   - en / es: `Locale`, `Localized`, `localize`, `resolveLocale`, `EngineAppHost.locale`;
   - settings: `label` / `group` / `valueLabels`, the settings model, `loadSettings` /
     `saveSettings` (OPFS `settings/<engine>.json`), UX.md "Settings";
   - controls: remap model and key / button capture;
   - fullscreen toggle: Cmd+Enter (macOS) / Alt+Enter (Windows, Linux); gamepad Select + Y
     (proposed);
   - performance: Wake Lock, FPS / frame-time counter, audio-paced loop helper.
4. **The engines pass** — one record, PR and release per engine (rsdkv3 / v4 / v5, blastem, fbneo,
   snes9x, mGBA, jgenesis, sonic3air):
   - app strings in en / es;
   - "Ajustes" in the pause menu, with everything each engine supports, grouped Vídeo / Audio /
     Emulación / Controles;
   - remapping;
   - the fullscreen toggle;
   - performance settings.
   - Running in a Worker with `OffscreenCanvas` comes later, per engine, where its build allows
     it.
   - sonic3air: no "Ajustes" (the game has its own Options); en / es and fullscreen only.
5. **play.germade en / es** — its UI in both languages, a language choice, `locale` passed to the
   apps, and every engine bumped to its "Ajustes" release.
6. **jgenesis in the launcher** — as the second core for Mega Drive and SNES (`available: true`)
   once checked on a device with WebGPU.
7. **rsdkv3 phase B** — Sonic CD's load-game screen.
8. **Next engines to 1.0** — celeste; ppsspp (storage); geolith; smbros.
9. **rsdkv5 / fbneo / rsdkv4 follow-ups** — as before (delete a slot, Encore; CPS sets, FBNeo
   pin; rsdkv4 options screen).
10. **engine-specs** — Stage 2 of the 1.0 base class.

### Smaller follow-ups

- rom-manager:
  - deep links into `/roms/` (open a system or a game from the launcher);
  - titles the player renamed are kept in the file's record, but not yet in the index the
    launcher reads;
  - a ROM no DAT knows has no "Jugar" in the grouped view.
- **Branch clean-up (owner)**: already merged, safe to delete:
  - `claude/happy-hypatia-jot71i` in blastem, rsdkv3, rsdkv5 and wasm-gaming.github.io;
  - rsdkv5 `claude/lucid-lovelace-57rijc`;
  - play.germade `claude/trusting-davinci-4agutv` and `claude/elegant-hawking-f7yuhp` (its plan
    was rescued into the record);
  - ppsspp `claude/sessions-chromium-review-vc5y11`.

  The owner's own old branches: rsdkv4 `feat/menu-sonic1-2` ("wip fail") and rsdkv5
  `approach-a-static-preload`.

## Deploy order (2026-11-17)

Released: sonic3air-wasm 0.0.1 (npm trusted publishing fixed: the publisher had "stage publish"
only), rom-manager 0.3.0 → 0.3.1 (`-roms` archive) → 0.4.0 (`roms-sdk.js`). Left: **merge
play.germade#24 and release it**; then rom-manager 0.5.0 and play.germade pinning it.

## Parked

- **Speed that varies on the same machine** — a page cannot raise its priority; causes are power /
  heat, the display's refresh rate driving the loop, a busy main thread, a page in the background.
  The mitigations (Worker, audio pacing, Wake Lock, FPS counter) are in the engines pass above.
- **blastem at high refresh rates** — reported once, not reproduced (BlastEm's `video` sync is
  tied to the monitor; ours is `audio`). Findings and the candidate fix in blastem-wasm
  `RECORD/2026-11-13.speed-on-high-refresh-monitors.WIP.md`.

## Ideas, not planned yet

- **Cloud sync (Google Drive, Box)** — for rom-manager's OPFS library (and so for the launcher,
  same origin): a third `vfs-sync` node next to the library and a desktop folder. Limits: Drive
  5 TB per file (750 GB/day per user); Box per plan (Free 250 MB … Enterprise 50 GB). With a cloud
  node the OPFS library can become a cache (download what is missing), which relaxes the need for
  persistent storage — needs "known but not local" entries in the sync. Proposals: play.germade
  `RECORD/2026-11-15.cloud-sync-roms-saves-states.WIP.md`, rom-manager
  `SESSIONS/2026-11-15_12h11.cloud-sync-gdrive-box.session.md`.
- **Mod catalog** — ROMhacking.net is frozen (2024) and behind a Cloudflare challenge; its database
  export on archive.org needs a login. Only as optional metadata for mods the player imports.
