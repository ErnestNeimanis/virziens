<script setup lang="ts">
import { ref } from "vue";
import { useWindowSize } from "@/composables/window"
import { schedule } from "@/composables/schedule";
import ScheduleEntryBox from "../Schedule/ScheduleEntryBox.vue"
import type { ScheduleEntry } from "@/interfaces/schedule.interfaces"
import ScheduleEntryBoxMobile from "./ScheduleEntryBoxMobile.vue";
const defaultBgColor = "#000";
const defaultTextColor = "#fff";

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();



</script>
<template>
    <div class="w-full pb-16">
        <div  class="flex flex-col justify-center  min-w-[380px] shadow-xl">
            <div v-for="(day, i) in schedule" class="flex flex-col px-8  ">
                <div class="w-full mb-2 mt-8">
                    <div class="flex justify-center capitalize" :style="{ backgroundColor: day.bgColor ?? defaultBgColor }">
                        <span class="text-4xl font-extrabold" :style="{ color: day.textColor ?? defaultTextColor }">
                            {{ day.title }}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col justify-center gap-2  ">
                    <div v-for="(entry, j) in day.entries"  class="">
                         <ScheduleEntryBoxMobile v-if="entry.time" :entry="entry"  />
                    </div>
                   
                </div>

            </div>
        </div>
    </div>
</template>
