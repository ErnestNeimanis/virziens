<script setup lang="ts">
import { contacts, generalContactData } from '@/composables/contacts';
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
    <div class="  bg-white w-full h-full flex justify-center items-center">
        <div class="flex flex-col gap-8">
            <div v-for="contact in contacts" class="flex flex-col ">

                   <div class="flex flex-col items-center mt-2">
                    <a class="mr-2" :href="telHref(contact.phone)">
                        <div class="bg-cyan-900 hover:bg-cyan-400 rounded-lg p-2">
                            <i class="bi bi-telephone-outbound text-2xl text-white"></i>
                        </div>

                    </a>
                    <div class="text-center">
                        <span class="text-xl ">{{ telSeparate(contact.phone) }}</span>

                    </div>
                </div>

                <div class=" text-center">
                    <span class="text-2xl  font-bold">{{ contact.name }}</span>
                </div>
                <div class=" text-center">
                    <span class="font-semibold">{{ contact.title }}</span>
                </div>

             
            </div>
        </div>

    </div>
</template>