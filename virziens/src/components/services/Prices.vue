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
        <ul class="list-disc">
            <li v-for="price in prices"  >
                <span>
                    •
                </span>
                <span>
                    {{ price.amount }} EUR
                </span>
                <span>
                    {{ price.description }}
                </span>
            </li>
        </ul>
    </div>
</template>