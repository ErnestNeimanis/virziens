<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { createWebHistory } from 'vue-router';
import {useInView} from '@/composables/in-view'

const props = defineProps<
{
    title:string,
    image:string,
    animationNumber?:number | undefined,
    initialHeadingTranslate?:string

}
>()

const title = computed(() => props.title ?? "")
const image = computed(() => props.image ?? "")

const contentContainer = ref<HTMLElement | null>(null);
const imageContainer = ref<HTMLElement | null>(null);
const headingContainer = ref<HTMLElement | null>(null);

const imageVisible = ref<boolean>(false)

const headingVisible = ref<boolean>(false)

const textVisible = ref<boolean>(false)



const randomNumber = rand(0,3)

const shadowOn = ref<boolean>(false)

function rand(min: number, max: number): number {
  const inclusiveMax = max + 1;
  return Math.floor(Math.random() * (inclusiveMax - min)) + min;
}




const t = computed(() => {
    
const translateStyles = ["transform: translateX(100%)","transform: translateX(-100%)","transform: translateY(100%)","transform: translateY(-100%)"]
  if(!headingVisible.value) {
    if(props.initialHeadingTranslate){
        return props.initialHeadingTranslate
    }else{
           return translateStyles[randomNumber]
    }
 
}
  else return "transform: translateX(0%)"
  
})


function animateText():void{
    textVisible.value = true;
}

function animateHeading():void{
    headingVisible.value = true;
}

function animateImage():void{
    imageVisible.value = true;
    setTimeout(() => {shadowOn.value=true},1800)
}


onMounted(() =>{
    if(headingContainer.value){
        useInView(headingContainer.value,animateHeading)
    }
 
    if(contentContainer.value){
        useInView(contentContainer.value,animateImage)
    }
    
    
})





</script>
<template>
 <div class="flex justify-center  w-full  ">
                <div ref="contentContainer" class="flex flex-col gap-4 w-10/12  ">
                    <div ref="headingContainer" class="w-full flex justify-center overflow-hidden  ">
                        <h2 class="text-[15vw] font-extrabold text-white  transition-all duration-1000 uppercase ease-in-out" :style="t" >{{ props.title }}</h2>
                    </div>
                    <div ref="imageContainer" class="w-full rounded-3xl max-h-[80vh] overflow-clip image-opacity " :class="{'initial-state-img':!imageVisible,'shadow':shadowOn}" >
                        <img :src="props.image" class="  object-cover " alt="">
                    </div>
                </div>
            </div>
</template>

<style scoped>
.shadow {
    box-shadow: 1px 1px 5px 5px rgba(175, 9, 197, 0.37);
}

.translate{
    transform: translate();
}

.initial-state-img{
    opacity: 0;
    transform: translateY(20vh);
}
.image-opacity{
    transition: opacity 1600ms ease-in, transform 1300ms ease-in-out, box-shadow 500ms;
}

</style>