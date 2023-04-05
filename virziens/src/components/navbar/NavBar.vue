<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeBGVideo from './HomeBGVideo.vue'



</script>
<template>
    <div class=" flex justify-end ">
        <nav class="w-2/3 flex justify-center flex-wrap  gap-3">
            <div v-for="n in 8" class="  font-extrabold text-white px-2">
                <span>item {{ n }}</span>
            </div>
        </nav>
    </div>
   
</template>