<script setup lang="ts">
import HomeSection3 from "@/components/home/HomeSection3.vue"
import HomeSection4 from "@/components/home/HomeSection4.vue"
import HomeSection5 from "@/components/home/HomeSection5.vue"
import HomeSection6 from "@/components/home/HomeSection6.vue"

import dejoBerni1 from "@/assets/images/dejo-berni-1.jpeg"
import dejoPusaudzi from "@/assets/images/dejo-pusaudzi.jpeg"
import dejoJauniesi from "@/assets/images/dejo-jauniesi-3.jpeg"
import dejoPieaugusie from "@/assets/images/dejo-pieaugusie.jpg"

</script>
<template>
<div class="h-[50vw] w-screen bg-red-800 relative">
  <div class="flex h-full bg-blue-700 -translate-x-[000vw]">

    <img :src="dejoBerni1" class="w-screen  h-full object-cover flex-none" alt="">
    <img :src="dejoPusaudzi" class="w-screen  h-full object-cover flex-none" alt="">
    <img :src="dejoJauniesi" class=" w-screen h-full  object-cover flex-none" alt="">
    <img :src="dejoPieaugusie" class=" w-screen  h-full object-cover flex-none" alt=""> 


    <!-- <div class="w-screen h-full bg-yellow-300 flex-none">

    </div>
    <div class="w-screen h-full bg-yellow-500 flex-none">

    </div>
    <div class="w-screen h-full bg-yellow-700 flex-none">
   
    </div> -->
  </div>
</div>

</template>


 <!-- <img :src="dejoBerni1" class="  object-cover" alt="">
    <img :src="dejoPusaudzi" class=" object-cover" alt="">
    <img :src="dejoJauniesi" class=" object-cover" alt="">
    <img :src="dejoPieaugusie" class=" object-cover" alt=""> -->