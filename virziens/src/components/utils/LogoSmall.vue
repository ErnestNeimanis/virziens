<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import {useScrollHandler} from "@/composables/scroll-handler"
import { useWindowSize } from '@/composables/window';
defineProps<{
  size?:string,
}>()

const scrolling = ref<boolean>(false);
const scrollHandler =  useScrollHandler();
const {smallWindow,mediumWindow,largeWindow} = useWindowSize();

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
  
  <div class="fixed  left-6 transition-opacity duration-1000 h-[38px]  z-[999] bg-black rounded  text-center" 
  
  :class="{'opacity-0':scrolling,
          'top-5 h-[70px] w-[120px] ':!smallWindow,
          'top-8':smallWindow,
          

}">
    <div class="-translate-y-[9px] px-4">
         <span class="christmas   text-white text-center " 
         :class="{
            ' text-[60px] ':!smallWindow,
          'text-[38px] w-[100px]':smallWindow,
          
         }"
         >Virziens</span>
    </div>
   
  </div>


  </div>

</template>

<style>

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}
</style>
