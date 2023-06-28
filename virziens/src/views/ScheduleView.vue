<script setup lang="ts">
import { useWindowSize } from "@/composables/window"

import NavBar from '@/components/navbar/NavBar.vue';
import Schedule from '@/components/Schedule/Schedule.vue';
import ScheduleMobile from '@/components/Schedule/ScheduleMobile.vue';
import ScheduleHeading from '@/components/Schedule/ScheduleHeading.vue';

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();

</script>
<template>
    <div class=" min-h-screen bg-slate-500">
        <div class="bg-red-100 fixed top-0 h-72 ">
            <NavBar class="w-full   " />
        </div>


        <main class="w-full  ">
            <div class="f w-full mt-36">
                <div>
                    <ScheduleHeading />
                </div>
                <div>
                    <ScheduleMobile v-if="smallWindow" />
                    <Schedule v-else />
                </div>

            </div>

        </main>

    </div>
</template>