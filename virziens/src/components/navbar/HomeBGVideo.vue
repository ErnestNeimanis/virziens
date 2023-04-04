

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const videoTranslate = ref("translate-x-[100%]");

const videoTranslateClass =  computed (() => {
    return videoTranslate.value;
})

function move(){
    setTimeout(() => {
videoTranslate.value = ""
    },3000)
    
}
move()

const videoRef = ref(null);

</script>

<template>
    <div class=" w-full h-[60vw] min-h-[300px] max-h-[700px]   overflow-hidden">
        <div :class="videoTranslateClass" class=" transition-transform duration-1000">
 <video ref="videoRef" autoplay muted loop class="absolute w-full min-w-[500px] min-h-full  object-cover z-0">
            <source src="@/assets/videos/plainfly.mp4" type="video/mp4">
        </video>
        </div>
       
        <!-- <div class="flex justify-center items-center w-full h-full bg-black  " style="mix-blend-mode: multiply;">
            <span class="text-[20vw] text-white  " style="font-family: 'Christmas Wish Calligraphy', sans-serif;">Virziens
            </span>
        </div> -->
    </div>


    <!--  -->
</template>

<style></style>