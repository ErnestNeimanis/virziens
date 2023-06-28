<script setup lang="ts">
import { ref } from "vue";
import { useWindowSize } from "@/composables/window"
import { schedule } from "@/composables/schedule";
import ScheduleEntryBox from "../Schedule/ScheduleEntryBox.vue"
import type { ScheduleEntry } from "@/interfaces/schedule.interfaces"
const defaultBgColor = "#000";
const defaultTextColor = "#fff";

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();

function toNumber(s:string) {
    
}

function fillDay(entries: ScheduleEntry[]):ScheduleEntry[]{
    const totalHours = 24;
    const numberOfElements = 6;
     const timeFrameUnit = totalHours/numberOfElements
    const filledEntryArray = []
    const emptyEntry = {}

    let entriesIndex = 0;
    for (let i = 0; i < numberOfElements; i++) {

        const timeStr = entries[entriesIndex]?.time ?? '';
        const hourStr = timeStr ? timeStr.slice(0,2) : undefined;
        const hour = hourStr ? parseInt(hourStr) : undefined;

          if (!hour) {
            filledEntryArray.push(undefined)
            continue;
        }
       
        const currentTimeFrame = i*timeFrameUnit;
        const nextTimeFrame = (i+1)*timeFrameUnit

        const inTimeFrame = hour >= currentTimeFrame && hour < nextTimeFrame;

      
        if(inTimeFrame){
            filledEntryArray.push(entries[entriesIndex])
            entriesIndex++;
        }else{
              filledEntryArray.push({title:currentTimeFrame,time:hour})
            continue; 
        }

    }

    return filledEntryArray

}

</script>
<template>
    <div class="">
        <div v-if="!smallWindow" class="flex justify-center gap-2">
            <div v-for="(day, i) in schedule" class="flex flex-col  w-[13vw]">
                <div class="w-full">
                    <div class="flex justify-center capitalize" :style="{ backgroundColor: day.bgColor ?? defaultBgColor }">
                        <span class="text-[1.5vw] font-extrabold" :style="{ color: day.textColor ?? defaultTextColor }">
                            {{ day.title }}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 mt-4">
           
                     <ScheduleEntryBox v-for="(entry, j) in day.entries" :entry="entry" />
                    
                    
                </div>

            </div>
        </div>
    </div>
</template>
