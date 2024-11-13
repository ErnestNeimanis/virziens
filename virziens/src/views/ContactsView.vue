<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';
import Header from '@/components/Header.vue';
import topImage from '@/assets/images/dancing-in-water.jpg'
import { contacts, generalContactData } from '@/composables/contacts';
import ContactListCard from '@/components/contacts/ContactListCard.vue';
import SocialIcons from '@/components/SocialIcons.vue';
import GeneralContactsCard from '@/components/contacts/GeneralContactsCard.vue';
import whiteMarble from "@/assets/images/whitemarble.jpg";
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

  <div class=" min-h-screen">
      <Header/>
    <main class="flex flex-col  justify-center items-center  min-h-screen min-w-screen pt-8">
      <img :src="whiteMarble" alt="" class="min-h-screen min-w-full  object-cover fixed top-0 z-[-1] ">
      <div class="n flex justify-center items-center mb-12 fixe  ">
        <div class="flex justify-center items-center flex-wrap gap-20 w-full px-4 ">
          <div class=" md:w-[25vw] md:h-[25vw] w-[90vw] h-[90vw]   shadow-black shadow-xl min-w-[360px] min-h-[360px] ">
            <ContactListCard />
          </div>
          <div class="md:w-[25vw] md:h-[25vw] w-[90vw] h-[90vw]   shadow-black shadow-xl min-w-[360px] min-h-[360px]">
            <GeneralContactsCard /> 
          </div>
       
        </div>

      </div>
      <div class="w-full   ">
        <div class="max-w-md mx-auto p-8 bg-white shadow-black shadow-xl ">

          <h2 class="text-xl font-bold text-gray-800 text-cyan-900 mb-2">Biedrība "Deju studija Virziens"</h2>
          <p class="text-lg text-gray-700 mb-1">Reģ. Nr.: 50008289011</p>
          <p class="text-lg text-gray-700 mb-1">Jur. adrese: Vanagu iela 9-2, Jūrmala, LV-2015</p>
          <p class="text-lg text-gray-700">Swedbank: LV04HABA0551046971419</p>
        </div>


      </div>

      <SocialIcons class="z-[999]" />
    </main>
  </div>
</template>