<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref, type Ref } from 'vue';

import dejoBerni1 from "@/assets/images/Dejo berni 1.jpeg"
// import dejoBerni2 from "@/assets/images/Dejo berni 2.jpeg"
// import dejoBerni3 from "@/assets/images/Dejo berni 3.jpeg"

interface Image {
  path: string;
  ref:Ref <HTMLImageElement | null>
}

// const imgArray = ref<Image[]>([
//   {
//     path: dejoBerni1,
//     ref:  ref<HTMLImageElement | null>(null)
//   },
// ])



const translateX = ref(0);




const parentSection = ref(null)


const img1opacity = ref("opacity-1")

const imgOpacityArray =  ref<string[]>([])
const imgPathArray = ref<string[]>([
    "@/assets/images/brown-dancers-halfpyramid.jpg",
    "@/assets/images/virziens-piramida.jpg",
    "@/assets/images/balerina.jpg"
])
const indexGenerator = imgIndexes(imgPathArray.value.length)
function setOpacity(){
   if(img1opacity.value === "opacity-1") img1opacity.value = "opacity-0"
   else img1opacity.value = "opacity-1"

}

const intervalId = ref<any>(null)
const intervalStarted =  ref(false)


function startTimeout() { 
  
   if(!intervalStarted.value){
     intervalId.value= setInterval(setOpacity,3000)
     intervalStarted.value = true;
   }
  
}
function stopTimeout() {
    if(!intervalId.value) return
window.clearInterval(intervalId.value)
}

onMounted(() => {
    if(!parentSection.value) return
   
    onElementIntersection(parentSection.value,startTimeout,0.3)
    

  
})
onBeforeUnmount(()=>{
    stopTimeout()
})

function* imgIndexes(length:number = 0){
    let n = 0;
    while(n < length){
        yield n;
        if(n+1 === length) n = 0;
        else n++;
    }
}

function onElementIntersection(element: HTMLElement, 
myCallbackFunction: (entry: IntersectionObserverEntry) 
=> void, threshold: number | undefined = 0.1) {
  if (!threshold) threshold = 0.1

  const options = {
    rootMargin: '0px',
    threshold: threshold
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= options.threshold) {
        myCallbackFunction(entry);
      }
    });
  }, options);

  observer.observe(element);
}


function rotate(){
  
}


</script>
<template>
    <section ref="parentSection" class="relative w-full h-[50vw] overflow-clip ">


      <div class="flex min-w-full h-full overflow-hidden ">

        <div class="flex -translate-x-[400px]">

          <img :style="{ transform: `translateX(${translateX}px)` }"  class="img-switch-transition    object-cover " :src="dejoBerni1" alt=""/>
            <img :style="{ transform: `translateX(${translateX}px)` }"  class="img-switch-transition    object-cover " :src="dejoBerni1" alt=""/>

           <!-- <img :ref="`img${i}`" :style="{ transform: `translateX(${translateX}px)` }"   v-for="(img,i) in  imgArray" class="img-switch-transition    object-cover " :src="imgArray[i].path" alt=""/>
          <img :ref="`img${i}`" :style="{ transform: `translateX(${translateX}px)` }"   v-for="(img,i) in  imgArray" class="img-switch-transition    object-cover " :src="imgArray[i].path" alt=""/> -->
        </div>

      
      
      </div>
        
        
        <div class="absolute w-full h-full flex justify-center items-center z-[1] ">
            <div class="">
                <h1 class="text-[17vw] uppercase font-extrabold  text-white">Bērni
                </h1>
            </div>
        </div>


    </section>
</template>
<style>

.img-switch-transition{
    transition: opacity;
    transition-duration: 2.5s;
}
</style>