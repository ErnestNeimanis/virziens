

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Logo from './Logo.vue';

const videoTranslate = ref("-translate-x-[100%]");
const videoVisibility = ref("hidden")


const blackBgTranslate = ref("")
const blackBg = ref("true");

const logoMainTextSize = ref("logo-size")

const logoDotSize = ref("dot-size")

const logoTextBg = ref("bg-white")

const logoBottomVisibility = ref("")

const logoBottomTextOpacity = ref("opacity-0")
const lineOpacity = ref("opacity-0")

const logoLeftLineTranslate = ref("-translate-x-[40px]")
const logoRightLineTranslate = ref("translate-x-[40px] ")

const logoBottomText = ref(['d', 'e', 'j', 'u', ' ', 's', 't', 'u', 'd', 'i', 'j', 'a']);

const lbtOpacityArray = ref<string[]>([]);

function setlbtOpacity() {
    for (let i = 0; i < logoBottomText.value.length; i++) {
        lbtOpacityArray.value[i] = "opacity-0"
    }

}
setlbtOpacity()



function shuffleArray(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getUniqueRandomIntegers(n) {
    const numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(i);
    }

    for (let i = 0; i < n; i++) {
        const j = Math.floor(Math.random() * (n - i)) + i;
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    return numbers;
}





function move() {


}
//move()


async function removelbtOpacity() {
    const randInts = getUniqueRandomIntegers(logoBottomText.value.length)
    for (let i = 0; i < logoBottomText.value.length; i++) {
        await delay(100);
        lbtOpacityArray.value[randInts[i]] = "opacity-1"
    }
}

function blackBgIn() {
    blackBgTranslate.value = ""
}
function blackBgOut() {
    blackBgTranslate.value = "translate-x-[100%]";
}

function videoIn() {

    videoVisibility.value = ""
    setTimeout(() => {
        videoTranslate.value = ""
    }, 1)
}
function videoOut() {
    videoTranslate.value = "translate-x-[100%]";
}

function logoBottomLinesIn() {

    logoLeftLineTranslate.value = "";
    logoRightLineTranslate.value = "";

}
function logoBottomTextIn() {
    logoBottomTextOpacity.value = "opacity-100"
}

function removeLineOpacity() {
    lineOpacity.value = "opacity-1"
}

function bottomLogoOut() {
    logoBottomVisibility.value = "hidden"
}

 function growLogo() {
  logoMainTextSize.value = "logo-grow"
  
}
function growDot(){
logoDotSize.value =  "dot-grow"
}


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startAnimations() {
    await delay(1000);
    blackBgOut();
    await delay(1000);

    logoBottomTextIn();
    await removelbtOpacity();
    removeLineOpacity();
    logoBottomLinesIn();
    await delay(100)
    videoIn(); 
    await delay(3000);
    bottomLogoOut();
    growLogo();
    await delay(1000);
    growDot()


}



startAnimations()

const videoRef = ref(null);

</script>

<template>
    <div class=" w-full h-[60vw] min-h-[300px] max-h-[700px]   overflow-hidden">

        <Logo class="fixed  left-5 -translate-y-[10px] " />

        <div :class="[blackBgTranslate,]"
            class="absolute top-0 left-0 w-full  h-full bg-black transition-transform duration-1000 z-[-4]">

        </div>

        <div :class="[videoTranslate, videoVisibility]" class="relative transition-transform duration-1000">
            <video ref="videoRef" autoplay muted loop
                class="absolute w-full min-w-[500px] min-h-full  object-cover z-[-5] ">
                <source src="@/assets/videos/virziensdejo.mp4" type="video/mp4">
            </video>
        </div>

        <div
            class="aboslute top-0 left-0 flex justify-center flex-col items-center w-full h-full  bg-black transparent-mode ">
            <div class=" ">
                <span :class="logoMainTextSize" class=" text-white christmas " style="">Virziens
                </span>
            </div>

            <div :class="logoDotSize"  class="absolute bg-white rounded-full translate-x-[90px] translate-y-[4px]">
                
            </div>

        </div>

        <div :class="logoBottomVisibility"
            class=" absolute top-0 left-0 w-full h-full flex justify-center items-center border  ">
            <div class="  flex justify-center items-center translate-y-[70px] w-[290px] ">
                <div :class="[logoLeftLineTranslate, lineOpacity]"
                    class="border w-[70px] h-0 transition-transform duration-1000 ">

                </div>
                <div class=" flex mx-3 not-transparent bg-black" style="background-color: black; isolation: isolate;">
                    <span v-for="(char, index) in logoBottomText" :key="char" :class="[lbtOpacityArray[index]]"
                        class="uppercase text-white bg-black text-[20px] transition-all duration-1000 "> {{ char === ' ' ?
                            '\u00A0' : char }}</span>

                </div>
                <div :class="[logoRightLineTranslate, lineOpacity]"
                    class=" w-[70px] border  h-0 transition-transform duration-1000">

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

.not-transparent {
    isolation: isolate;
}

.christmas {
    font-family: 'Christmas Wish Calligraphy', sans-serif;
}

.logo-size {
    font-size: 180px;
}

.logo-grow {
    animation-name: grow-logo;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    
}

@keyframes grow-logo {
    from {
        font-size: 180px;
    }

    to {
        font-size: 500px;
    }

    
}


.dot-size {
    width: 0px;
    height: 0px;    
}
.dot-grow {
animation-name: grow-dot;
    animation-duration: 5000ms;
    animation-fill-mode: forwards;
}

@keyframes grow-dot{
    from{
         width: 0px;
        height: 0px;
    }
    to{
        width: 3000px;
        height: 3000px;
    }
}

</style>