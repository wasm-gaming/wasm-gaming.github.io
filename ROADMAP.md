# wasm-gaming — Roadmap

Where every engine stands against the shared plan
([RECORD/2026-11-12.homogenize-engine-integration.WIP.md](RECORD/2026-11-12.homogenize-engine-integration.WIP.md)),
and what comes next. Each repo's own `RECORD/` has the details; this page is the map.

_Last updated: 2026-11-13._

## The target, per engine

1. **Contract 1.0** — `EngineSDKBase` / `EnginePlayBase` from `@wasm-gaming/engine-specs`, a
   self-contained ESM package (the contract's runtime beside the SDK, no import map).
2. **Own storage folder** — saves under OPFS `<engine>/<namespace>/` (`storagePath()`).
3. **Pinned build** — upstream and the emsdk image pinned; every source patch checks it applied.
4. **Engine app** — `<engine>/app/app.js` (`EngineApp`): the engine's own start / load-game and
   pause screens on the shared usability scheme (engine-specs `UX.md`, `createInput()`).
5. **Verified with real data** — the owner's test ROMs / data packs (private `test-roms`).

## Status

| Engine | Version | 1.0 | Storage | Pinned | App | Real data | Notes |
| --- | --- | :-: | :-: | :-: | --- | :-: | --- |
| engine-specs | 0.4.1 | — | `storagePath` | — | `UX.md`, `createInput()`, `EngineApp` | — | 0.4.1: one Enter acts on one screen |
| rsdkv4 (Sonic 1/2) | 0.3.1 | ✅ | ✅ | ✅ | load-game (craft cards) + pause | partial | options screen pending |
| rsdkv3 (Sonic CD) | 0.2.0 | ✅ | ✅ | ✅ | boot + pause (game screens) | ✅ Sonic CD | load-game screen: phase B pending |
| rsdkv5 (Sonic Mania) | 0.2.0 | ✅ | ✅ | ✅ | **load-game (8 slots)** + pause | ✅ Mania | native stage list + save bridge |
| fbneo (arcade) | 0.2.0 | ✅ | ✅ | ✅ | suspend points + pause | ✅ mslug, Gridlee | breaking: `load()` → `FbneoSDK` |
| blastem (Mega Drive) | 0.1.1 | ✅ | ✅ | ✅ | suspend points + pause | — | 120 Hz report parked |
| jgenesis | 0.1.1 | ❌ | ❌ | — | — | — | next in priority |
| celeste | 0.1.6 | ❌ | ❌ | — | — | — | |
| ppsspp | 0.1.1 | ✅ | ❌ | — | — | — | |
| snes9x | 0.1.1 | ❌ | ❌ | — | — | — | |
| mGBA | 0.1.1 | ❌ | ❌ | — | — | — | |
| geolith | 0.1.3 | ❌ | ❌ | — | — | — | |
| smbros | 0.1.1 | ❌ | ❌ | — | — | — | |
| mslugxx | — | ❌ | ❌ | — | — | — | |

Versions are the ones the 2026-11-13 releases produce (engine-specs patch; rsdkv3, rsdkv5 and
fbneo minor).

## Next

Ordered by the plan's priority (engines that already run in the launcher first).

1. **Launcher (jgermade/play.germade)** — move fbneo to `FbneoSDK` (or mount its app), add the
   rsdkv3 / rsdkv5 apps to `engines.json`, take engine-specs 0.4.1.
2. **rsdkv3 phase B** — Sonic CD's load-game screen: read its save-select scripts from the real
   `SonicCD.rsdk` to learn `saveRAM`'s layout, then the same shape as Mania's (slots read by the
   SDK, started through the game's own logic).
3. **jgenesis → contract 1.0** — then celeste; then ppsspp (storage), snes9x, mGBA, geolith, smbros.
4. **rsdkv5 follow-ups** — delete a slot; Encore slots; zone art.
5. **fbneo follow-ups** — CPS sets with the test ROMs; move the FBNeo pin forward (today's
   upstream changed the audio code the build patches).
6. **rsdkv4** — the options screen in its app.
7. **engine-specs** — Stage 2 of the 1.0 base class (`RECORD/2026-08-14…WIP.md`).

## Parked

- **blastem at high refresh rates** — reported once, not reproduced (BlastEm's `video` sync is
  tied to the monitor; ours is `audio`). Findings and the candidate fix in blastem-wasm
  `RECORD/2026-11-13.speed-on-high-refresh-monitors.WIP.md`.

## Ideas, not planned yet

- **ROM sync in rom-manager** — Google Drive is close: `@cloudauthn/vfs-sync` already ships a
  browser-only `GDriveAdapter` and `sync()`; missing: an OAuth client id, the UI, and resumable
  uploads for big sets (it uploads files whole). Box is further: no adapter, chunked uploads above
  50 MB, and its OAuth may need a token-exchange backend (to be checked).
