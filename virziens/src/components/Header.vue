<script setup lang="ts">
import { useWindowSize } from '@/composables/window';
import NavBar from "@/components/navbar/NavBar.vue"
const  {smallWindow,mediumWindow,largeWindow} = useWindowSize();

</script>
<template>
<div class="sticky pt-8   min-h-[8vh] z-[100] w-full" :class="{'-top-10 pb-3':!smallWindow,'top-0 pb-12':smallWindow}">
  <div class="flex justify-end w-full pl-[33%] ">
    <NavBar/>
  </div>  
  <div>

  </div>
</div>

</template>