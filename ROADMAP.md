# wasm-gaming — Roadmap

Where every engine stands against the shared plan
([RECORD/2026-11-12.homogenize-engine-integration.WIP.md](RECORD/2026-11-12.homogenize-engine-integration.WIP.md)),
and what comes next. Each repo's own `RECORD/` has the details; this page is the map.

_Last updated: 2026-11-16._

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
| play.germade (launcher) | 0.1.11 | **play.germade#22** | SNES + GBA / GB / GBC, engine-specs `^0.5.1` (touch pad on), every engine at its latest release |
| rom-manager | 0.2.0 | — | OPFS library, add ROMs one by one, folder sync, phone panels |

Releases bump their own version (`npm version <bump>` in the release workflow): branches keep
the last released one.

## Next

Ordered: what is ready to ship first, then the work it unlocks.

1. **play.germade#22** — merge and release (the rest is out).
2. **Sonic 3 A.I.R.** — proposal in play.germade `RECORD/2026-11-15.sonic-3-air-integration.WIP.md`:
   a `sonic3air-wasm` package around the official web build (needs the repo created).
3. **rom-manager step 3 — mods**: import IPS / BPS / UPS one by one (BPS / UPS find their game by
   the source CRC, IPS by choice), stored with the game; panel 4 lists them; "Jugar con este mod"
   → play.germade `?patch=`. Optional names from the RHDN archive.org export, if the owner fetches it.
4. **rom-manager as play.germade's `/roms/`** — built with base `/roms/`, pinned and copied into
   play.germade's `dist/roms/`; play.germade reads `rom-manager/library/` (layout in rom-manager
   `STACK.md`); one-time migration of `library/<system>/`; remove play.germade's own manager.
5. **jgenesis in the launcher** — as the second core for Mega Drive and SNES (`available: true`)
   once 0.2.0 is out and checked on a device with WebGPU.
6. **rsdkv3 phase B** — Sonic CD's load-game screen.
7. **Next engines to 1.0** — celeste; ppsspp (storage); geolith; smbros.
8. **rsdkv5 / fbneo / rsdkv4 follow-ups** — as before (delete a slot, Encore; CPS sets, FBNeo
   pin; rsdkv4 options screen).
9. **engine-specs** — Stage 2 of the 1.0 base class.

## Deploy order (2026-11-16)

Released: engine-specs 0.5.1, snes9x 0.2.0 (after snes9x-wasm#2: link with em++, emsdk pinned to
7.0.0 — `latest` moved to 7 and broke the build), mGBA 0.2.1 (emsdk pinned), jgenesis 0.2.1
(one coi-serviceworker), rom-manager 0.2.0. Left: **merge play.germade#22 and release it.**

## Parked

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
