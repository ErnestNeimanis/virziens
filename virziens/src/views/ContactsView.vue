<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import Header from '@/components/Header.vue';
import topImage from '@/assets/images/dancing-in-water.jpg'
import { contacts, generalContactData } from '@/composables/contacts';
import ContactListCard from '@/components/contacts/ContactListCard.vue';
import GeneralContactsCard from '@/components/contacts/GeneralContactsCard.vue';
function telHref(phone: string | undefined) {
  if (!phone) return ""
  return `tel:${phone}`
}

function addressHref(address: string | undefined): string {
  if (!address) return "";
  return `https://www.google.com/maps/search/?api=1&query=${address}`
}
function telSeparate(phone: string | undefined): string {
  if (!phone) return "";
  return `${phone.substring(0, 4)} ${phone.substring(4, phone.length)}`
}

</script>
<template>
  <Header class="bg-black" />
  <div class=" min-h-screen">

    <!-- <div>
      <img :src="topImage" alt="">
    </div> -->
    <main class="flex justify-center items-center  ">
      <img :src="topImage" alt="" class="min-h-screen object-cover fixed top-0 z-[-1] ">
      <div class="h-screen w-screen flex justify-center items-center ">
        <div class="flex gap-24">
          <div>
            <ContactListCard />
          </div>
       
        </div>

      </div>

      <!-- <div class="min-w-[370px] w-[60vw]">
      <div class="mt-12 w-full border-4">
        <h1 class="text-6xl text-center bg-white bg-opacity-60 px-4 rounded-md uppercase font-extrabold">Kontakti</h1>
      </div>
      <div class="mt-32 bg-white bg-opacity-50 rounded-md w-full border-4">
        <div v-for="contact in contacts" class="flex flex-col px-8 py-2">
          <div>
            <span class="font-semibold">{{ contact.title }}</span>
          </div>
          <div>
            <span class="text-2xl font-semibold">{{ contact.name }}</span>
          </div>
          <div class="flex items-center mt-2">
            <a class="mr-2" :href="telHref(contact.phone)">
              <i class="bi bi-phone"></i>
            </a>
            <span>{{ telSeparate(contact.phone) }}</span>
          </div>
        </div>
      </div>
      <div class="bg-white border-4 bg-opacity-50 px-8 py-2 my-8 rounded-md">
        <div class="flex items-center">
          <i class="bi bi-envelope-open-fill"></i>
          <span class="ml-2">{{ generalContactData.email }}</span>
        </div>
        <div class="flex items-center">
          <a :href="addressHref(generalContactData.address)"><i class="bi bi-geo-alt-fill"></i></a>
          <span class="ml-2">{{ generalContactData.address }}</span>
        </div>
      </div>
    </div> -->
    </main>
  </div>
</template>