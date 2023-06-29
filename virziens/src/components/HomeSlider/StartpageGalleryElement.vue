<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { createWebHistory } from 'vue-router';
import {useInView} from '@/composables/in-view'

const props = defineProps<
{
    title:string,
    image:string,
}
>()

const title = computed(() => props.title ?? "")
const image = computed(() => props.image ?? "")

const contentContainer = ref<HTMLElement | null>(null);



function animate(){
    console.log('visible')
}

onMounted(() =>{
    if(contentContainer.value){
        useInView(contentContainer.value,animate)
    }
})

</script>
<template>
 <div class="flex justify-center  w-full  ">
                <div ref="contentContainer" class="flex flex-col gap-4 w-10/12 my-12 ">
                    <div class="w-full flex justify-center ">
                        <h2 class="text-[15vw] font-extrabold text-white uppercase">{{ props.title }}</h2>
                    </div>
                    <div class="w-full border-4 rounded-3xl overflow-clip">
                        <img :src="props.image" class="  object-cover " alt="">
                    </div>
                </div>
            </div>
</template>