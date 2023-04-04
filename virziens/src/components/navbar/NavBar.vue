<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HomeBGVideo from './HomeBGVideo.vue'



</script>
<template>
    <div>
        <nav class="flex justify-end flex-wrap">
            <div v-for="n in 8" class="border px-6 font-extrabold text-white">
                <span>item {{ n }}</span>
            </div>
        </nav>
    </div>
   
</template>