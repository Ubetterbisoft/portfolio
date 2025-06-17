<template>
  <div class=" overflow-hidden bg-gray-700 min-h-screen flex flex-col md:flex-row">

    <!-- Bild-Container mit Slide+Fade -->
    <transition name="slide-image" appear>
      <div class="relative w-full md:w-1/3 h-screen overflow-hidden">
        <img src="~assets/landing1.jpg" alt="Hintergrundbild" class="w-full h-full object-cover object-top" />
        <!-- Mobile Overlay (Fade-only) -->
        <transition name="slide-title" appear>
          <div class="absolute top-[7%] left-[10%] block md:hidden">
            <h1 class=" text-white font-mono font-thin leading-tight text-3xl 
              md:text-4xl md:pt-7
              xl:text-8xl xl:pt-3"> Ihr Webentwickler des Vertrauens</h1>
            <h1 class="pt-[4rem] text-white font-mono font-semibold leading-tight text-4xl sm:text-5xl">
              Dejan<br />Rajic.
            </h1>

            <span class="block mt-2 h-1 bg-amber-400 w-7 sm:w-11 "></span>
          </div>
        </transition>
      </div>
    </transition>


    <!-- Text- und Desktop-Overlay-Bereich -->
    <div class="w-full md:w-2/3 p-6 relative">
      <!-- Desktop Overlay: Slide from right + Fade -->
      <transition name="slide-title" appear>
        <div class="group hidden md:block absolute top-[25%] left-[12%] xl:top-[30%] xl:left-[15%]">
          <div class="flex flex-row">
            <h1 class="text-white font-mono font-semibold leading-tight text-5xl md:text-6xl xl:text-7xl">
              Dejan<br />Rajic.
            </h1>

            <span class="ml-[5rem] text-white font-arial font-light leading-tight text-3xl 
              md:text-4xl md:pt-7
               
              xl:text-5xl xl:pt-[4rem]"> Ihr Webentwickler des Vertrauens</span>


          </div>
          <span class="block mt-2 h-1 bg-amber-400 w-10 
          md:w-15 md:group-hover:w-100
          xl:w-20 xl:group-hover:w-150 
          transition-all duration-300 ease-in-out"></span>
        </div>

      </transition>
      <div class="flex col absolute top-[55%] left-[40%] block">
        <transition name="slide-description" appear>
          <p class="font-arial italic font-normal text-gray-300 text-base
            w-[20rem]
            pt-[2rem]
            xl:text-lg
          ">Dejan Rajic kommt aus Österreich und baut professionelle,
            maßgeschneiderte Websites – performant, detailverliebt und mit klarem <a
              class="underline decoration-amber-400">Fokus auf deine Ziele.</a>
          </p>
        </transition>
        <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
          'One developer',
          'Unlimited projects',
          'Access to GitHub repository',
          'Unlimited patch & minor updates',
          'Lifetime access'
        ]" />

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
  transform: translateX(20%);
  opacity: 0;
}

.slide-title-enter-to {
  transform: translateX(0);
  opacity: 1;
}

/* ------------------------------- */
/* Description-Transition: Slide von links + Fade mit Delay */
/* ------------------------------- */
.slide-description-enter-active {
  transition: transform 1s ease-out 1s, opacity 1s ease-out 1s;
}

.slide-description-enter-from {
  transform: translateX(-20%) translateY(10%);

  opacity: 0;
}

.slide-description-enter-to {
  transform: translateX(0%) translateY(0%);

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
