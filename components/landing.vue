<template>
  <div class="bg-gray-700 min-h-screen flex flex-col md:flex-row">

    <!-- Bild-Container: volle Screen-Höhe, auf md+ 1/3 Breite -->
    <div class="relative w-full md:w-1/3 h-screen overflow-hidden">
      <img
        src="~assets/landing1.jpg"
        alt="Hintergrundbild"
        class="w-full h-full object-cover object-top"
      />
      <!-- Overlay mobil (<769px) -->
      <div class="absolute top-[20%] left-[7%] md:hidden">
        <h1 class="text-white font-mono font-semibold leading-tight text-4xl sm:text-5xl">
          Dejan<br/>Rajic.
        </h1>
        <span class="block mt-2 h-1 bg-amber-400 w-16 sm:w-20"></span>
      </div>
    </div>

    <!-- Text-Container: auf md+ 2/3 Breite, relative Position für Overlay -->
    <div class="w-full md:w-2/3 p-6 relative">
      <!-- Overlay Desktop (>=769px) -->
      <div
        class="
          hidden md:block absolute
          top-[10%] 
          left-[10%] md:left-[12%] xl:left-[15%]
        "
      >
        <h1 class="text-white font-mono font-semibold leading-tight text-5xl md:text-6xl xl:text-7xl">
          Dejan<br/>Rajic.
        </h1>
        <span class="block mt-2 h-1 bg-amber-400 w-20 md:w-24 xl:w-28"></span>
      </div>

      <!-- 'hallo' bleibt zentriert -->
      <div class="w-full h-full flex items-center justify-center">
        <h2 class="text-white font-mono font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          hallo
        </h2>
      </div>
    </div>

  </div>
</template>

<style>
/* 
  • Das Bild füllt den linken Bereich (1/3 Breite ab md) in voller Höhe (h-screen).  
  • Mobile Overlay (Dejan Rajic) ist nur unter 769px sichtbar (md:hidden).  
  • Desktop Overlay ist nur ab 769px sichtbar (hidden md:block) und sitzt im rechten Bereich.
  • %-Offsets bleiben identisch, so dass sich die vertikale Position nicht ändert.  
  • „hallo“ bleibt immer mittig im verbliebenen Raum.  
*/
</style>
