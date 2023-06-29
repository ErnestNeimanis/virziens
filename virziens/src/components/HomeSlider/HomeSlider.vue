<script setup lang="ts">
import HomeSection3 from "@/components/home/HomeSection3.vue"
import HomeSection4 from "@/components/home/HomeSection4.vue"
import HomeSection5 from "@/components/home/HomeSection5.vue"
import HomeSection6 from "@/components/home/HomeSection6.vue"

import StartpageGalleryElement from "./StartpageGalleryElement.vue"

import {useInView} from '@/composables/in-view'

import dejoBerni1 from "@/assets/images/dejo-berni-1.jpeg"
import dejoPusaudzi from "@/assets/images/dejo-pusaudzi.jpeg"
import dejoJauniesi from "@/assets/images/dejo-jauniesi-3.jpeg"
import dejoPieaugusie from "@/assets/images/dejo-pieaugusie.jpg"
import { ref } from "vue"

const galleryElements = ref([
    {
        title:"bērni",
        image:dejoBerni1,
    },
    {
        title:"pusaudži",
        image:dejoPusaudzi,
    },
    {
        title:"jaunieši",
        image:dejoJauniesi,
    },
    {
        title:"pieagušie",
        image:dejoPieaugusie,
    },

])

</script>
<template>
    <div class="w-screen bg-red-800 pt-8 ">
        <div class="  bg-blue-700 ">

            
            <StartpageGalleryElement v-for="element in  galleryElements" :title="element.title" :image="element.image" />

        </div>
    </div>
</template>


 <!-- <img :src="dejoBerni1" class="  object-cover" alt="">
    <img :src="dejoPusaudzi" class=" object-cover" alt="">
    <img :src="dejoJauniesi" class=" object-cover" alt="">
    <img :src="dejoPieaugusie" class=" object-cover" alt=""> -->