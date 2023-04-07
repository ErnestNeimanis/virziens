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
import BGE1 from "@/components/home/BGE1.vue"
import HTSection1 from "@/components/home/HTSection1.vue"


const secondVidSection = ref<HTMLAreaElement | null>(null);
const secondVidSectionVisible = ref(false);

const wrapper = ref<HTMLAreaElement | null>(null);

const homeSection2 =  ref<HTMLAreaElement | null>(null);
       
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
window.addEventListener('scrol', ()=>{
  console.log('click')
})
onMounted(() => {
wrapper.value?.addEventListener('scroll',handleScroll)
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
})


</script>
<template>
 
    <NavBar class=" fixed w-full top-8 right-4 z-[100]" />




    <div ref="wrapper" class="wrapper  h-[100vh]  ">
     
      <div class="h-full w-full background ">
<HomeBGVideo class=" " />
        <div class="w-full h-64 bg-red-100">

        </div>
        <BGE1 class="" />
        <div class="h-[10vw]">

        </div>

          <div class="w-full ">
                <video class="w-full" autoplay muted loop>
                  <source src="@/assets/videos/one-dancer.mp4" type="video/mp4"/>
                </video>
              </div>

      </div>
      
      <div class="foreground ">
        <HomeSection1 />
        <div ref="homeSection2">
<HomeSection2  />
        </div>
        
        <HTSection1 />

        <div ref="secondVidSection">
          <HomeSection3 />
        </div>
        <section class=" w-full sm:h-[60vw] h-[70vw]">
        </section>

        <HomeSection4 />
      </div>
    </div>




</template>

<style>
.wrapper {
  background-color: black;
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
  height:100%;
  width: 100%;

 
  z-index: -1;
}


.bg-image-s2 {
  background-image: url("@/assets/images/virziens-piramida.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}


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