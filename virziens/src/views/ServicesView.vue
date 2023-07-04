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
            title: "Ar ko sadarbojas",
            list:
                [
                    "partneris",
                    "nakamais partneris"
                ]
        },
        {
            title: "Sadarbibas iespejas",
            list:
                [
                    "iespeja",
                    "nakama iespeja"
                ]
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
       <div class=" sticky -top-6 pt-8 bg-white pb-2">
        <NavBar />
    </div>
    <main class="">
        <section>
            <div>
                <button>
                    Piesaki savu priekšnesumu!
                </button>
            </div>
            <div>
                <p>
                    text
                </p>
            </div>
        </section>
        <div>
            <div>
                <img src="" alt="">
            </div>
        </div>
        <section>
            <div>
                <button>Piesaki sadarbību!</button>
            </div>
            <div>
                <h2>Vienmēr esam...</h2>
                <div>
                    
                </div>
            </div>

        </section>
        <section>
            <div>
                <h2 class="uppercase">cenas</h2>
            </div>
            <div>
                <h3>Deju nodarbības maksa par mēnesi</h3>
                <div>
                    <div v-for="service in services">
                        <div>
                            <div class="">
                                <h4>{{ service.title }}</h4>
                            </div>
                            <div>
                                <Prices :prices="service.prices" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div>
                    <span>
                        Par katru apmeklēto nodarbību un pasākumu atsevišķi -
                    </span>
                    <span>
                        10 EUR
                    </span>
                </div>

            </div>

        </section>


        <div>

        </div>
    </main>
</template>