

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const videoTranslate = ref("-translate-x-[100%]");
const videoVisibility = ref("hidden")


const blackBgTranslate = ref("")
const blackBg = ref("true");

const logoTextBg = ref("bg-white")

const logoBottomWidth = ("w-[35%]")



function move() {
    
    videoVisibility.value = ""
    setTimeout(() => {
        videoTranslate.value = ""
    }, 5000)

}
//move()

function blackBgIn() {
    blackBgTranslate.value = ""
}
function blackBgOut() {
    blackBgTranslate.value = "translate-x-[100%]";
}

function videoIn() {
    videoTranslate.value = ""
}
function videoOut() {
    videoTranslate.value = "translate-x-[100%]";
}

function startAnimations() {
    setTimeout(blackBgOut, 1000)
}

startAnimations()

const videoRef = ref(null);

</script>

<template>
    <div class="relative w-full h-[60vw] min-h-[300px] max-h-[700px]   overflow-hidden">

        <div :class="[blackBgTranslate,]"
            class="absolute top-0 left-0 w-full  h-full bg-black transition-transform duration-1000 z-[-2]">

        </div>

        <div :class="[videoTranslate,videoVisibility]" class="relative transition-transform duration-1000">
            <video ref="videoRef" autoplay muted loop
                class="absolute w-full min-w-[500px] min-h-full  object-cover z-[-3] ">
                <source src="@/assets/videos/plainfly.mp4" type="video/mp4">
            </video>
        </div>

        <div class="aboslute top-0 left-0 flex justify-center flex-col items-center w-full h-full  bg-black transparent-mode z-[0]">
            <div class=" ">
                <span class="text-[200px]   text-white christmas " style="">Virziens
                </span>
            </div>
            <div :class="logoBottomWidth" class=" flex justify-center items-center -translate-y-[60px] w-[250px] ">
                <div class="border w-[30px] h-0  " >
                   
                </div>
                <div class=" ">
                     <span class="text-white uppercase mx-2 text-[20px]">  deju studija  </span>
                </div>
                <div  class=" w-[30px] border  h-0 ">
                    
                </div>
               
            </div>

        </div>
    </div>


    <!--  -->
</template>

<style>
.transparent-mode {
    mix-blend-mode: multiply;
}

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}
</style>