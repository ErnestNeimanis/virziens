<script setup lang="ts">
import testimg from "@/assets/images/textimgcode.jpg"
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



</script>
<template>
 
    <NavBar class=" fixed w-full top-8 right-4 z-[100]" />




    <div class="wrapper  h-[100vh]  ">
     
      <div class="h-full w-full background ">
<HomeBGVideo class=" " />
        <div class="w-full h-56 bg-red-100">

        </div>
        <BGE1 class="" />

          <div class="w-full ">
                <video class="w-full" autoplay muted loop>
                  <source src="@/assets/videos/one-dancer.mp4" type="video/mp4"/>
                </video>
              </div>

      </div>
      
      <div class="foreground ">
        <HomeSection1 />
        <HomeSection2 />
        <HTSection1 />

        <div ref="secondVidSection">
          <HomeSection3 />
        </div>
        <section class=" w-full h-[60vw]">
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
  scroll-behavior: smooth;
  perspective: 10px;
 
   
}

.background {
  transform: translateZ(-10px) scale(2)
}
.foreground{

}

.background,
.foreground {
  position: absolute;
  height:100%;
  width: 100%;
  object-fit: cover;
 
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