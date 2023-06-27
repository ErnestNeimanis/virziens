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
      <div class="translate-x-[5vw]">
        <span class="christmas text-[32vw]  text-center ">Virziens</span>
      </div>
      <div class="flex justify-center items-center -translate-y-[14.5vw]">
        <div class="border-[0.148vw] border-black w-[16vw] h-0 translate-y-[1vw] "></div>
        <span class="text-[4.3vw] mx-[1.9vw] translate-y-[0.5vw]">DEJU STUDIJA</span>
        <div class="border-[0.148vw] border-black w-[16vw] h-0 translate-y-[1vw]"></div>
      </div>
    </div>
  </div>

</template>

<style>

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}
</style>
