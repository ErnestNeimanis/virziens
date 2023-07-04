<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '@/components/navbar/NavBar.vue';


interface Contact {
  name?: string;
  title?: string;
  phone?: string;
  icon?: string
}

const generalContactData = ref(
  {
    email: "dejustudijavirziens@gmail.com",
    adress: "Talsu šoseja 39, Jūrmala, LV-2016"
  }
)

const contacts = ref<Contact[]>([
  {
    name: "Ligita Apena",
    title: " Deju studijas VIRZIENS vadītāja",
    phone: "+37129445989",
    icon: ``
  },
  {
    name: "Ligita Apena",
    title: " Deju studijas VIRZIENS vadītāja",
    phone: "+37129445989",
    icon: ``
  },
])

function telHref(phone: string | undefined) {
  if (!phone) return ""
  return `Tel+${phone}`
}

</script>
<template>

    <div class=" sticky -top-6 pt-8 bg-white ">
        <NavBar />
    </div>
  <main class="flex justify-center items-center ">
    <div class="">
      <div>
        <h1 class="text-8xl">Kontakti</h1>
      </div>
      <div>
        <div v-for="contact in contacts">
          <div class="flex flex-col">
            <div>
              <span>{{ contact.title }}</span>
            </div>
            <div>
              <span>{{ contact.name }}</span>
            </div>
            <div class="flex">
              <a :href="telHref(contact.phone)">
                <div>

                </div>
              </a>
              <div>
                <span>{{ contact.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div>
          <span>{{ generalContactData.email }}</span>
        </div>
        <div>
          <span>{{ generalContactData.adress }}</span>
        </div>
      </div>

    </div>
  </main>
</template>