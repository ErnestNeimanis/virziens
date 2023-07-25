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

  <div class=" min-h-screen">
      <Header/>
    <main class="flex justify-center items-center  min-h-screen min-w-screen pt-8">
      <img :src="topImage" alt="" class="min-h-screen object-cover fixed top-0 z-[-1] ">
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

    
    </main>
  </div>
</template>