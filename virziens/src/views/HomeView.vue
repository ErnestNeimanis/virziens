<script setup lang="ts">

import HomeBGVideo from "@/components/navbar/HomeBGVideo.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Hamburger from "@/components/navbar/Hamburger.vue"
import Logo from "@/components/navbar/Logo.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import HomeSection1 from "@/components/home/HomeSection1.vue"
import HomeSection2 from "@/components/home/HomeSection2.vue"
import HomeSection3 from "@/components/home/HomeSection3.vue"
import HomeSection4 from "@/components/home/HomeSection4.vue"
import HomeSection5 from "@/components/home/HomeSection5.vue"
import HomeSection6 from "@/components/home/HomeSection6.vue"
import BGE1 from "@/components/home/BGE1.vue"
import HTSection1 from "@/components/home/HTSection1.vue"
import axios from "axios"



const apiTest = ref("")
async function testApi() {
  console.log('logging for api test')
  const response = await axios.get("https://virziens-api.netlify.app/.netlify/functions/api")
  console.log(response.data.hello)
  apiTest.value = response.data.hello
}
testApi();

const secondVidSection = ref<HTMLAreaElement | null>(null);
const secondVidSectionVisible = ref(false);

const wrapper = ref<HTMLAreaElement | null>(null);

const homeSection2 = ref<HTMLAreaElement | null>(null);

function handleScroll() {

  const element = homeSection2.value;
  if (!element) return;
  const elementPosition = element.getBoundingClientRect();
  const halfViewportHeight = window.innerHeight / 2;

  if (
    elementPosition.top <= window.innerHeight - halfViewportHeight &&
    elementPosition.bottom >= halfViewportHeight
  ) {

  } else {

  }
}
window.addEventListener('scrol', () => {
  console.log('click')
})
onMounted(() => {
  wrapper.value?.addEventListener('scroll', handleScroll)
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
})


</script>
<template>
  <!-- <div>testing api {{ apiTest }}</div> -->

  <NavBar class=" fixed   z-[100] w-2/3" />




  <div ref="wrapper" class="wrapper  h-[100vh]  ">

    <div class="h-full w-full background">
      <HomeBGVideo class=" " />
      <div class="w-full lg:h-[19vw] md:h-[21vw] h-[21vw] min-h-[150px] bg-red-100   border-4 border-blac">

      </div>
      <BGE1 class="z-[-101] overflow-clip" />
      <div class="h-[20vh] ">
        
      </div>
    
 

 

 

      <div class="w-full ">
        <video class="w-full min-w-[420px] h-[80vh]  object-cover" autoplay muted loop playsinline="true">
          <source src="@/assets/videos/one-dancer.mp4" type="video/mp4" />
        </video>
         <div class="h-[70vh] bg-black">

    </div>
      </div>
    </div>
   
    

    <div class="foreground  hidde">

      <HomeSection1 />
      <div ref="homeSection2">
        <HomeSection2 />
      </div>

      <HTSection1 />

      <div>
        <span class="ml-8  text-white uppercase text-[5vw] font-extrabold">Pie mums dejo:</span>
      </div>
        <HomeSection3 />
      <HomeSection4 class="border-t-[2vw] border-amber-700" />
      <HomeSection5 class="border-t-[2vw] border-white" />
      <HomeSection6 class="border-t-[2vw] border-red-200" />
      <div class="h-[150vw]">

      </div>
      
    </div>
  </div>
</template>

<style>
.wrapper {
  background-color: black;
    background-image: url("@/assets/images/virziens-piramida.jpg");
 
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  perspective: 10px;


}

.background {
  transform: translateZ(-10px) scale(2)
}


.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;


  z-index: -1;
}

/* 
.bg-image-s2 {
  background-image: url("@/assets/images/virziens-piramida.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
} */


.parallax-duration {
  transition-duration: 150ms;
}



@keyframes your-animation {
  0% {
    background-position: 0% 30%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>