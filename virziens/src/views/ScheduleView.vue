<script setup lang="ts">
import { useWindowSize } from "@/composables/window"

import NavBar from '@/components/navbar/NavBar.vue';
import Schedule from '@/components/Schedule/Schedule.vue';
import ScheduleMobile from '@/components/Schedule/ScheduleMobile.vue';
import ScheduleHeading from '@/components/Schedule/ScheduleHeading.vue';

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();

</script>
<template>
    <div class=" min-h-screen bg-slate-200 ">
        <div class="bg-red-100 h-24 sticky -top-4 ">
            <NavBar class="w-full   " />
        </div>


        <div class="w-full  bg-gradient-to-r from-blue-700 to-pink-600   ">
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

    </div>
</template>