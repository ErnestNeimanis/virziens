<script setup lang="ts">
import testimg from "@/assets/images/textimgcode.jpg"

</script>
<template>


<div class="">
    <div class="bg-red-600">
 <h1 class=" bg-clip-text text-transparent text-9xl" :style="`background-image: url(${testimg});  animation: your-animation 50s infinite;`">
        HELLO
    </h1>
    </div>

  
   

</div>
  <div class="bg-fixed bg-center bg-cover h-screen" :style="`background-image: url(${testimg});`">
  <div class="container mx-auto px-4 py-32">
    <h1 class="text-5xl font-bold text-white mb-4">Welcome to my website</h1>
    <p class="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tellus enim, id aliquam risus sagittis et. Sed ut risus dolor.</p>
  </div>
</div>
</template>

<style>
@keyframes your-animation {
  0% {
    background-position:0% 30%;
  }

  100% {
 background-position:100% 50%;
  }
}
</style>