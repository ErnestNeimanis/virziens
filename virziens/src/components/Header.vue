<script setup lang="ts">
import { useWindowSize } from '@/composables/window';
import NavBar from "@/components/navbar/NavBar.vue"
import LogoSmall from './utils/LogoSmall.vue';

import { useInView, useNotInView } from '@/composables/in-view';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';

import {useScrollHandler} from "@/composables/scroll-handler"

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();
const smallLogoText = "text-4xl top-4";
const largeLogoText = "text-7xl top-7"

const header = ref<HTMLElement | null>(null);
const headerHeight = ref()
const logoSizeClass = ref<string>(largeLogoText)














</script>
<template>
  <div class="sticky bg  z-[100] w-full " :class="{ '-top-8 translate-y-8 mb-12': !smallWindow, 'mb-20': smallWindow, }">
    <div class="flex justify-end w-full pl-[33%]">
      <NavBar class="  " />
    </div>
  </div>


</template>

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}@/composables/scroll-handler