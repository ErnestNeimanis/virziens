<script setup lang="ts">
import { onMounted, ref } from 'vue';


const mainLogoShow = ref<boolean>(false)

function toggleLogo(){
    setTimeout(() => {
        mainLogoShow.value= true;
    },5000)
}

onMounted(() => {
  toggleLogo();
})

</script>


<template>
  <div  >
    <div class="flex flex-col  " :class="{'hidden':!mainLogoShow}">
      <div class="translate-x-[15px]">
        <span class="christmas text-[40vw] text-center ">Virziens</span>
      </div>
      <div class="flex justify-center items-center -translate-y-[18vw]">
        <div class="border-2 border-black w-[20vw] h-0 translate-y-[0.5vw] "></div>
        <span class="text-[4.3vw] mx-[1.3vw]">DEJU STUDIJA</span>
        <div class="border-2 border-black w-[20vw] h-0 translate-y-[0.5vw]"></div>
      </div>
    </div>
  </div>

</template>

<style>

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}
</style>
