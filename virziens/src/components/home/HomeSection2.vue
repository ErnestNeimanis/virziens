<script setup lang="ts">
import { onMounted, ref } from 'vue';

const firstTextContent = ref<string>(`
Jūrmalas deju studija Virziens aicina pievienoties mūsu kolektīvam ne tikai bērnus un jauniešus, bet arī pieaugušos un seniorus. Pie mums iespējams dejot gan hobija nolūkos, gan arī deju apgūt profesionālā līmenī.

`)

const secondTextContent = ref<string>(`
Uzskatu, ka ar katru sasniegumu, mazāku vai lielāku, spējam iedvesmot, un ne tikai mūsu deju studijas audzēkņus, ne tikai mūsu dārgās dzimtenes iedzīvotājus. 


`)

const firstText = ref<HTMLElement | null>(null)
const firstTextAnimationClass = ref("first-text")

const secondText = ref<HTMLElement | null>(null)
const secondTextAnimationClass = ref<string>("translate-x-[10vw]")

function animateFirstText() {
  firstTextAnimationClass.value = "first-text-animate"
}

function animateSecondText1() {
  secondTextAnimationClass.value = ""
}
function animateSecondText2() {
  secondTextAnimationClass.value = "shadow-2xl shadow-white"
}


function onElementIntersection(element: HTMLElement, 
myCallbackFunction: (entry: IntersectionObserverEntry) 
=> void, threshold: number | undefined = 0.1) {
  if (!threshold) threshold = 0.1

  const options = {
    rootMargin: '0px',
    threshold: threshold
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= options.threshold) {
        myCallbackFunction(entry);
      }
    });
  }, options);

  observer.observe(element);
}



function inViewport(el: HTMLElement | null): boolean {
  if (!el) throw new Error("no element detected")
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

onMounted(() => {
  if (!firstText.value || !secondText.value) throw new Error("mounted but no element")
  onElementIntersection(firstText.value, animateFirstText)
  onElementIntersection(secondText.value, animateSecondText1)
  onElementIntersection(secondText.value, animateSecondText2, 1)
})
</script>
<template>
  <section class=" w-full   ">

    <div class="flex justify-center description-text  ">
      <h1 class=" xl:text-9xl md:text-7xl xs:text-4xl text-3xl px-6 uppercase font-extrabold text-center  ">vieta kur
        dejas kļūst par dzīvesveidu </h1>
    </div>
    <div class="flex justify-start items-center h-full relative overflow-hidden ] ">
      <div
        class="relative flex  bg-white/30 w-full  lg:min-h-[1200px] md:min-h-[900px] sm:min-h-[600px] min-h-[450px]  min-w-[340px] ">
        <article
          class="flex flex-col mt-[25vw] md:gap-[10vw] gap-4  lg:text-5xl md:text-4xl sm:text-2xl xs:text-base  px-6   h-full ">
          <p :class="firstTextAnimationClass" ref="firstText" class=" font-semibold font-serif ">
          {{ firstTextContent }}

          </p>

          <p :class="secondTextAnimationClass" ref="secondText"
            class="  transition-all  w-full text-right text-white rounded-lg px-6 font-extrabold bg-white/15 "
            style="transition-duration: 800ms;">
           {{ secondTextContent }}
          </p>

        </article>
        <img class="background-pattern  absolute top-0 w-full z-[-1] -translate-y-[40vw]"
          src="@/assets/images/two-brown-dancers.jpg" alt="">
      </div>


    </div>
  </section>
</template>

<style scoped>
.description-text {
  background-color: white;
  animation-name: fade-out;
  animation-duration: 9s;
  animation-fill-mode: forwards;
}

.first-text {
  transform: translateX(-20px);
}

.first-text-animate {

  animation-name: slide-in;
  animation-duration: 1s;

}

@keyframes slide-in {
  from {
    transform: translateX(-10rem);
  }

  to {
    transform: translateX(0);
  }

}

.background-pattern {
  background-image: url('@/assets/images/pattern-large.png');
}




@keyframes fade-out {
  from {

    background-color: rgb(255, 247, 247);
  }

  to {
    background-color: transparent;
  }
}</style>