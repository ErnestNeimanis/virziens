<script setup lang="ts">
import HomeBGVideo from "@/components/navbar/HomeBGVideo.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Hamburger from "@/components/navbar/Hamburger.vue";
import Header from "@/components/Header.vue";
import Logo from "@/components/navbar/Logo.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import HomeSection1 from "@/components/home/HomeSection1.vue";
import HomeSection2 from "@/components/home/HomeSection2.vue";
import HomeSection3 from "@/components/home/HomeSection3.vue";
import HomeSection4 from "@/components/home/HomeSection4.vue";
import HomeSection5 from "@/components/home/HomeSection5.vue";
import HomeSection6 from "@/components/home/HomeSection6.vue";
import BGE1 from "@/components/home/BGE1.vue";
import HTSection1 from "@/components/home/HTSection1.vue";
import axios from "axios";
import ContactCard from "@/components/ContactCard.vue";
import HomeGallery from "@/components/home-gallery/HomeGallery.vue";
import SocialIcons from "@/components/SocialIcons.vue";
import { useInView, useNotInView } from "@/composables/in-view";


const apiTest = ref("");
async function testApi() {
  const response = await axios.get(
    "https://test-api2.netlify.app/.netlify/functions/api/"
  );
  apiTest.value = response.data;
}
testApi();

const secondVidSection = ref<HTMLAreaElement | null>(null);
const secondVidSectionVisible = ref(false);

const wrapper = ref<HTMLAreaElement | null>(null);

const homeSection2 = ref<HTMLAreaElement | null>(null);
const bottomSection = ref<HTMLElement | null>(null);

const iconsVisible = ref<boolean>(false);

function showIcons() {
  iconsVisible.value = true;
}
function hideIcons() {
  iconsVisible.value = false;
}
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
window.addEventListener("scrol", () => {
  console.log("click");
});
onMounted(() => {
  wrapper.value?.addEventListener("scroll", handleScroll);
  if (bottomSection.value) {
    useInView(bottomSection.value, showIcons, 0.1);
    useNotInView(bottomSection.value, hideIcons, 0.1);
  }
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<template>

  <div class="fixed top-8 z-[100] w-full">
    <div class="flex justify-end w-full pl-[33%]">
      <NavBar class="  " />
    </div>
  </div>



      <SocialIcons :show="iconsVisible" class="fixed bottom-0 z-[100] w-full bg-black" />



  <div ref="wrapper" class="wrapper h-[100vh]">
    <div class="h-full w-full background">
      <HomeBGVideo class=" " />
      <div class="w-full lg:h-[19vw] md:h-[21vw] h-[21vw] min-h-[150px] bg-red-100 "></div>
      <BGE1 class="z-[-101]" />

      <div class="w-full lg:-translate-y-[26vw] md:-translate-y-[25vw]">
        <video class="w-full min-w-[420px] h-[80vh] object-cover " autoplay muted loop playsinline="true" style="transform: scale(1.2);">
          <source src="@/assets/videos/one-dancer.mp4" type="video/mp4" />
        </video>
        <div class="h-[80vh] bg-black"></div>
      </div>
    </div>

    <div class="foreground hidde">
      <HomeSection1 />
      <div ref="homeSection2">
        <HomeSection2 />
      </div>

      <HTSection1 />

      <div>
        <span class="ml-8 text-white uppercase text-[8vw] font-extrabold">Pie mums dejo:</span>
      </div>

      <HomeGallery />

      <div ref="bottomSection" class="xl:h-[250vw] lg:h-[170vw] md:h-[160vw] sm:h-[210vw] h-[250vw] relative">

      </div>
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

  background-size: cover;
  background-position: center;
}

.background {
  transform: translateZ(-10px) scale(2);
}

.background,
.foreground {
  position: absolute;
  height: 100%;
  width: 100%;

  z-index: -1;
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
