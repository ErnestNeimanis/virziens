<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<
{
    show?:boolean
}
>()
const show = computed(() => props.show ?? false)
</script>
<template>
 <div class="flex justify-center gap-8 transition-all duration-1000  rounded-full py-2 pointer-events-none" :class="{'opacity-0 translate-y-24':!show}">
                <div class="pointer-events-auto"> <a href="https://www.facebook.com/dejustudijavirziens?locale=de_DE"> <i
                      class="bi bi-facebook text-white hover:text-gray-400 text-5xl"></i> </a>
                </div>
                <div class="pointer-events-auto"> <a href="https://www.instagram.com/dejustudijavirziens/?hl=de"> <i
                      class="bi bi-instagram text-white text-5xl hover:text-gray-400"></i> </a>
                </div>
              </div>
</template>