<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

const randomBtn = ref<HTMLElement | null>()
const vibrator = ref<number>(20)

const randomBtnVisible = ref(false)


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
    <div class=" h-full flex flex-col   gap-18">



      <div
        class="flex  mt-12 px-9 text-[5vw] text-white  font-serif w-full  ">
        <span class="font-semibold">Piedāvājam plašas iespējas gan dejotājiem, gan sadarbības partneriem.
        </span>

      </div>

      <div class="flex justify-end w-full px-20 ">

        <button ref="randomBtn" :style="{ transform: `translateX(${vibrator}px)` }"
          class="transition-all duration-100 bg-black rounded-full hover:bg-black/30 mt-6  px-12 py-2 sm:text-[3vw] text-[5vw]  text-white uppercase font-extrabold">Piesakies!
        </button>

      </div>

    </div>
  </section>
</template>