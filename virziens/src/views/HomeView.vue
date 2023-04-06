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

const translate = ref(0)





// var screenHeight = window.innerHeight;

// window.addEventListener('resize', function() {
//   screenHeight = window.innerHeight;
//   console.log("Screen height changed to: " + screenHeight);
// });


// var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;
//   console.log(currentScrollPos)
//   if (prevScrollpos > currentScrollPos) {

//     //console.log("Scrolling up");
//   } else {

//     //console.log("Scrolling down");
//   }
//   prevScrollpos = currentScrollPos;
// }

function parallax() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = Math.floor((window.scrollY / scrollableHeight) * 100);

  

  translate.value = scrollPercent * 1.5

}


onMounted(() => {

  window.addEventListener('scroll', parallax);
})
onBeforeUnmount(() => {

})


</script>
<template>
  <main class="">

    <div :style="{ transform: `translateY(${-translate}vw)` }" class="parallax-duration  w-full fixed top-0 left-0 z-[-1]">
      <HomeBGVideo class=" " />
      <div class=" ">
 <div class="pt-[250px] bg-rose-100 w-[160vw] pr-[20vw]">
    <div class="w-full h-[100px] bg-black">

    </div>
        <img src="@/assets/images/ba-stars.jpg" alt="" class="w-full">
      </div>
      </div>
     


    </div>


    <NavBar class=" fixed w-full top-8 right-4 z-[100]" />



    <HomeSection1  />
    <HomeSection2 />
    <section class="w-full h-[60vw]">

    </section>
    <HomeSection3 />
    <HomeSection4 />






  </main>
</template>

<style>
.bg-image-s2 {
  background-image: url("@/assets/images/virziens-piramida.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}


.parallax-duration {
  transition-duration: 100ms;
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