<script setup lang="ts">



import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import HomeBGVideo from './HomeBGVideo.vue'
import Hamburger from './Hamburger.vue';

interface NavItem {
  name?: string,
  title: string,
  link: string,
}

const navMenu = ref<NavItem[]>([
  {
    name: 'home',
    title: 'Sākums',
    link: "/"
  },
   {
    name: 'about',
    title: 'Par mums',
    link: "/"
  },
   {
    name: 'services',
    title: 'Pakalpojumi',
    link: "/"
  },
   {
    name: 'schedule',
    title: 'Grafiks',
    link: "/schedule"
  },
   {
    name: 'gallery',
    title: 'Galerija',
    link: "/"
  },
   {
    name: 'contact-us',
    title: 'Kontakti',
    link: "/"
  },
])


const menuClass = ref("-translate-x-[100%] hidden")
const menuOpen = ref(false)

const screenW = ref(window.innerWidth);
const mobileWidth = 640;

function openMenu() {
  menuOpen.value = true;
  menuClass.value = "-translate-x-[100%]"
  setTimeout(() => {
    if (menuOpen.value)
      menuClass.value = ""
  }, 1)
}

function closeMenu() {
  menuOpen.value = false;
  menuClass.value = "-translate-x-[100%]"
  setTimeout(() => {
    if (!menuOpen.value)
      menuClass.value = "hidden"
  }, 300)
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
    <nav :="$attrs" class="w-2/3 flex justify-end flex-wrap  gap-3 pr-8 pt-4">
    
        <RouterLink v-for="item in navMenu" :to="item.link">
          <div class="menu-item">
            <span>{{ item.title }}</span>
          </div>
        </RouterLink>
    
    </nav>
  </div>

  <div v-else class="z-[999]  ">

    <Hamburger @open="openMenu" @close="closeMenu" class="fixed right-4" />
    <div :class="menuClass"
      class=" transition-transform duration-500 rounded-tr-md flex flex-col w-fulll bg-black h-screen pt-6">
      <nav class=" flex flex-col pl-[30%]  gap-3  xs:text-2xl  ">
        <div class="w-full flex items-center   font-extrabold text-white px-2 cursor-pointer underline">
          <span>SĀKUMS</span>
        </div>
        <div class="w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
          <span>PAR MUMS</span>
        </div>
        <div class="w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
          <span>PAKALPOJUMI</span>
        </div>
        <div class="w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
          <span>GRAFIKS</span>
        </div>
        <div class=" w-full flex items-center  font-extrabold text-white px-2 cursor-pointer underline">
          <span>FOTO</span>
        </div>
        <div class="w-full flex items-center   font-extrabold text-white px-2 cursor-pointer underline">
          <span>VIDEO</span>
        </div>
        <div class="w-full flex items-center font-extrabold text-white px-2 cursor-pointer underline">
          <span>KONTAKTI</span>
        </div>


      </nav>
    </div>

  </div>
</template>

<style>
.button-hover-duration {
  transition-duration: 300ms;
}

.menu-item {
  @apply bg-black hover:bg-black/30 transition-colors button-hover-duration  rounded-sm font-extrabold text-xl text-white px-2 cursor-pointer hover:underline
}
</style>