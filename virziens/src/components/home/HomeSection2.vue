<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { useInView } from '@/composables/in-view';


const secondTextContent = ref<string>(`
"Es ticu, ka ar katru sasniegumu – lielu vai mazu – mēs spējam iedvesmot ne tikai savus deju studijas audzēkņus, bet arī plašāku sabiedrību visā Latvijā," stāsta trenere Baiba Apena.

`)






const secondText = ref<HTMLElement | null>(null)
const secondTextAnimationClass = ref<string>("-translate-y-[20px]")



function animateSecondText2() {
  secondTextAnimationClass.value = ""
  setTimeout(()=>{
    secondTextAnimationClass.value = "text-shadow"
  },990)
  
}





onMounted(() => {
  if(secondText.value){
    useInView(secondText.value,animateSecondText2)
  }
})
</script>
<template>
  <section class=" w-full h-full  relative"  >


    <div class="flex justify-center description-text   ">
      <h1 class=" text-[6vw] px-6  uppercase font-extrabold text-center  ">vieta, kur
        deja kļūst par dzīvesveidu! </h1>
    </div>
    <div class="flex justify-start items-center  relative overflow-hidden    background-container">
      <div
        class="relative flex   ">
        <article
          class="flex flex-col mt-[25vw] md:gap-[10vw] gap-4  lg:text-6xl md:text-5xl sm:text-4xl xs:text-xl  px-6   h-full ">
    
          <p :class="secondTextAnimationClass" ref="secondText"
            class="  transition-all mb-[3.5vw] w-full text-center   rounded-lg px-6 my-56 font-extrabold bg-white/40 "
            style="transition-duration: 1000ms;">
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
  animation-duration: 13s;
  animation-fill-mode: forwards;
}

.text-shadow {
  box-shadow: 0px 0px 20px 8px rgb(255,255,255);
  transition-property: box-shadow;
  transition-duration: 100ms;
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
