<script setup lang="ts">



import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import HomeBGVideo from './HomeBGVideo.vue'
import Hamburger from './Hamburger.vue';
import { useWindowSize } from '@/composables/window';
import { useRoute } from 'vue-router';
import whiteMarble from "@/assets/images/whitemarble.jpg";
const {smallWindow,mediumWindow,largeWindow} = useWindowSize();
const route =  useRoute();

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
    name: 'services',
    title: 'Pakalpojumi un cenas',
    link: "/services"
  },
   {
    name: 'team',
    title: 'Mākslinieciskā komanda',
    link: "/team"
  },
   {
    name: 'schedule',
    title: 'Grafiks',
    link: "/schedule"
  },

   {
    name: 'contacts',
    title: 'Kontakti',
    link: "/contacts"
  },
])


const menuClass = ref("-translate-x-[100%] hidden")
const menuOpen = ref(false)



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


onMounted(() => {
 
});
onBeforeUnmount(() => {

});


</script>
<template>
  <div v-if="!smallWindow" class="w-full  flex justify-end  right-4 z-[100]">
    <nav class="flex flex-wrap justify-end gap-3 pt-4 pr-8">
    
        <RouterLink v-for="item in navMenu" :to="item.link">
          <div class="menu-item">
            <span :class="{'underline': route.path == item.link && route.path != navMenu[0].link}">{{ item.title }}</span>
          </div>
        </RouterLink>
    </nav>
  </div>

  <div v-else class="z-[999] w-full  fixed  top-8 right-4">

    <Hamburger @open="openMenu" @close="closeMenu" class="fixed right-4 z-20" />
    <div :class="menuClass"
      class="flex flex-col  w-full h-screen pt-48 transition-transform duration-500  relative rounded-tr-md overflow-clip">
      <img :src="whiteMarble" class="-z-10 absolute top-0 right-0 w-full h-full" alt="">
      <nav  class=" flex flex-col pl-[20%]  gap-4  xs:text-2xl   z-20  ">
        <RouterLink v-for="(item,i) in navMenu" :to="item.link">
        <div  class="flex items-center w-full px-2 font-extrabold text-black text-3xl underline cursor-pointer ">
          <span >{{ item.title }}</span>
        </div>
        </RouterLink>
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

.menu-item-mobile {
  @apply w-full flex items-center font-extrabold text-white px-2 cursor-pointer underline
}
</style>