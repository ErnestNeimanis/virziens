<script setup lang="ts">
// import type { TeamMember } from '@/interfaces/team-member.interfaces';
import { computed } from 'vue';
import { useWindowSize } from '@/composables/window';

const { smallWindow, mediumWindow, largeWindow } = useWindowSize();

interface TeamMember {
    name: string;
    subtitle?: string;
    image: string;
    text?: string;

}

const props = defineProps<
    {
        member: TeamMember
    }
>()

const path = "../assets/images/BAIBA.jpg"

</script>
<template>
    <div class=" ">

        <div class="flex justify-center ">
            <div class="flex   m ">
                <div class="h-full w-2/3">
                    <div class="flex flex-col justify-around px-6 h-full items-center ">
                     
                            <h2 class="text-[7vw] font-extrabold text-center ">
                                {{ props.member.name }}
                            </h2>
                 

                        <div class="flex justify-center items-center  text-[3vw] font-semibold">
                            <h3 class="text-center" v-html="props.member.subtitle"></h3>
                        </div>
                    </div>
                </div>


                <div class="w-1/3 h-full overflow-cl">
                    <img class="object-cover w-full " :src="props.member.image" alt="Image">
                </div>
            </div>


        </div>

        <div class="w-">
            <p v-html="member.text" class="whitespace-break-spaces md:text-3xl font-[500] mt-12">
              
            </p>

        </div>
    </div>
    <div class="flex justify-center">
        <div class="border border-slate-500 w-full">

        </div>
    </div>
</template>

<style scoped></style>