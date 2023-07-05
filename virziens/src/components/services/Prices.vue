<script setup lang="ts">



const props = defineProps<
    {
        prices: {
            amount?: number | string;
            description?: string;
        }[]
    }
>()
</script>
<template>
    <div>
        <ul class="list-disc ">
            <li v-for="price in prices"  > 
                <span class="ml-6">
                    {{ price.amount }}
                </span>
                <span>
                    {{ price.description }}
                </span>
            </li>
        </ul>
    </div>
</template>