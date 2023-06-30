<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useInView } from '@/composables/in-view';
const randomBtn = ref<HTMLElement | null>()
const vibrator = ref<number>(20)

const randomBtnVisible = ref(false)

const textOpaque = ref<boolean>(true);
const textContainer = ref<HTMLElement | null>()

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

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(() => {
  if (!randomBtn.value) return
  onElementIntersection(randomBtn.value, () => { randomBtnVisible.value = true }, 1)

  if(textContainer.value){
    useInView(textContainer.value,() => {textOpaque.value = false})
  }

})
watch(randomBtnVisible, async () => {
  await vibrate(60)
})


async function vibrate(ms: number = 100) {
  vibrator.value;
  if (!vibrator.value) return;
  await delay(ms);
  vibrator.value = vibrator.value < 0 ? Math.abs(vibrator.value) - 1 : -(vibrator.value) + 1;
  vibrate(ms);
}

</script>
<template>
  <section class="w-full h-[100vh] max-h-[150vw]   overflow-hidden">
    <div class=" h-full flex flex-col   a">



      <div ref="textContainer" class="flex  mt-[10vh] px-9 text-[5vw] text-white  font-serif w-full  ">
        <span  class="font-semibold text-opacity" :class="{'opacity-0 text-scale':textOpaque}">Piedāvājam plašas iespējas gan dejotājiem, gan sadarbības partneriem.
        </span>

      </div>

      <div class="flex justify-end items-center w-full mt-[30vh]  -translate-y-[3vh]">

        <button ref="randomBtn" :style="{ transform: `translateX(${vibrator}px)` }"
          class="transition-all duration-100 bg-black rounded-full hover:bg-black/30  mx-[10vw] px-12  py-2 sm:text-[5vw] text-[5vw]  text-white uppercase font-extrabold">Piesakies!
        </button>

      </div>

    </div>
  </section>
</template>

<style scoped>

.text-scale{
  transform: scale(0.8);

}
.text-opacity {
  transition-property: all;
  transition-duration: 2s;
}
</style>