(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const l=[{id:"rom-manager",title:"ROM Manager",package:"@wasm-gaming/rom-manager",version:"v0.1.7",category:"tools",system:"24 MiSTer Systems",systemBadge:"MiSTer FPGA",tech:["TypeScript","React","File System Access API","No-Intro / Redump"],description:"A client-side tool ('mp3tag for retro games') that groups ROMs by game, matches DAT hashes, attaches cover art, and manages local metadata without server uploads.",demoUrl:"https://wasm-gaming.github.io/rom-manager/",githubUrl:"https://github.com/wasm-gaming/rom-manager",featured:!0,highlightBadge:"Flagship Web App",icon:"folder-game"},{id:"engine-specs",title:"Engine Specs",package:"@wasm-gaming/engine-specs",version:"v0.2.5",category:"specs",system:"Standardized Spec",systemBadge:"Ecosystem Standard",tech:["TypeScript","JSON Schema","Zod","EngineSDK"],description:"The shared contract interface every WASM engine and host application conform to. Defines typed manifests, options schemas, VFS assets, and audio-clocked lifecycle APIs.",demoUrl:null,githubUrl:"https://github.com/wasm-gaming/engine-specs",featured:!0,highlightBadge:"Core Contract",icon:"code-standard"},{id:"snes9x-wasm",title:"Snes9x WASM",package:"@wasm-gaming/snes9x-wasm",version:"v0.1.0",category:"emulators",system:"Super Nintendo",systemBadge:"SNES / SFC",tech:["C++","Emscripten","AudioWorklet","No-ASYNCIFY"],description:"Snes9x Super Nintendo emulator compiled to WebAssembly with a zero-overhead C++ shim, 2D canvas blitting, and audio-clocked frame loop.",demoUrl:"https://wasm-gaming.github.io/snes9x-wasm/",githubUrl:"https://github.com/wasm-gaming/snes9x-wasm",featured:!1,icon:"gamepad-snes"},{id:"mgba-wasm",title:"mGBA WASM",package:"@wasm-gaming/mgba-wasm",version:"v0.1.0",category:"emulators",system:"Game Boy / GBC / GBA",systemBadge:"GBA / GBC / GB",tech:["C","Emscripten","struct mCore","AudioWorklet"],description:"Accuracy-focused Game Boy Advance, Game Boy Color, and Game Boy emulator using mGBA's struct mCore vtable compiled directly to WebAssembly.",demoUrl:"https://wasm-gaming.github.io/mGBA-wasm/",githubUrl:"https://github.com/wasm-gaming/mGBA-wasm",featured:!1,icon:"gamepad-gba"},{id:"geolith-wasm",title:"Geolith WASM",package:"@wasm-gaming/geolith-wasm",version:"v0.1.2",category:"emulators",system:"SNK Neo Geo",systemBadge:"Neo Geo AES/MVS",tech:["C11","Emscripten","Pure C Core","Audio Clocked"],description:"Highly accurate SNK Neo Geo AES/MVS emulator core by Rupert Carmichael compiled to WebAssembly via pure C11 frontend-free shims.",demoUrl:"https://wasm-gaming.github.io/geolith-wasm/",githubUrl:"https://github.com/wasm-gaming/geolith-wasm",featured:!1,icon:"arcade-neogeo"},{id:"fbneo-wasm",title:"FinalBurn Neo WASM",package:"@wasm-gaming/fbneo-wasm",version:"v0.1.0",category:"emulators",system:"Multi-System Arcade",systemBadge:"Arcade (CPS/NeoGeo)",tech:["C++","Emscripten","CPS-1/2/3","Cave / System 16"],description:"FBNeo arcade emulator compiled to WebAssembly, supporting Capcom CPS-1/2/3, SNK Neo Geo, Sega System 16, Cave, and PGM hardware.",demoUrl:"https://wasm-gaming.github.io/fbneo-wasm/",githubUrl:"https://github.com/wasm-gaming/fbneo-wasm",featured:!1,icon:"arcade-cabinet"},{id:"jgenesis-wasm",title:"jgenesis WASM",package:"@wasm-gaming/jgenesis-wasm",version:"v0.1.1",category:"emulators",system:"Sega Genesis / Mega Drive",systemBadge:"Genesis / Sega CD / NES",tech:["Rust","wasm-bindgen","WebAssembly","Audio Worklet"],description:"Multi-system retro emulator (Genesis, Sega CD, Master System, Game Gear, NES) written in Rust and compiled via wasm-bindgen.",demoUrl:"https://wasm-gaming.github.io/jgenesis-wasm/",githubUrl:"https://github.com/wasm-gaming/jgenesis-wasm",featured:!1,icon:"rust-gear"},{id:"blastem-wasm",title:"BlastEm WASM",package:"@wasm-gaming/blastem-wasm",version:"v0.1.0",category:"emulators",system:"Sega Genesis",systemBadge:"Sega Mega Drive",tech:["C","Emscripten","Pixelated / Smooth","SDK Surface"],description:"High accuracy BlastEm Sega Mega Drive / Genesis emulator compiled to WebAssembly with customizable crisp pixel scaling.",demoUrl:"https://wasm-gaming.github.io/blastem-wasm/",githubUrl:"https://github.com/wasm-gaming/blastem-wasm",featured:!1,icon:"genesis-pad"},{id:"rsdkv3-wasm",title:"RSDKv3 WASM",package:"@wasm-gaming/rsdkv3-wasm",version:"v0.1.3",category:"ports",system:"Sonic CD (2011)",systemBadge:"RSDKv3 Engine",tech:["C++","Emscripten","Sonic CD","Runtime Data.rsdk"],description:"Retro Software Development Kit v3 compiled to WebAssembly. Loads game Data.rsdk at runtime without baking assets into binary.",demoUrl:"https://wasm-gaming.github.io/rsdkv3-wasm/",githubUrl:"https://github.com/wasm-gaming/rsdkv3-wasm",featured:!1,icon:"sonic-spin"},{id:"rsdkv4-wasm",title:"RSDKv4 WASM",package:"@wasm-gaming/rsdkv4-wasm",version:"v0.1.3",category:"ports",system:"Sonic 1 & Sonic 2",systemBadge:"RSDKv4 Engine",tech:["C++","Emscripten","Sonic 1 & 2","Single WASM Binary"],description:"Sonic 1 and Sonic 2 decompilation engine compiled to WASM. Single game-agnostic WASM binary that runs whichever game Data.rsdk is supplied.",demoUrl:"https://wasm-gaming.github.io/rsdkv4-wasm/",githubUrl:"https://github.com/wasm-gaming/rsdkv4-wasm",featured:!1,icon:"sonic-ring"},{id:"rsdkv5-wasm",title:"RSDKv5 WASM",package:"@wasm-gaming/rsdkv5-wasm",version:"v0.1.0",category:"ports",system:"Sonic Mania",systemBadge:"RSDKv5U Engine",tech:["C++","Emscripten","Sonic Mania","OPFS Storage"],description:"RSDKv5U (Sonic Mania decompilation engine) compiled to WebAssembly, wrapped in the engine SDK with OPFS storage namespace.",demoUrl:"https://wasm-gaming.github.io/rsdkv5-wasm/",githubUrl:"https://github.com/wasm-gaming/rsdkv5-wasm",featured:!1,icon:"sonic-mania"},{id:"smbros-wasm",title:"Super Mario Bros. WASM",package:"@wasm-gaming/smbros-wasm",version:"v0.1.0",category:"ports",system:"Super Mario Bros.",systemBadge:"Godot 4 WASM",tech:["Godot 4","WebAssembly","Asset Ripper","Zero Rom Baked"],description:"Super Mario Bros. Remastered Godot 4 project exported to WASM. Extracts graphics directly from player's legally owned NES ROM on boot.",demoUrl:"https://wasm-gaming.github.io/smbros-wasm/",githubUrl:"https://github.com/wasm-gaming/smbros-wasm",featured:!1,icon:"mush-power"},{id:"celeste-wasm",title:"Celeste WASM",package:"@wasm-gaming/celeste-wasm",version:"v0.1.0",category:"ports",system:"Celeste + Everest",systemBadge:".NET WebAssembly",tech:[".NET WASM","Everest Mod Loader","C#","Client Staging"],description:"Celeste running on the .NET WebAssembly runtime in-browser with full Everest mod loading capabilities and local asset staging.",demoUrl:"https://wasm-gaming.github.io/celeste-wasm/",githubUrl:"https://github.com/wasm-gaming/celeste-wasm",featured:!1,icon:"mountain-climb"}],d={snes:`import { manifest, load } from '@wasm-gaming/snes9x-wasm';

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

engine.start();`,rsdk:`import { manifest, load } from '@wasm-gaming/rsdkv4-wasm';

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
});`,rust:`import { manifest, load } from '@wasm-gaming/jgenesis-wasm';

const engine = await load({
  canvasEl: document.querySelector('#game-canvas'),
  assets: { rom: genesisRomBytes },
  options: { romFileName: 'sonic.bin' }
});`};let c="all",r="";document.addEventListener("DOMContentLoaded",()=>{u(),g(),h(),p(),w()});function u(){const s=document.getElementById("bg-canvas");if(!s)return;const a=s.getContext("2d");let e=s.width=window.innerWidth,o=s.height=window.innerHeight;window.addEventListener("resize",()=>{e=s.width=window.innerWidth,o=s.height=window.innerHeight});const t=Array.from({length:45},()=>({x:Math.random()*e,y:Math.random()*o,radius:Math.random()*1.8+.6,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,alpha:Math.random()*.5+.2}));function n(){a.clearRect(0,0,e,o),t.forEach(i=>{i.x+=i.vx,i.y+=i.vy,i.x<0&&(i.x=e),i.x>e&&(i.x=0),i.y<0&&(i.y=o),i.y>o&&(i.y=0),a.beginPath(),a.arc(i.x,i.y,i.radius,0,Math.PI*2),a.fillStyle=`rgba(139, 92, 246, ${i.alpha})`,a.shadowBlur=8,a.shadowColor="#8b5cf6",a.fill()}),requestAnimationFrame(n)}n()}function h(){const s=document.getElementById("search-input"),a=document.querySelectorAll(".filter-btn");s&&s.addEventListener("input",e=>{r=e.target.value.toLowerCase().trim(),g()}),a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(o=>o.classList.remove("active")),e.classList.add("active"),c=e.dataset.category||"all",g()})})}function g(){const s=document.getElementById("catalog-grid");if(!s)return;const a=l.filter(e=>{const o=c==="all"||e.category===c,t=!r||e.title.toLowerCase().includes(r)||e.description.toLowerCase().includes(r)||e.system.toLowerCase().includes(r)||e.tech.some(n=>n.toLowerCase().includes(r));return o&&t});if(a.length===0){s.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No repositories found matching "${r}"</p>
        <span style="font-size: 0.9rem; color: var(--text-dim);">Try searching for SNES, Genesis, Sonic, Rust, or C++</span>
      </div>
    `;return}s.innerHTML=a.map(e=>`
    <div class="project-card">
      <div>
        <div class="card-top">
          <span class="system-badge">${m(e.systemBadge)}</span>
          <span class="version-tag">${m(e.version)}</span>
        </div>
        <h3 class="project-title">${m(e.title)}</h3>
        <p class="project-desc">${m(e.description)}</p>
        <div class="tag-list">
          ${e.tech.map(o=>`<span class="tag">${m(o)}</span>`).join("")}
        </div>
      </div>
      <div class="card-actions">
        ${e.demoUrl?`
          <a href="${e.demoUrl}" target="_blank" rel="noopener" class="btn-card-launch">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Launch Demo
          </a>
        `:`
          <a href="${e.githubUrl}" target="_blank" rel="noopener" class="btn-card-launch" style="background: rgba(255,255,255,0.08);">
            View Spec
          </a>
        `}
        <a href="${e.githubUrl}" target="_blank" rel="noopener" class="btn-card-repo" title="View Source on GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  `).join("")}function p(){const s=document.getElementById("code-display"),a=document.querySelectorAll(".code-tab"),e=document.getElementById("btn-copy-code");if(!s)return;function o(t){d[t]&&(s.textContent=d[t])}a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(n=>n.classList.remove("active")),t.classList.add("active"),o(t.dataset.snippet)})}),e&&e.addEventListener("click",()=>{navigator.clipboard.writeText(s.textContent).then(()=>{const t=e.innerHTML;e.innerHTML="✓ Copied!",setTimeout(()=>{e.innerHTML=t},2e3)})}),o("snes")}function w(){document.querySelectorAll(".stat-number").forEach(a=>{const e=parseInt(a.dataset.target,10);if(isNaN(e))return;let o=0;const n=Math.max(y(1200/e),30),i=setInterval(()=>{o++,a.textContent=o,o>=e&&(a.textContent=e+(a.dataset.suffix||""),clearInterval(i))},n)})}function y(s){return Math.floor(s)}function m(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
