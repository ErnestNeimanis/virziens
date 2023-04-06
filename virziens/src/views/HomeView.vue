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

const translate2 = ref(0)


const secondVidSection = ref<HTMLAreaElement | null>(null);

const secondVidSectionVisible = ref(false)



    function handleScroll() {
      if(!secondVidSection.value) return
      const elementPosition = secondVidSection.value.getBoundingClientRect();

      if (
 
        elementPosition.bottom < window.innerHeight 
       
      ) {
        secondVidSectionVisible.value = true
      }else{
         secondVidSectionVisible.value = false
      }
    }

    onMounted(() => {
      console.log(secondVidSection.value)
      window.addEventListener('scroll', handleScroll);
    });

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


console.log(scrollPercent)

if(window.innerWidth < 800){
 translate.value = scrollPercent * 0.5
}else if(window.innerWidth < 600){
   translate.value = scrollPercent * 0.1
} else{
   translate.value = scrollPercent * 0.8
}
 

 

}


onMounted(() => {

  window.addEventListener('scroll', parallax);
})
onBeforeUnmount(() => {

})


</script>
<template>
  <main class="">

    <div :style="{ transform: `translateY(${-translate}%)` }"  class="parallax-duration  w-full fixed top-0 left-0 z-[-100]">
      
      <HomeBGVideo class="z-[-100] " />

      <div class=" ">
        <div class="pt-[400px] bg-rose-100 w-[170vw] pr-[20vw]">
          <div class="w-full h-[50px] bg-black">

          </div>
          <img src="@/assets/images/ba-stars.jpg" alt="" class="w-full">
       
        </div>
        <div class="relative h-[50vh] bg-black z-[-3000]">

        </div>
      </div>

   



    </div>

       <div v-if="secondVidSectionVisible"   class="relative h-[60vw] w-full z-[-100]">
        <div class="w-full fixed sm:bottom-0 ">
          <video class="w-full" autoplay muted loop>
            <source src="@/assets/videos/one-dancer.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>


    <NavBar class=" fixed w-full top-8 right-4 z-[100]" />



    <HomeSection1 />
    <HomeSection2 />
    <section class="w-full min-h-[60vw]">
      <div class=" h-full flex flex-col justify-center items-center md:gap-20">
       
       <p class="bg-white/30 px-9 xl:text-9xl md:text-7xl xs:text-4xl text-3xl text-black font-extrabold font-serif  ">Baiba Andersone jums iemācīs dejot kā neviens cits!</p>
       
       <div class="flex justify-end w-full px-20">
  
<button class="bg-black rounded-full hover:bg-black/30 mt-6  px-4 py-2 text-white uppercase font-extrabold">random poga</button>
      
 
       </div>
      
      </div>
    </section>
    <div ref="secondVidSection">
 <HomeSection3 />
    </div>
   

      <section   class=" w-full h-[60vw]">

        

    </section>

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