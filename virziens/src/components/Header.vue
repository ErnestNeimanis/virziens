<script setup lang="ts">
import { useWindowSize } from '@/composables/window';
import NavBar from "@/components/navbar/NavBar.vue"
import LogoSmall from './utils/LogoSmall.vue';

import { useInView, useNotInView } from '@/composables/in-view';
import { onBeforeMount, onMounted, ref } from 'vue';


const { smallWindow, mediumWindow, largeWindow } = useWindowSize();
const smallLogoText = "text-4xl top-4";
const largeLogoText = "text-7xl top-7"

const header = ref<HTMLElement | null>(null);
const headerHeight = ref()
const logoSizeClass = ref<string>(largeLogoText)


onMounted(() => {
  if (header.value) {

    headerHeight.value = header.value.clientHeight;
    resize();
    useInView(header.value, log, 1);
    useNotInView(header.value, logNotInView, 1)
    console.log(header.value?.clientHeight)
    window.addEventListener("resize", () => {
      if (!header.value) return
      headerHeight.value = header.value.clientHeight;
      resize()
    })
  }
})

function log() {
  if (headerHeight.value == 96) {
    return
  } else if (headerHeight.value == 104) {
    logoSizeClass.value = smallLogoText;
  } else if (headerHeight.value == 144) {
    logoSizeClass.value = largeLogoText
  }
  logoSizeClass.value = largeLogoText
}
function logNotInView() {
  console.log("not in view")
  logoSizeClass.value = smallLogoText
}

function resize() {



  if (headerHeight.value == 96) {
    logoSizeClass.value = `-translate-y-5 ${largeLogoText} `
    console.log("resizing")
  } else if (headerHeight.value == 104) {
    logoSizeClass.value = `-translate-y-10 text-6xl `
  } else if (headerHeight.value == 144) {
    logoSizeClass.value = `-translate-y-10 text-8xl `
  }
}


</script>
<template>
  <div ref="header" class="flex sticky  pt-12   min-h-[8vh] z-[100] w-full overflow-hidden"
    :class="{ '-top-10 pb-3': !smallWindow, 'top-0 pb-12': smallWindow }">


    <LogoSmall class=" fixed  left-8  " :class="logoSizeClass" />


    <div class="flex justify-end w-full pl-[33%] relative bord">

      <NavBar />
    </div>
    <div>

    </div>
  </div>
</template>