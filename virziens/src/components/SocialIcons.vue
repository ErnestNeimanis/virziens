<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useWindowSize } from "@/composables/window";
import { useDeviceStore } from "@/stores/device.store";
const props = defineProps<{
      show?: boolean;
}>();

const {smallWindow,mediumWindow,largeWindow} = useWindowSize();
const device = useDeviceStore();
device.setDeviceType();

const show = ref<boolean>(false);
const windowY = ref(window.scrollY);

function handleScroll() {
      const currentScrollPos = window.scrollY;
    
      if (currentScrollPos > windowY.value) {
            show.value = true;
      } else {
            show.value = false;
      }

      windowY.value = currentScrollPos;
}


onMounted(() => {
      if (!props.show) {
            window.addEventListener("scroll", handleScroll);
      }
});
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>
<template>
      <div class="fixed bottom-0 z-[100] w-full flex justify-center gap-8 transition-all duration-1000 bg-black py-2 pointer-events-none"
            :class="{ 'translate-y-24': !show }">
            <div class="flex justify-between " :class="{'w-full px-3':smallWindow || !device.isDesktop,'w-1/6 min-w-[300px]':!smallWindow}">
                  <div class="pointer-events-auto">
                        <a href="https://www.facebook.com/dejustudijavirziens?locale=de_DE">
                              <i class="bi bi-facebook text-white hover:text-gray-400 text-5xl"></i>
                        </a>
                  </div>
                  <div class="pointer-events-auto">
                        <a href="https://www.instagram.com/dejustudijavirziens/?hl=de">
                              <i class="bi bi-instagram text-white text-5xl hover:text-gray-400"></i>
                        </a>
                  </div>
                  <div class="pointer-events-auto">
                        <a href="https://www.instagram.com/dejustudijavirziens/?hl=de">
                              <i class="bi bi-telephone-outbound text-white text-5xl hover:text-gray-400"></i>
                        </a>
                  </div>
            </div>

      </div>
</template>
