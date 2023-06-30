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
 <div class="flex justify-center gap-8 transition-all duration-500  rounded-full py-2 " :class="{'opacity-0 translate-y-36':!show}">
                <div> <a href="https://www.facebook.com/dejustudijavirziens?locale=de_DE"> <i
                      class="bi bi-facebook text-white hover:text-gray-400 text-8xl"></i> </a>
                </div>
                <div> <a href="https://www.instagram.com/dejustudijavirziens/?hl=de"> <i
                      class="bi bi-instagram text-white text-8xl hover:text-gray-400"></i> </a>
                </div>
              </div>
</template>