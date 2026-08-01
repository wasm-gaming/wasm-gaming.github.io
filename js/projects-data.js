export const PROJECTS = [
  {
    id: "rom-manager",
    title: "ROM Manager",
    package: "@wasm-gaming/rom-manager",
    version: "v0.1.7",
    category: "tools",
    system: "24 MiSTer Systems",
    systemBadge: "MiSTer FPGA",
    tech: ["TypeScript", "React", "File System Access API", "No-Intro / Redump"],
    description: "A client-side tool ('mp3tag for retro games') that groups ROMs by game, matches DAT hashes, attaches cover art, and manages local metadata without server uploads.",
    demoUrl: "https://wasm-gaming.github.io/rom-manager/",
    githubUrl: "https://github.com/wasm-gaming/rom-manager",
    featured: true,
    highlightBadge: "Flagship Web App",
    icon: "folder-game"
  },
  {
    id: "engine-specs",
    title: "Engine Specs",
    package: "@wasm-gaming/engine-specs",
    version: "v0.2.5",
    category: "specs",
    system: "Standardized Spec",
    systemBadge: "Ecosystem Standard",
    tech: ["TypeScript", "JSON Schema", "Zod", "EngineSDK"],
    description: "The shared contract interface every WASM engine and host application conform to. Defines typed manifests, options schemas, VFS assets, and audio-clocked lifecycle APIs.",
    demoUrl: null,
    githubUrl: "https://github.com/wasm-gaming/engine-specs",
    featured: true,
    highlightBadge: "Core Contract",
    icon: "code-standard"
  },
  {
    id: "snes9x-wasm",
    title: "Snes9x WASM",
    package: "@wasm-gaming/snes9x-wasm",
    version: "v0.1.0",
    category: "emulators",
    system: "Super Nintendo",
    systemBadge: "SNES / SFC",
    tech: ["C++", "Emscripten", "AudioWorklet", "No-ASYNCIFY"],
    description: "Snes9x Super Nintendo emulator compiled to WebAssembly with a zero-overhead C++ shim, 2D canvas blitting, and audio-clocked frame loop.",
    demoUrl: "https://wasm-gaming.github.io/snes9x-wasm/",
    githubUrl: "https://github.com/wasm-gaming/snes9x-wasm",
    featured: false,
    icon: "gamepad-snes"
  },
  {
    id: "mgba-wasm",
    title: "mGBA WASM",
    package: "@wasm-gaming/mgba-wasm",
    version: "v0.1.0",
    category: "emulators",
    system: "Game Boy / GBC / GBA",
    systemBadge: "GBA / GBC / GB",
    tech: ["C", "Emscripten", "struct mCore", "AudioWorklet"],
    description: "Accuracy-focused Game Boy Advance, Game Boy Color, and Game Boy emulator using mGBA's struct mCore vtable compiled directly to WebAssembly.",
    demoUrl: "https://wasm-gaming.github.io/mGBA-wasm/",
    githubUrl: "https://github.com/wasm-gaming/mGBA-wasm",
    featured: false,
    icon: "gamepad-gba"
  },
  {
    id: "geolith-wasm",
    title: "Geolith WASM",
    package: "@wasm-gaming/geolith-wasm",
    version: "v0.1.2",
    category: "emulators",
    system: "SNK Neo Geo",
    systemBadge: "Neo Geo AES/MVS",
    tech: ["C11", "Emscripten", "Pure C Core", "Audio Clocked"],
    description: "Highly accurate SNK Neo Geo AES/MVS emulator core by Rupert Carmichael compiled to WebAssembly via pure C11 frontend-free shims.",
    demoUrl: "https://wasm-gaming.github.io/geolith-wasm/",
    githubUrl: "https://github.com/wasm-gaming/geolith-wasm",
    featured: false,
    icon: "arcade-neogeo"
  },
  {
    id: "fbneo-wasm",
    title: "FinalBurn Neo WASM",
    package: "@wasm-gaming/fbneo-wasm",
    version: "v0.1.0",
    category: "emulators",
    system: "Multi-System Arcade",
    systemBadge: "Arcade (CPS/NeoGeo)",
    tech: ["C++", "Emscripten", "CPS-1/2/3", "Cave / System 16"],
    description: "FBNeo arcade emulator compiled to WebAssembly, supporting Capcom CPS-1/2/3, SNK Neo Geo, Sega System 16, Cave, and PGM hardware.",
    demoUrl: "https://wasm-gaming.github.io/fbneo-wasm/",
    githubUrl: "https://github.com/wasm-gaming/fbneo-wasm",
    featured: false,
    icon: "arcade-cabinet"
  },
  {
    id: "jgenesis-wasm",
    title: "jgenesis WASM",
    package: "@wasm-gaming/jgenesis-wasm",
    version: "v0.1.1",
    category: "emulators",
    system: "Sega Genesis / Mega Drive",
    systemBadge: "Genesis / Sega CD / NES",
    tech: ["Rust", "wasm-bindgen", "WebAssembly", "Audio Worklet"],
    description: "Multi-system retro emulator (Genesis, Sega CD, Master System, Game Gear, NES) written in Rust and compiled via wasm-bindgen.",
    demoUrl: "https://wasm-gaming.github.io/jgenesis-wasm/",
    githubUrl: "https://github.com/wasm-gaming/jgenesis-wasm",
    featured: false,
    icon: "rust-gear"
  },
  {
    id: "blastem-wasm",
    title: "BlastEm WASM",
    package: "@wasm-gaming/blastem-wasm",
    version: "v0.1.0",
    category: "emulators",
    system: "Sega Genesis",
    systemBadge: "Sega Mega Drive",
    tech: ["C", "Emscripten", "Pixelated / Smooth", "SDK Surface"],
    description: "High accuracy BlastEm Sega Mega Drive / Genesis emulator compiled to WebAssembly with customizable crisp pixel scaling.",
    demoUrl: "https://wasm-gaming.github.io/blastem-wasm/",
    githubUrl: "https://github.com/wasm-gaming/blastem-wasm",
    featured: false,
    icon: "genesis-pad"
  },
  {
    id: "rsdkv3-wasm",
    title: "RSDKv3 WASM",
    package: "@wasm-gaming/rsdkv3-wasm",
    version: "v0.1.3",
    category: "ports",
    system: "Sonic CD (2011)",
    systemBadge: "RSDKv3 Engine",
    tech: ["C++", "Emscripten", "Sonic CD", "Runtime Data.rsdk"],
    description: "Retro Software Development Kit v3 compiled to WebAssembly. Loads game Data.rsdk at runtime without baking assets into binary.",
    demoUrl: "https://wasm-gaming.github.io/rsdkv3-wasm/",
    githubUrl: "https://github.com/wasm-gaming/rsdkv3-wasm",
    featured: false,
    icon: "sonic-spin"
  },
  {
    id: "rsdkv4-wasm",
    title: "RSDKv4 WASM",
    package: "@wasm-gaming/rsdkv4-wasm",
    version: "v0.1.3",
    category: "ports",
    system: "Sonic 1 & Sonic 2",
    systemBadge: "RSDKv4 Engine",
    tech: ["C++", "Emscripten", "Sonic 1 & 2", "Single WASM Binary"],
    description: "Sonic 1 and Sonic 2 decompilation engine compiled to WASM. Single game-agnostic WASM binary that runs whichever game Data.rsdk is supplied.",
    demoUrl: "https://wasm-gaming.github.io/rsdkv4-wasm/",
    githubUrl: "https://github.com/wasm-gaming/rsdkv4-wasm",
    featured: false,
    icon: "sonic-ring"
  },
  {
    id: "rsdkv5-wasm",
    title: "RSDKv5 WASM",
    package: "@wasm-gaming/rsdkv5-wasm",
    version: "v0.1.0",
    category: "ports",
    system: "Sonic Mania",
    systemBadge: "RSDKv5U Engine",
    tech: ["C++", "Emscripten", "Sonic Mania", "OPFS Storage"],
    description: "RSDKv5U (Sonic Mania decompilation engine) compiled to WebAssembly, wrapped in the engine SDK with OPFS storage namespace.",
    demoUrl: "https://wasm-gaming.github.io/rsdkv5-wasm/",
    githubUrl: "https://github.com/wasm-gaming/rsdkv5-wasm",
    featured: false,
    icon: "sonic-mania"
  },
  {
    id: "smbros-wasm",
    title: "Super Mario Bros. WASM",
    package: "@wasm-gaming/smbros-wasm",
    version: "v0.1.0",
    category: "ports",
    system: "Super Mario Bros.",
    systemBadge: "Godot 4 WASM",
    tech: ["Godot 4", "WebAssembly", "Asset Ripper", "Zero Rom Baked"],
    description: "Super Mario Bros. Remastered Godot 4 project exported to WASM. Extracts graphics directly from player's legally owned NES ROM on boot.",
    demoUrl: "https://wasm-gaming.github.io/smbros-wasm/",
    githubUrl: "https://github.com/wasm-gaming/smbros-wasm",
    featured: false,
    icon: "mush-power"
  },
  {
    id: "celeste-wasm",
    title: "Celeste WASM",
    package: "@wasm-gaming/celeste-wasm",
    version: "v0.1.0",
    category: "ports",
    system: "Celeste + Everest",
    systemBadge: ".NET WebAssembly",
    tech: [".NET WASM", "Everest Mod Loader", "C#", "Client Staging"],
    description: "Celeste running on the .NET WebAssembly runtime in-browser with full Everest mod loading capabilities and local asset staging.",
    demoUrl: "https://wasm-gaming.github.io/celeste-wasm/",
    githubUrl: "https://github.com/wasm-gaming/celeste-wasm",
    featured: false,
    icon: "mountain-climb"
  }
];

export const CODE_EXAMPLES = {
  snes: `import { manifest, load } from '@wasm-gaming/snes9x-wasm';

const canvas = document.querySelector('#game-canvas');
const romBuffer = await fetch('/roms/super_mario_world.sfc').then(r => r.arrayBuffer());

const engine = await load({
  canvas,
  assets: {
    rom: new Uint8Array(romBuffer)
  },
  options: {
    transparency: true
  },
  onEvent: (event) => console.log('Engine state:', event)
});

engine.start();`,
  rsdk: `import { manifest, load } from '@wasm-gaming/rsdkv4-wasm';

const canvas = document.querySelector('#game-canvas');
const dataRsdkBytes = await loadUserDataRsdk();

const engine = await load({
  canvas,
  assets: {
    data: dataRsdkBytes
  },
  storageNamespace: 'sonic1',
  onEvent: (e) => {
    if (e.type === 'ready') console.log('Sonic 1 is ready to play!');
  }
});`,
  rust: `import { manifest, load } from '@wasm-gaming/jgenesis-wasm';

const engine = await load({
  canvasEl: document.querySelector('#game-canvas'),
  assets: { rom: genesisRomBytes },
  options: { romFileName: 'sonic.bin' }
});`
};
