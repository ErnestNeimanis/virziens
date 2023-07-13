<script setup lang="ts">
// import { onBeforeMount, onBeforeUnmount, onMounted, ref, type Ref } from 'vue';



// interface Image {
//   path: string;
//   ref:Ref <HTMLImageElement | null>
// }


// const translateX = ref(0);




// const parentSection = ref(null)


// const img1opacity = ref("opacity-1")

// const imgOpacityArray =  ref<string[]>([])
// const imgPathArray = ref<string[]>([
//     "@/assets/images/brown-dancers-halfpyramid.jpg",
//     "@/assets/images/virziens-piramida.jpg",
//     "@/assets/images/balerina.jpg"
// ])
// const indexGenerator = imgIndexes(imgPathArray.value.length)
// function setOpacity(){
//    if(img1opacity.value === "opacity-1") img1opacity.value = "opacity-0"
//    else img1opacity.value = "opacity-1"

// }

// const intervalId = ref<any>(null)
// const intervalStarted =  ref(false)


// function startTimeout() { 
  
//    if(!intervalStarted.value){
//      intervalId.value= setInterval(setOpacity,3000)
//      intervalStarted.value = true;
//    }
  
// }
// function stopTimeout() {
//     if(!intervalId.value) return
// window.clearInterval(intervalId.value)
// }

// onMounted(() => {
//     if(!parentSection.value) return
   
//     onElementIntersection(parentSection.value,startTimeout,0.3)
    

  
// })
// onBeforeUnmount(()=>{
//     stopTimeout()
// })

// function* imgIndexes(length:number = 0){
//     let n = 0;
//     while(n < length){
//         yield n;
//         if(n+1 === length) n = 0;
//         else n++;
//     }
// }

// function onElementIntersection(element: HTMLElement, 
// myCallbackFunction: (entry: IntersectionObserverEntry) 
// => void, threshold: number | undefined = 0.1) {
//   if (!threshold) threshold = 0.1

//   const options = {
//     rootMargin: '0px',
//     threshold: threshold
//   };

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio >= options.threshold) {
//         myCallbackFunction(entry);
//       }
//     });
//   }, options);

//   observer.observe(element);
// }


// function rotate(){
  
// }


</script>
<template>
 
</template>
<style>

.img-switch-transition{
    transition: opacity;
    transition-duration: 2.5s;
}
</style>