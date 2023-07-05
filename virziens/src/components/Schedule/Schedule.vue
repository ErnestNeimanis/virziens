<script setup lang="ts">
import { ref } from "vue";
import { useWindowSize } from "@/composables/window"
import { schedule } from "@/composables/schedule";
import ScheduleEntryBox from "../Schedule/ScheduleEntryBox.vue"
import type { ScheduleEntry } from "@/interfaces/schedule.interfaces"
const defaultBgColor = "#000";
const defaultTextColor = "#fff";

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();



</script>
<template>
    <div class="">
        <div  class="flex justify-center gap-2">
            <div v-for="(day, i) in schedule" class="flex flex-col  w-[13vw]">
                <div class="w-full">
                    <div class="flex justify-center capitalize" :style="{ backgroundColor: day.bgColor ?? defaultBgColor }">
                        <span class="text-[1.5vw] font-extrabold" :style="{ color: day.textColor ?? defaultTextColor }">
                            {{ day.title }}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 mt-4">
                    <ScheduleEntryBox v-for="(entry, j) in day.entries" :entry="entry" class="h-[6vw] " :class="{'grow-button':entry.bgColor}" />
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>

.grow-button:hover {

    transform: scale(1.1);
    transition: transform 200ms ;
}

</style>