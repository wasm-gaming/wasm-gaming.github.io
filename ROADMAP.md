# wasm-gaming — Roadmap

Where every engine stands against the shared plan
([RECORD/2026-11-12.homogenize-engine-integration.WIP.md](RECORD/2026-11-12.homogenize-engine-integration.WIP.md)),
and what comes next. Each repo's own `RECORD/` has the details; this page is the map.

_Last updated: 2026-11-15._

## The target, per engine

1. **Contract 1.0** — `EngineSDKBase` / `EnginePlayBase` from `@wasm-gaming/engine-specs`, a
   self-contained ESM package (the contract's runtime beside the SDK, no import map).
2. **Own storage folder** — saves under OPFS `<engine>/<namespace>/` (`storagePath()`).
3. **Pinned build** — upstream and the emsdk image pinned; every source patch checks it applied.
4. **Engine app** — `<engine>/app/app.js` (`EngineApp`): the engine's own start / load-game and
   pause screens on the shared usability scheme (engine-specs `UX.md`, `createInput()`).
5. **Verified with real data** — the owner's test ROMs / data packs (private `test-roms`).

## Status

| Engine | Released | Branch / PR | 1.0 | Storage | Pinned | App | Real data | Notes |
| --- | --- | --- | :-: | :-: | :-: | --- | :-: | --- |
| engine-specs | 0.5.0 | engine-specs#5 → 0.5.1 | — | `storagePath` | — | `UX.md`, `createInput()`, `EngineApp`, **touch pad** | — | #5: synthetic keys must not hide the pad |
| rsdkv4 (Sonic 1/2) | 0.3.3 | — | ✅ | ✅ | ✅ | load-game + pause | partial | options screen pending |
| rsdkv3 (Sonic CD) | 0.2.2 | — | ✅ | ✅ | ✅ | boot + pause | ✅ Sonic CD | load-game screen: phase B pending |
| rsdkv5 (Sonic Mania) | 0.2.1 | — | ✅ | ✅ | ✅ | load-game (8 slots) + pause | ✅ Mania | |
| fbneo (arcade / Neo Geo) | 0.3.2 | — | ✅ | ✅ | ✅ | suspend points + pause, **states in the pause menu** | ✅ mslug, Gridlee | |
| blastem (Mega Drive) | 0.1.3 | — | ✅ | ✅ | ✅ | suspend points + pause, **states in the pause menu** | ✅ | 120 Hz report parked |
| snes9x (SNES) | 0.1.1 | **snes9x-wasm#1** → 0.2.0 | ✅ | ✅ | ✅ | suspend points + pause + states | ✅ test ROM | breaking: `load()` → `Snes9xSDK` |
| jgenesis (MD / SMS / GG / SNES / GBA) | 0.1.1 | **jgenesis-wasm#1** → 0.2.0 | ✅ | ✅ | ✅ upstream 237545e | suspend points + pause + states | test ROM | WebGPU only; states via Rust patch; Docker build not run here |
| mGBA (GBA / GB / GBC) | 0.1.1 | branch, no PR → 0.2.0 | ✅ | ✅ | ✅ | suspend points + pause + states | ✅ Tetris, SML, GTA, Kirby | breaking: `load()` → `MgbaSDK` |
| celeste | 0.1.6 | — | ❌ | ❌ | — | — | — | |
| ppsspp | 0.1.1 | — | ✅ | ❌ | — | — | — | |
| geolith | 0.1.3 | — | ❌ | ❌ | — | — | — | |
| smbros | 0.1.1 | — | ❌ | ❌ | — | — | — | |
| mslugxx | — | — | ❌ | ❌ | — | — | — | |

| App | Released | Branch / PR | Notes |
| --- | --- | --- | --- |
| play.germade (launcher) | 0.1.11 | to redo from `main`: 8 commits (SNES, GBA) | `main` pins blastem 0.1.2 / fbneo 0.3.1 and engine-specs `^0.4.1` (touch pad off) |
| rom-manager | 0.1.8 | branch, no PR → 0.2.0 | OPFS library, add ROMs one by one, folder sync, phone panels |

Releases bump their own version (`npm version <bump>` in the release workflow): branches keep
the last released one.

## Next

Ordered: what is ready to ship first, then the work it unlocks.

1. **Ship what is ready** (order in the deploy list below): engine-specs 0.5.1, snes9x 0.2.0,
   mGBA 0.2.0, jgenesis 0.2.0, rom-manager 0.2.0, then play.germade.
2. **play.germade** — a new branch from `main`: cherry-pick the SNES / GBA commits of
   `claude/trusting-davinci-4agutv` (404c1b2, cc8c62a, 34f818b, 29bbbf8, 36e3d8d, e786474,
   6b38f13, 5d78d80); engine-specs `^0.5.1` (turns the touch pad on); `engines.json`: blastem
   0.1.3, fbneo 0.3.2, snes9x 0.2.0, mgba 0.2.0; the `snes` and `gba` entries `status: 'ready'`.
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

## Deploy order (what is ready, 2026-11-15)

1. **engine-specs#5** → merge, release **patch** (0.5.1, npm).
2. **snes9x-wasm#1** → merge, release **minor** (0.2.0).
3. **mGBA-wasm** → open the PR from `claude/trusting-davinci-4agutv`, merge, release **minor** (0.2.0).
4. **jgenesis-wasm#1** → merge, release **minor** (0.2.0) — its CI runs the Docker build that was
   not run in the session; check it passes before releasing.
5. **rom-manager** → PR, merge, release **minor** (0.2.0; deploys its GitHub Pages).
6. **play.germade** → the new branch of Next §2 (needs 1–3 released), PR, merge, release.

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
