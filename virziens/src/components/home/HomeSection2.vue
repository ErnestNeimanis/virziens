<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useInView } from '@/composables/in-view';


const secondTextContent = ref<string>(`
"Uzskatu, ka ar katru sasniegumu, mazāku vai lielāku, spējam iedvesmot, un ne tikai mūsu deju studijas audzēkņus, ne tikai mūsu dārgās dzimtenes iedzīvotājus," stāsta trenere Baiba Andersone.


`)






const secondText = ref<HTMLElement | null>(null)
const secondTextAnimationClass = ref<string>("translate-x-[10vw]")



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




onMounted(() => {
  if(secondText.value){
    useInView(secondText.value,animateSecondText2)
  }
})
</script>
<template>
  <section class=" w-full h-full  relative"  >


    <div class="flex justify-center description-text   h-[16vw]">
      <h1 class=" text-[5vw] px-6 uppercase font-extrabold text-center  ">vieta, kur
        deja kļūst par dzīvesveidu </h1>
    </div>
    <div class="flex justify-start items-center  relative overflow-hidden    background-container">
      <div
        class="relative flex   ">
        <article
          class="flex flex-col mt-[25vw] md:gap-[10vw] gap-4  lg:text-5xl md:text-4xl sm:text-2xl xs:text-base  px-6   h-full ">
      

          <p :class="secondTextAnimationClass" ref="secondText"
            class="  transition-all mb-[3.5vw] w-full text-center   rounded-lg px-6 my-56 font-extrabold bg-white/40 "
            style="transition-duration: 800ms;">
           {{ secondTextContent }}
          </p>

        </article>
       
      </div>


    </div>
  </section>
</template>

<style scoped>
.description-text {
  background-color: rgb(254 226 226 );
  animation-name: fade-out;
  animation-duration: 7s;
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



@keyframes fade-out {
  from {

    background-color:  rgb(254 226 226 );
  }

  to {
    background-color: transparent;
  }



}

  .background-container {
  background-image: url('@/assets/images/ba-stars.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  
}
</style>