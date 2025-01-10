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
                        <span class="text-[1.5vw] py-2  font-extrabold" :style="{ color: day.textColor ?? defaultTextColor }">
                            {{ day.title }}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 mt-4">

                    <ScheduleEntryBox v-if="day.name !== 'sunday'" v-for="(entry, j) in day.entries" :entry="entry" class="h-[6vw] " :class="{'grow-button':entry.bgColor}" />
                    <div v-else  class="bg-white rounded-lg font-extrabold  h-[44.85vw] text-center">
                      <div class="text-[1.3vw] border p-1  border-black rounded-lg m-2 ">
                        11:30 – 12:45
                        LADY STYLE (25+)
                      </div>

                      <div >

                        <h2 class="my-[1vw] text-[1.8vw]">  SPORT
                          LINEDANCE</h2>
                        <ul class="space-y-[1vw] text-[1.3vw] ">

                          <li>
                            13:00 STARTER
                          </li>
                          <li>
                            14:00 FREE
                            STYLE STARTER
                          </li>
                          <li>
                            14:30
                            NEWCOMER
                          </li>
                          <li>
                            15:30 DUO
                          </li>
                          <li>
                            16:30 NOVICE
                          </li>
                          <li>
                            17:30
                            FREE STYLE
                            EXPERIECED
                          </li>
                          <li>
                            18:00
                            INETRMEDIATE
                          </li>
                          <li>
                            19:30
                            ADVANCED &amp;
                            SHOWCASE
                          </li>
                        </ul>
                      </div>

                    </div>
                </div>
            </div>
            <div class="">


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