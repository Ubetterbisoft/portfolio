<template>
    
    <div class="bg-gray-700 min-h-screen">
      <div class="flex flex-col md:flex-row">
  
        <!-- Bild- und Text-Overlay-Bereich -->
        <div class="relative w-full md:w-3/4 h-80 md:h-screen overflow-hidden">
          <!-- Bild: auf Mobile  h-80, auf Desktop volle Höhe, aber objekt-cover, damit nix verzerrt -->
          <img
            src="~assets/bild.png"
            alt="Hintergrundbild"
            class="sm:w-full sm:h-full md:w-2/2 sm:pl-10  md:-pl-50 object-cover object-left-top"
          />
  
          <!-- Overlay: füllt Container, nutzt Flex zum Zentrieren -->
          <div
            class="absolute inset-0
                   flex items-center justify-center
                   md:items-start md:justify-start
                   p-4 md:pt-80 md:pl-50"
          >
            <div>
              <h1 class="text-4xl sm:text-6xl md:text-8xl md:-ml-30 lg:text-9xl font-mono font-semibold text-white leading-tight">
                Dejan<br/>Rajic.
              </h1>
              <div class="w-16 sm:w-20 h-1 sm:h-2 md:h-3 lg:h-5 bg-amber-400 mt-2"></div>
            </div>
          </div>
        </div>
  
        <!-- Steckbrief-Bereich -->
        <div class="w-full md:w-1/4 p-6 flex items-center justify-center">
          <h1 class="text-3xl sm:text-5xl md:text-7xl font-mono font-semibold text-white">
            hallo
          </h1>
        </div>
  
      </div>
    </div>
  </template>
  