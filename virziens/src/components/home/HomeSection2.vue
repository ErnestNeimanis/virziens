<script setup lang="ts">

</script>
<template>
  <section class=" w-full   ">

    <div class="flex justify-center description-text  ">
      <h1 class=" xl:text-9xl md:text-7xl xs:text-4xl text-3xl px-6 uppercase font-extrabold ">kautkāds īss apraksts par
        mums </h1>
    </div>
    <div class="flex justify-start items-center h-full relative overflow-hidden ] ">
      <div class="relative flex justify-center pt-16  bg-white/30 w-full  lg:min-h-[1200px] md:min-h-[900px] sm:min-h-[600px] min-h-[450px]  min-w-[300px] ">
        <article class=" flex flex-col md:gap-16 gap-4  lg:text-3xl sm:text-2xl text-xl px-6 font-bold   h-full ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad architecto expedita, aperiam molestias ab
            aspernatur
           -
          </p>
        
          <p class="text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestias.

          </p>


        </article>
        <img class="background-pattern  absolute top-0 w-full z-[-1] -translate-y-[40vw]" src="@/assets/images/two-brown-dancers.jpg" alt="">
      </div>


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


.background-pattern {
  background-image: url('@/assets/images/pattern-large.png');
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