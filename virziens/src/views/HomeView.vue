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

const translate = ref(0)

const translate2 = ref(0)


const secondVidSection = ref<HTMLAreaElement | null>(null);

const secondVidSectionVisible = ref(false)



function handleScroll() {
  if (!secondVidSection.value) return
  const elementPosition = secondVidSection.value.getBoundingClientRect();

  if (

    elementPosition.bottom < window.innerHeight

  ) {
    secondVidSectionVisible.value = true
  } else {
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


  //console.log(scrollPercent)




  if (window.innerWidth < 800) {
    translate.value = scrollPercent * 0.5
  } else if (window.innerWidth < 600) {
    translate.value = scrollPercent * 0.1
  } else {
    translate.value = scrollPercent * 0.8
  }


}


onMounted(() => {

  window.addEventListener('scroll', parallax);
})
onBeforeUnmount(() => {

})

//:style="{ transform: `translateY(${-translate}%)` }"
</script>
<template>
  <main class="">
    <NavBar class=" fixed w-full top-8 right-4 z-[100]" />
    <!-- <div v-if="secondVidSectionVisible"   class="relative h-[60vw] w-full z-[-100]">
              <div class="w-full fixed sm:bottom-0 bottom-12 ">
                <video class="w-full" autoplay muted loop>
                  <source src="@/assets/videos/one-dancer.mp4" type="video/mp4"/>
                </video>
              </div>
            </div> -->


    <div class="wrapper  h-[100vh] overflow-y-auto  ">
     
      <div class="h-full w-full background ">
<HomeBGVideo class=" " />
        <div class="w-full h-56 bg-red-100">

        </div>
        <BGE1 class="" />
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



  </main>
</template>

<style>
.wrapper {
  height: 100vh;
  overflow-y: auto;
  perspective: 10px;
}

.background {
  transform: translateZ(-10px) scale(2)
}


.background,
.foreground {
  position: absolute;
  height:100%;
 
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