<script setup lang="ts">
import { useWindowSize } from "@/composables/window"

import NavBar from '@/components/navbar/NavBar.vue';
import Schedule from '@/components/Schedule/Schedule.vue';
import ScheduleMobile from '@/components/Schedule/ScheduleMobile.vue';
import ScheduleHeading from '@/components/Schedule/ScheduleHeading.vue';
import Header from "@/components/Header.vue";

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();

</script>
<template>
  
    <main class="  bg-gradient-to-r from-blue-700 to-pink-600  ">
        <Header/>
        <div class="w-full    ">
            <div class="f w-full ">
                <div>
                    <ScheduleHeading />
                </div>
                <div class="pb-8">
                    <ScheduleMobile v-if="smallWindow" />
                    <Schedule v-else />
                </div>

            </div>

        </div>

    </main>
</template>