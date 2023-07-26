<script setup lang="ts">

import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps<
    {
        show?: boolean
    }
>()

const show = ref<boolean>(false)
const windowY = ref(window.scrollY);


function handleScroll() {

    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos, windowY.value)
    if (currentScrollPos > windowY.value) {

        show.value = true
    } else {

        show.value = false;
    }


    windowY.value = currentScrollPos;
}


function test() {
    console.log('testing');
}
onMounted(() => {
    if (!props.show) {
        window.addEventListener("scroll", handleScroll)
    }

})
onUnmounted(() => window.removeEventListener("scroll", test))

</script>
<template>
    <div class="fixed bottom-0 z-[100] w-full  flex justify-center gap-8 transition-all duration-1000 bg-black  py-2 pointer-events-none"
        :class="{ 'translate-y-24': !props.show }">
        <div class="pointer-events-auto"> <a href="https://www.facebook.com/dejustudijavirziens?locale=de_DE"> <i
                    class="bi bi-facebook text-white hover:text-gray-400 text-5xl"></i> </a>
        </div>
        <div class="pointer-events-auto"> <a href="https://www.instagram.com/dejustudijavirziens/?hl=de"> <i
                    class="bi bi-instagram text-white text-5xl hover:text-gray-400"></i> </a>
        </div>
    </div>
</template>