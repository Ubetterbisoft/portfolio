<template>
  <div class="bg-gray-700 min-h-screen flex flex-col md:flex-row">

    <!-- Bild-Container mit Slide+Fade -->
    <transition name="slide-image" appear>
      <div class="relative w-full md:w-1/3 h-screen overflow-hidden">
        <img
          src="~assets/landing1.jpg"
          alt="Hintergrundbild"
          class="w-full h-full object-cover object-top"
        />
        <!-- Mobile Overlay (Fade-only) -->
        <transition name="slide-title" appear>
          <div class="absolute top-[20%] left-[10%] block md:hidden">
            <h1 class="text-white font-mono font-semibold leading-tight text-4xl sm:text-5xl">
              Dejan<br/>Rajic.
            </h1>
            <span class="block mt-2 h-1 bg-amber-400 w-16 sm:w-20"></span>
          </div>
        </transition>
      </div>
    </transition>

    <!-- Text- und Desktop-Overlay-Bereich -->
    <div class="w-full md:w-2/3 p-6 relative">
      <!-- Desktop Overlay: Slide from right + Fade -->
      <transition name="slide-title" appear>
        <div class="hidden md:block absolute top-[25%] left-[12%] xl:top-[30%] xl:left-[15%]">
          <h1 class="text-white font-mono font-semibold leading-tight text-5xl md:text-6xl xl:text-7xl">
            Dejan<br/>Rajic.
          </h1>
          <span class="block mt-2 h-1 bg-amber-400 w-20 md:w-24 xl:w-28"></span>
        </div>
      </transition>

      <!-- 'hallo' bleibt statisch und zentriert -->
      <div class="w-full h-full flex items-center justify-center">
        <h2 class="text-white font-mono font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          hallo
        </h2>
      </div>
    </div>

  </div>
</template>

<style>
/* ------------------------------- */
/* Bild-Transition: Slide von links + Fade */
/* ------------------------------- */
.slide-image-enter-active {
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}
.slide-image-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-image-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* ------------------------------- */
/* Titel-Transition: Slide von rechts + Fade mit Delay */
/* ------------------------------- */
.slide-title-enter-active {
  transition: transform 0.6s ease-out 0.3s, opacity 0.6s ease-out 0.3s;
}
.slide-title-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-title-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* ------------------------------- */
/* Mobile-spezifisch (<769px): nur Fade */
/* ------------------------------- */
@media (max-width: 768px) {
  .slide-image-enter-from,
  .slide-image-enter-to,
  .slide-title-enter-from,
  .slide-title-enter-to {
    /* Keine Translation auf Mobil – nur Opacity animieren */
    transform: none !important;
  }
}
</style>
