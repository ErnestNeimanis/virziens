<script setup lang="ts">
import type{ScheduleEntry} from "@/interfaces/schedule.interfaces"
const props =  defineProps<
{
    entry:ScheduleEntry
}
>()

const defaultBgColor = "#000";
const defaultTextColor = "#fff";
</script>
<template>
    <div class="flex flex-col justify-center items-center  rounded-lg h-[8vw]"
                        :style="{ backgroundColor: entry.bgColor ?? defaultBgColor }">
                        <div class="flex justify-center">
                            <span class="font-semibold text-[1.9vw] whitespace-nowrap"
                                :style="{ color: entry.textColor ?? defaultTextColor }">
                                {{ entry.time }}
                            </span>
                        </div>
                        <div class="flex justify-center">
                            <span class="font-extrabold text-center text-[1vw]" :style="{
                                color: entry.textColor ?? defaultTextColor,
                            }">{{ entry.title }}
                            </span>
                        </div>
                    </div>
</template>