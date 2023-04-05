<script setup lang="ts">

</script>
<template>
     <section class=" w-full   ">

      <div class="flex justify-center description-text b">
        <h1 class=" xl:text-9xl md:text-7xl xs:text-4xl text-3xl px-6 uppercase font-extrabold">kautkāds īss apraksts par mums </h1>
      </div>
      <div  class="flex justify-start items-center h-full relative overflow-hidden min-h-[400px] ">
        <div class="bg-white/20 h-full">
  <article class="text-3xl px-6 font-bold   ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad architecto expedita, aperiam molestias ab aspernatur
          repellendus voluptas facilis reprehenderit accusantium obcaecati vel delectus vitae natus doloribus, fugiat
          ratione vero, dolorum magni soluta esse sunt blanditiis voluptatem! Sapiente maxime autem nesciunt.

        </article>
        </div>
      
        <img class="absolute top-0 w-full z-[-1] -translate-y-[400px]" src="@/assets/images/two-brown-dancers.jpg" alt="">
      </div>
    </section>
</template>

<style scoped>

.description-text {
  background-color: white;
  animation-name: fade-out;
  animation-duration: 9s;
  animation-fill-mode: forwards;
}


@keyframes fade-out {
  from {
   
     background-color: rgb(242, 228, 228);
  }

  to {
    background-color: transparent;
  }
}
</style>