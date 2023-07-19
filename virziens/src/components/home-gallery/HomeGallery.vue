<script setup lang="ts">

import StartpageGalleryElement from "./StartpageGalleryElement.vue"

import {useInView} from '@/composables/in-view'

import dejoBerni1 from "@/assets/images/dejo-berni-1.jpeg"
import dejoPusaudzi from "@/assets/images/dejo-pusaudzi.jpeg"
import dejoJauniesi from "@/assets/images/dejo-jauniesi-3.jpeg"
import dejoPieaugusie from "@/assets/images/dejo-pieaugusie-downsize.jpg"
import { ref } from "vue"

const galleryElements = ref([
    {
        title:"bērni",
        image:dejoBerni1,
        initialHeadingTranslate: "transform: translateY(-100%)"
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
    <div class="w-screen  pt-8 ">
        <div class="flex flex-col gap-[10vh]  ">

            
            <StartpageGalleryElement v-for="element in  galleryElements" 
            :title="element.title" 
            :image="element.image" 
            :initialHeadingTranslate="element.initialHeadingTranslate" />

        </div>
    </div>
</template>


