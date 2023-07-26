<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navbar/NavBar.vue';
import Header from './components/Header.vue';
import LogoSmall from './components/utils/LogoSmall.vue';
import { useRoute } from 'vue-router';

const route =  useRoute();
</script>

<template>
  <LogoSmall v-if="route.path !== '/'" />
  
  
  <RouterView />
  
    
</template>

