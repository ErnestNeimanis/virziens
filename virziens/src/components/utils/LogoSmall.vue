<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import {useScrollHandler} from "@/composables/scroll-handler"
defineProps<{
  size?:string,
}>()

const scrolling = ref<boolean>(false);
const scrollHandler =  useScrollHandler();

onMounted(() =>
  scrollHandler.create({
    onStart: () => scrolling.value = true,
    onStop: () => scrolling.value = false,
    delay: 300
  })
)
onUnmounted(() => scrollHandler.remove());

</script>
<template>

 <div class="  "  >
  
  <div class="fixed top-8 left-6 transition-opacity duration-1000 h-[43px]  z-[999] bg-black rounded w-[100px] text-center" :class="{'opacity-0':scrolling}">
      <span class="christmas text-5xl  text-white text-center ">Virziens</span>
  </div>


  </div>

</template>

<style>

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}
</style>
