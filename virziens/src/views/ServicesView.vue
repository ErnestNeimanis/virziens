<script setup lang="ts">

interface Service {
    title: string;
    text?: string;
    prices?: {
        amount: string | number,
        description?: string
    }[];

}

const services = 
[
    {
        title: "",
        prices: 
        [
            {
                amount: "",
                description: "",
            },
             {
                amount: "",
                description: "",
            },
             {
                amount: "",
                description: "",
            },
        ],
        text: "",
    },
    {
        title: "",
        prices: 
        [
            {
                amount: "",
                description: "",
            },
        ],
        text: "",
    },
]


</script>
<template>

</template>