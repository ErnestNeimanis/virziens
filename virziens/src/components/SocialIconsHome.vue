<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useWindowSize } from "../composables/window";
import { useDeviceStore } from "../stores/device.store";
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

function telHref(phone: string | undefined) {
  if (!phone) return ""
  return `tel:${phone}`
}

onMounted(() => {
      if (!props.show) {
            window.addEventListener("scroll", handleScroll);
      }
});
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

const socialLinks = ref([
  { icon: 'bi-facebook', link: 'https://www.facebook.com/dejustudijavirziens' },
  { icon: 'bi-instagram', link: 'https://www.instagram.com/dejustudijavirziens' },
  { icon: 'bi-telephone-outbound', link: telHref('+37129445989') },
]);
</script>
<template>
     <div class="fixed top-24 right-0 z-[100]  flex flex-col items-end justify-center gap-3 transition-all duration-1000 b py-2 pointer-events-none"
            :class="{ 'translate-x-24': !props.show }">
            <div v-for="icon in socialLinks" :key="icon" class="flex justify-between px-14 bg-red-950 rounded-sm p-1 mr-1" :class="{'w-full px-3':smallWindow || !device.isDesktop,'w-1/6  min-w-[300px]':!smallWindow}">
                  <div class="pointer-events-auto">
                        <a :href="icon.link">
                              <i :class="icon.icon" class=" text-white hover:text-gray-400 text-4xl"></i>
                        </a>
                  </div>
            
            </div>

      </div>
</template>