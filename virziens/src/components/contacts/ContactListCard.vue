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
    <div class="bg-white">
        <div v-for="c in contacts">
            <div>
                <span>{{ c.name }}</span>
            </div>
        </div>
    </div>
</template>