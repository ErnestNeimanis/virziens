<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import HomeBGVideo from './HomeBGVideo.vue'
import Hamburger from './Hamburger.vue';

const menuClass = ref("-translate-x-[100%] hidden")
const menuOpen =  ref(false)

const screenW = ref(window.innerWidth);
const mobileWidth = 640;

function openMenu(){
  menuOpen.value = true;
  menuClass.value = "-translate-x-[100%]"
  setTimeout(()=>{
    if(menuOpen.value)
     menuClass.value = ""
  },1)
}

function closeMenu(){
  menuOpen.value =  false;
  menuClass.value = "-translate-x-[100%]"
  setTimeout(()=>{
    if(!menuOpen.value)
     menuClass.value = "hidden"
  },300)
}

const mobileView = computed(() => {
  return screenW.value <= mobileWidth;
});
onMounted(() => {
  window.addEventListener("resize", updateResize);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateResize);
});
function updateResize() {
  screenW.value = window.innerWidth;
}

</script>
<template>

    <div v-if="!mobileView" class=" flex justify-end ">
        <nav class="w-2/3 flex justify-end flex-wrap  gap-3 ">
            <div  class="bg-black hover:bg-black/30 transition-colors duration-500  rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>SĀKUMS</span>
            </div>
              <div  class="bg-black hover:bg-black/30 transition-colors duration-500  rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>PAR MUMS</span>
            </div>
              <div  class="bg-black hover:bg-black/30 transition-colors duration-500 rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>PAKALPOJUMI</span>
            </div>
              <div  class="bg-black hover:bg-black/30 transition-colors duration-500 rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>GRAFIKS</span>
            </div>
              <div  class="bg-black hover:bg-black/30 transition-colors duration-500 rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>FOTO</span>
            </div>
              <div  class="bg-black hover:bg-black/30 transition-colors duration-500 rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>VIDEO</span>
            </div>
              <div  class="bg-black hover:bg-black/30 transition-colors duration-500 rounded-sm font-extrabold text-white px-2 cursor-pointer hover:underline">
                <span>KONTAKTI</span>
            </div>
        </nav>
    </div>
   
      <div v-else  class="z-[999]  ">

  <Hamburger @open="openMenu" @close="closeMenu" class="fixed right-4"  />
<div :class="menuClass"  class=" transition-transform duration-500 rounded-tr-md flex flex-col w-9/10 bg-black h-screen pt-6">
        <nav class=" flex flex-col pl-[30%]  gap-3  xs:text-2xl">
            <div  class="w-full flex items-center   font-extrabold text-white px-2 cursor-pointer underline">
                <span>SĀKUMS</span>
            </div>
              <div  class="w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
                <span>PAR MUMS</span>
            </div>
              <div  class="w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
                <span>PAKALPOJUMI</span>
            </div>
              <div  class="w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
                <span>GRAFIKS</span>
            </div>
              <div  class=" w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
                <span>FOTO</span>
            </div>
              <div  class="w-full flex items-center   font-extrabold text-white px-2 cursor-pointer underline">
                <span>VIDEO</span>
            </div>
              <div  class="w-full flex items-center font-extrabold text-white px-2 cursor-pointer underline">
                <span>KONTAKTI</span>
            </div>
            
          
        </nav>
    </div>

      </div>

    

   
</template>