

<script setup lang="ts">
import { onMounted, ref } from 'vue';


const videoRef = ref(null);

onMounted(() => {


})

</script>

<template>
    <div class=" w-full h-[60vw] min-h-[300px] max-h-[700px]   overflow-hidden">
        <div class="translate-x-">
 <video ref="videoRef" autoplay muted loop class="absolute w-full min-w-[500px] min-h-full  object-cover z-0">
            <source src="@/assets/videos/plainfly.mp4" type="video/mp4">
        </video>
        </div>
       
        <div class="flex justify-center items-center w-full h-full bg-black  " style="mix-blend-mode: multiply;">
            <span class="text-[20vw] text-white  " style="font-family: 'Christmas Wish Calligraphy', sans-serif;">Virziens
            </span>
        </div>
    </div>


    <!--  -->
</template>

<style></style>