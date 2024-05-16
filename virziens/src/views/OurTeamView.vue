<script setup lang="ts">
import TeamMember from "@/components/our-team/TeamMember.vue"

import NavBar from "@/components/navbar/NavBar.vue"
import Header from "@/components/Header.vue"
import SocialIcons from "@/components/SocialIcons.vue"


import {usePosts} from "@/stores/use-posts"
import { useWindowSize } from "@/composables/window"
import { onMounted, ref } from "vue"
import whiteMarble from "@/assets/images/whitemarble.jpg";
const {smallWindow,mediumWindow,largeWindow} = useWindowSize();
const posts = usePosts();

const members = ref<{
    name: string;
    subtitle?: string;
    image: string;
    text?: any;

}[]>([])

onMounted(async () =>{
    const response = await posts.get('team')
    members.value = response.map(post => ({
    name: post.title, 
    image: post.featuredImg, 
    text: post.content, 
  }));
})





</script>
<template>


  
    <main class="min-h-screen relative"
    style="
    "
    >
      <img class="absolute top-0 right-0 -z-10 w-full h-full " :src="whiteMarble" alt="">
         <Header/>

        <div>

            <div class="my-12">
                <h1 class="text-center text-[8vw] font-serif">
                    Mākslinieciskā komanda
                </h1>
            </div>

        </div>
        <div class="md:px-36 px-4  flex flex-col gap-16">

        
            <TeamMember v-for="m in members" :key="m.name" :member="m" />

        </div>
         <div class="h-[15vh]">

        </div>
      <SocialIcons class="z-[999]"  />
    </main>
    
          
           
    
    
</template>