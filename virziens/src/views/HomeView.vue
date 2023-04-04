<script setup lang="ts">
import testimg from "@/assets/images/textimgcode.jpg"
import  HomeBGVideo from "@/components/navbar/HomeBGVideo.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Logo from "@/components/navbar/Logo.vue";
</script>
<template>
 
 <main class="relative">
        <HomeBGVideo class="fixed top-0 left-0 z-[-1]" />

        <section class=" w-full h-96 ">   
            <NavBar/>
        </section>
        <section class=" w-full h-96 ">
           <Logo class="" />

        </section>

   

    <div class="relative flex justify-center items-center overflow-hidden ">


        <div class=" text-9xl text-red-800 border">
            Hello
        </div>



    </div>
     </main>




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