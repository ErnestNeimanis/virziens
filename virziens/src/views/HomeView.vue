<script setup lang="ts">
import testimg from "@/assets/images/textimgcode.jpg"
import  HomeBGVideo from "@/components/navbar/HomeBGVideo.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Hamburger from "@/components/navbar/Hamburger.vue"
import Logo from "@/components/navbar/Logo.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const screenW = ref(window.innerWidth);
const mobileWidth = 640;

const mobileView = computed(() => {
    return screenW.value <= mobileWidth;
});
onMounted(() => {
    window.addEventListener("resize", updateResize);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", updateResize);
});
function updateResize() {
    screenW.value = window.innerWidth;
}

</script>
<template>
 
 <main class="">
        <HomeBGVideo class="fixed top-0 left-0 z-[-1]" />
      <NavBar v-if="!mobileView" class="fixed w-full top-8 right-4 " />
      <Hamburger class="fixed top-8 right-4" v-else/>

        <section class=" w-full h-[60vw]  max-h-[700px] min-h-[300px] ">   
              
        </section>
        <section class=" w-full   e ">
        
          <div class="flex justify-center description-text">
            <h1 class="xl:text-9xl md:text-7xl xs:text-2xl px-6 uppercase font-extrabold">kautkāds īss apraksts par mums </h1>
          </div>
          <div class=" bg-white">
            <article class="text-3xl px-6 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloribus, eligendi laudantium dolore optio voluptate ad sunt nulla dolor neque.
            </article>
          </div>

        </section>
          <section class=" w-full  ">
        <img class="" src="@/assets/images/virziens-piramida.jpg" alt="">
        <div class="px-7">
          <h1 class="xl:text-9xl md:text-7xl xs:text-4xl uppercase font-extrabold -translate-y-52 text-white" >Vēl kaut kas</h1>
        </div>

        </section>
          <section class=" w-full h-96 pt-4 bg-black">
            <div class="w-full">
              <div class="flex justify-center items-center gap-4">
                <div> <a href="https://www.facebook.com/dejustudijavirziens?locale=de_DE"> <i class="bi bi-facebook text-white text-3xl"></i> </a></div>
  <div> <a href="https://www.instagram.com/dejustudijavirziens/?hl=de"> <i class="bi bi-instagram text-white text-3xl"></i> </a></div>
              </div>
            </div>


        </section>

   

   
     </main>




</template>

<style>
.description-text {
  background-color: white;
  animation-name: fade-out;
  animation-duration: 12s;
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  from {
    background-color: white;
  }
  to {
    background-color: transparent;
  }
}


@keyframes your-animation {
  0% {
    background-position:0% 30%;
  }

  100% {
 background-position:100% 50%;
  }
}



</style>