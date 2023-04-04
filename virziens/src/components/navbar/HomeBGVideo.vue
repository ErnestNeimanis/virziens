

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const videoTranslate = ref("-translate-x-[100%]");
const videoVisibility = ref("hidden")


const blackBgTranslate = ref("")
const blackBg = ref("true");

const logoTextBg = ref("bg-white")

const logoBottomVisibility = ("hidden")

const logoBottomTextOpacity = ref("opacity-0")
const lineOpacity = ref("opacity-0")

const logoLeftLineTranslate = ref("-translate-x-[40px]")
const logoRightLineTranslate = ref("translate-x-[40px] ")

const logoBottomText = ref(['d','e','j','u',' ','s','t','u','d','i','j','a']);

const lbtOpacityArray = ref<string[]>([]);

function setlbtOpacity(){
    for(let i = 0; i < logoBottomText.value.length; i++){
        lbtOpacityArray.value[i] = "opacity-0"
    }
   
}
setlbtOpacity()



function shuffleArray(arr:any[]) {
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


async function removelbtOpacity(){
    const randInts =  getUniqueRandomIntegers(logoBottomText.value.length)
     for(let i = 0; i < logoBottomText.value.length; i++){
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
    }, 1000)
}
function videoOut() {
    videoTranslate.value = "translate-x-[100%]";
}

function logoBottomLinesIn() {

    logoLeftLineTranslate.value= "";
    logoRightLineTranslate.value = "";

}
function logoBottomTextIn() {
    logoBottomTextOpacity.value = "opacity-100"
}

function removeLineOpacity() {
    lineOpacity.value = "opacity-1"
}

function delay(ms:number) {
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
  delay(100)
  videoIn();
  
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
                <span class="text-[180px]   text-white christmas " style="">Virziens
                </span>
            </div>
            <div  class=" flex justify-center items-center -translate-y-[60px] w-[290px] " style=" mix-blend-mode: normal;
            ">
                <div :class="[logoLeftLineTranslate,lineOpacity]"  class="border w-[70px] h-0 transition-transform duration-1000 " >
                   
                </div>
                <div  class=" flex mx-3  ">
                     <span v-for="(char,index) in logoBottomText" :key="char"  :class="[lbtOpacityArray[index]]" class="uppercase text-white  text-[20px] transition-all duration-1000 ">     {{ char === ' ' ? '\u00A0' : char }}</span>
                   
                </div>
                <div :class="[logoRightLineTranslate,lineOpacity]" class=" w-[70px] border  h-0 transition-transform duration-1000">
                    
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