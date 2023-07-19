<script setup lang="ts">
import { contacts,generalContactData } from '@/composables/contacts';

function addressHref(address: string | undefined): string {
    if (!address) return "";
    return `https://www.google.com/maps/search/?api=1&query=${address}`
}

function telSeparate(phone: string | undefined): string {
    if (!phone) return "";
    return `${phone.substring(0, 4)} ${phone.substring(4, phone.length)}`
}
function telHref(phone: string | undefined) {
    if (!phone) return ""
    return `tel:${phone}`
}


</script>

<template>

  <div class=" w-full h-full flex flex-col justify-center items-center gap-8 bg-white">

                <div class="flex flex-col items-center gap-4">
                    <div class="border-4 p-4 rounded-full bg-cyan-900 hover:bg-cyan-400">
                        <i class="bi bi-envelope-open-fill text-3xl text-white"></i>
                    </div>
                    <div >
                        <span class=" text-[145%] font-bold">{{ generalContactData.email }}</span>
                    </div>
                </div>

                <div class="border w-[90%] border-stone-400 hidden"></div>


                <div class="flex flex-col items-center gap-4">
                    <div  class="border-4 p-4 rounded-full bg-cyan-900 hover:bg-cyan-400">
                        <a :href="addressHref(generalContactData.address)"><i class="bi bi-geo-alt-fill  text-3xl text-white"></i></a>
                    </div>
                    <div class="px-7">
                        <span class="  text-[140%] font-bold whitespace-break-spaces">{{ generalContactData.address }}</span>
                    </div>
                </div>

            </div>
    
</template>