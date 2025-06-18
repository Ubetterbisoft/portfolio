<template>
    <div class="h-screen bg-zinc-900 pt-[10%]">
        <div class="flex justify-around">
            <div ref="card" class="bg-gray-600 hover:bg-amber-500 duration-200 ease-in
               xl:w-[20rem] xl:h-[20rem] flex items-center justify-center">
                <transition name="slide-up">
                    <!-- Elemente mit v-if werden erst gemountet, wenn isVisible true ist -->
                    <div v-if="isVisible">
                        <p class="text-4xl text-white text-center">
                            Product Designer
                        </p>
                        <p class="text-lg text-gray-800 text-center">Beschreibung</p>
                    </div>
                </transition>
            </div>
            <div ref="card" class="bg-gray-600 hover:bg-amber-500 duration-200 ease-in
               xl:w-[20rem] xl:h-[20rem] flex items-center justify-center">
                <transition name="slide-up">
                    <!-- Elemente mit v-if werden erst gemountet, wenn isVisible true ist -->
                    <div v-if="isVisible">
                        <p class="text-4xl text-white text-center">
                            Expertiese
                        </p>
                        <p class="text-lg text-gray-800 text-center">Beschreibung</p>
                    </div>
                </transition>
            </div>
            <div ref="card" class="bg-gray-600 hover:bg-amber-500 duration-200 ease-in
               xl:w-[20rem] xl:h-[20rem] flex items-center justify-center">
                <transition name="slide-up">
                    <!-- Elemente mit v-if werden erst gemountet, wenn isVisible true ist -->
                    <div v-if="isVisible">
                        <p class="text-4xl text-white text-center">
                            <i class="pi pi-database pe-5"></i>Frameworks
                        </p>
                        <p class="text-lg text-gray-800 text-center">Beschreibung</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const card = ref(null)
const isVisible = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true      // Transition via v-if auslösen
                observer.disconnect()       // nur einmal
            }
        },
        { threshold: 0.2 }             // ab 20 % Sichtbarkeit
    )
    if (card.value) observer.observe(card.value)
})
</script>

<style>
.slide-up-enter-active {
    transition: transform 1s ease-out, opacity 1.5s ease-out;
}

.slide-up-enter-from {
    transform: translateY(70%);
    opacity: 0;
}

.slide-up-enter-to {
    transform: translateY(0);
    opacity: 1;
}
</style>
