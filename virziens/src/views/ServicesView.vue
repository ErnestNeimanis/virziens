<script setup lang="ts">
import Prices from '@/components/services/Prices.vue';
import ColabList from '@/components/services/ColabList.vue';
import NavBar from '@/components/navbar/NavBar.vue'

interface Service {
    title: string;
    text?: string;
    prices?: {
        amount: string | number,
        description?: string
    }[];

}

interface Colab {
    title: string;
    list: string[]
}

const colabs: Colab[] =
   [  
       {
        title: "Mēs organizējam grupu un individuālās nodarbības:",
        list:
        [
        `<em>Hip Hop</em>`,
        `<em>Laikmetīgās dejas</em>`,
        `<em>House</em>`,
        `<em>Sacensību solo dejas</em>`,
        `<em>Džeza dejas</em>`,
        `<em>Lady style</em>`,
        `<em>Experimental</em>`,
        `<em>Fusion</em>`,
        `u. c. deju stilos`
        ],
       },
       {
        title: "Mēs aicinām pievienoties mūsu kolektīvam ne tikai bērnus, pusaudžus un jauniešus, bet arī pieaugušos un seniorus. Pie mums iespējams dejot gan hobija nolūkos, gan arī deju apgūt profesionālā līmenī, kā arī piedalīties:",
        list:
        [
        "Valsts un starptautiska mēroga sacensībās",
        "Meistarklasēs",
        "Koncertos",
        "Festivālos",
        "Nometnēs",
        "Profesionālu videoklipu uzņemšanā",
        "Fotosesijās",
        "Šovos",
        "u. c. pasākumos"
        ],
        },
       ]
const services =
    [
        {
            title: "Maksa par mēnesi deju studijā VIRZIENS 2023./2024. deju sezonā, sākot ar augustu.",
            prices:
                [

                    {
                        amount: "35.00 €",
                        description: "1x nedēļā",
                    },
                    {
                        amount: "50.00 €",
                        description: "2x nedēļā",
                    },
                    {
                        amount: "60.00 €",
                        description: "3x nedēļā",
                    },
                    {
                        amount: "70.00 €",
                        description: "dejo, cik vēlies",
                    },
                    {

                        amount: "10.00 €",
                        description: "par katru apmeklēto nodarbību un pasākumu",
                    },
                ],
        },

    ]

</script>
<template>

<div class="sticky -top-6 pt-8 pb-2">
    <NavBar />
</div>
<main class="bg-gray-100 py-8 px-4">
    <section class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
                Piesaki savu priekšnesumu!
            </button>
        </div>
        <div class="d p-4 mb-8">
          

            <p class="text-gray-800">
                text
            </p>
        </div>
    </section>
    <div class="max-w-4xl mx-auto mb-8">
        <div>
            <img src="" alt="">
        </div>
    </div>
    <section class="max-w-4xl mx-auto mb-8">
        <div class="text-center mb-8">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
                Piesaki sadarbību!
            </button>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-4">Vienmēr esam...</h2>
         
        </div>
          <div class="flex flex-col gap-9">
                <div v-for="colab in colabs">
                    <h1 class="text-xl font-bold mb-6">{{ colab.title }}</h1>
                    <div>
                        <ul>
                            <li v-for="item in colab.list" class="list-disc">
                                <div v-html="item"></div>
                            </li>
                        </ul>
                    </div>
                </div>
               
            </div>
    </section>
    <section class="max-w-4xl mx-auto mb-8">
        <div class="mb-4">
            <h2 class="text-2xl font-semibold uppercase">cenas</h2>
        </div>
        <div>
            <h3 class="text-xl font-semibold mb-4">Deju nodarbības maksa par mēnesi</h3>
            <div>
                <div v-for="service in services" class="mb-4">
                    <div>
                        <div class="mb-2">
                            <h4 class="text-lg font-semibold">{{ service.title }}</h4>
                        </div>
                        <div>
                            <Prices :prices="service.prices" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex  items-center mt-4">
            <span>
                Par katru apmeklēto nodarbību un pasākumu atsevišķi -
            </span>
            <span class="font-semibold">
                10 EUR
            </span>
        </div>
    </section>
    <div class="max-w-4xl mx-auto">
        
    </div>
</main>


</template>