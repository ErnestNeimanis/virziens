<script setup lang="ts">
import { ref } from "vue";
import {schedule} from "@/composables/schedule";

const defaultBgColor = "#000";
const defaultTextColor = "#fff";


</script>
<template>
    <div class="border-4">
        <div class="flex justify-center gap-1">
            <div v-for="day in schedule" class="flex flex-col border w-[13vw]">
                <div class="w-full">
                    <div class="flex justify-center capitalize" :style="{ backgroundColor: day.bgColor ?? defaultBgColor }">
                        <span class="text-[1.5vw] font-extrabold" :style="{ color: day.textColor ?? defaultTextColor }">
                            {{ day.title }}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-4 mt-4">
                    <div v-for="entry in day.entries" class="border-2"
                        :style="{ backgroundColor: entry.bgColor ?? defaultBgColor }">
                        <div class="flex justify-center">
                            <span class="font-semibold text-[1.9vw] whitespace-nowrap"
                                :style="{ color: entry.textColor ?? defaultTextColor }">
                                {{ entry.time }}
                            </span>
                        </div>
                        <div class="flex justify-center">
                            <span class="font-semibold" :style="{
                                color: entry.textColor ?? defaultTextColor,
                        
                            }">{{ entry.title }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
