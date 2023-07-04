<script setup lang="ts">
interface Colab {
    title: string;
    list: string[]
}
const props = defineProps<
    {
        colab: {
            title: string;
            list: string[]
        }
    }
>()
</script>
<template>
    <div>
        <div>
            <h3>{{ props.colab.title }}</h3>
        </div>
        <div>
            <ul >
                <li v-for="item in props.colab.list">
                    <span>•</span>
                    <span>
                        {{ item }}
                    </span>

                </li>
            </ul>
        </div>
    </div>

</template>