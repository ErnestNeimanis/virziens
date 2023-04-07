<script setup lang="ts">
import ContactCard from '../ContactCard.vue';
</script>
<template>
      <section class="flex flex-col items-center justify-start w-full h-96 pt-4 bg-black min-w-[300px] ">
     
      
      <div class="w-full -translate-y-32">
        <div class="flex justify-center items-center gap-4">
          <div> <a href="https://www.facebook.com/dejustudijavirziens?locale=de_DE"> <i
                class="bi bi-facebook text-white hover:text-gray-400 text-3xl"></i> </a></div>
          <div> <a href="https://www.instagram.com/dejustudijavirziens/?hl=de"> <i
                class="bi bi-instagram text-white text-3xl hover:text-gray-400"></i> </a></div>
        </div>
      </div>
        <ContactCard/>


    </section>
</template>