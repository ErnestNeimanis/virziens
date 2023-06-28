<script setup lang="ts">
import NavBar from '@/components/navbar/NavBar.vue';
import Schedule from '@/components/Schedule/Schedule.vue';
import ScheduleHeading from '@/components/Schedule/ScheduleHeading.vue';
</script>
<template>
    <div class=" h-screen bg-slate-500">
        <div class="bg-red-100 fixed top-0 h-72 ">
            <NavBar class="w-full   " />
        </div>


        <main class="w-full  ">
            <div class="f w-full mt-36">
                <div>
                    <ScheduleHeading />
                </div>
                <div>
                    <Schedule />
                </div>

            </div>

        </main>

    </div>
</template>