<script setup lang="ts">
import NavBar from '@/components/navbar/NavBar.vue';
import Schedule from '@/components/Schedule/Schedule.vue';
import ScheduleHeading from '@/components/Schedule/ScheduleHeading.vue';
</script>
<template>
    <div class=" h-screen">
        <div>
              <NavBar class="w-full  fixed  top-8 right-4"/>
        </div>
        <main class="w-full ">
            <div class="f w-full mt-36">
                <div>
                    <ScheduleHeading/>
                </div>
                <div>
                    <Schedule />
                </div>
                
            </div>

        </main>
      
    </div>
</template>