<script setup lang="ts">
import Prices from "@/components/services/Prices.vue";
import ColabList from "@/components/services/ColabList.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Header from "@/components/Header.vue";
import { useDeviceStore } from "@/stores/device.store";
import router from "@/router";

const device = useDeviceStore();
device.setDeviceType();


interface Service {
    title: string;
    text?: string;
    prices?: {
        amount: string | number;
        description?: string;
    }[];
}

interface CourseList {
    title: string;
    list: string[];
}


interface Colab {
    title: string;
    list: string[];
}

interface Offer {
    title: string;
    text: string;
}

const offers: Offer[] = [
    {
        title: "PIESAKI SAVU PRIEKŠNESUMU!",
        text: `Labprāt priecēsim Jūsu acis ar krāšņiem, dejiskiem, tehniskiem priekšnesumiem Jūsu pasākumos, piemēram, uzstāšanos jubilejās, ceremonijās, ballēs, dažādos svētkos, reklāmas videoklipu uzņemšanai vai jebkurā citā notikumā. Lai nodrošinātu augstvērtīgu kvalitāti, pielāgojam individuālu pieeju katram pasūtījumam atbilstoši Jūsu prasībām un vajadzībām. Esam atvērti jebkurai idejai!`,
    },
    {
        title: "PIESAKI SADARBĪBU!",
        text: `Vienmēr esam atvērti gan nacionāla, gan starptautiska mēroga sadarbībām!`,
    },
];

const colabs: Colab[] =
    [
        {
            title: "Ar ko mēs sadarbojamies?",
            list:
                [
                    "Deju treneriem, horeogrāfiem vai tiesnešiem",
                    "Dažādu pasākumu rīkotājiem",
                    "Kinofilmu vai seriālu režisoriem",
                    "Mūziķiem vai citiem māksliniekiem",
                    "Izglītības iestādēm",
                    "Influenceriem"
                ],
        },
        {
            title: "Kādas ir sadarbības iespējas?",
            list:
                [
                    "Sniegt/nodrošināt meistarklases",
                    "Veidot horeogrāfijas",
                    "Organizēt deju koncertus, sacensības un konkursus, nometnes vai festivālus",
                    "Piedalīties dažādos valstiska mēroga svētkos",
                    "Uzstāties šovos",
                    "Bagātināt dažādu stilu mūziķu priekšnesumus",
                    "Veikt citas radošas darbības"
                ],
        },
    ]


const courses: CourseList[] = [
    {
        title: "Mēs organizējam grupu un individuālās nodarbības:",
        list: [
            `<em>Hip Hop</em>`,
            `<em>Laikmetīgās dejas</em>`,
            `<em>House</em>`,
            `<em>Sacensību solo dejas</em>`,
            `<em>Džeza dejas</em>`,
            `<em>Lady style</em>`,
            `<em>Experimental</em>`,
            `<em>Fusion</em>`,
            `u. c. deju stilos`,
        ],
    },
    {
        title:
            "Mēs aicinām pievienoties mūsu kolektīvam ne tikai bērnus, pusaudžus un jauniešus, bet arī pieaugušos un seniorus. Pie mums iespējams dejot gan hobija nolūkos, gan arī deju apgūt profesionālā līmenī, kā arī piedalīties:",
        list: [
            "Valsts un starptautiska mēroga sacensībās",
            "Meistarklasēs",
            "Koncertos",
            "Festivālos",
            "Nometnēs",
            "Profesionālu videoklipu uzņemšanā",
            "Fotosesijās",
            "Šovos",
            "u. c. pasākumos",
        ],
    },
];
const services: Service[] = [
    {
        title:
            "Maksa par mēnesi deju studijā VIRZIENS 2023./2024. deju sezonā, sākot ar augustu.",
        prices: [
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
];

// Check if the device is a desktop PC
function isDesktop() {
    return !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

// Check if the device is a mobile device
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function redirectToCall() {
    if (device.isMobile) {
        window.location.href = "tel:+37129445989"
    } else {
        router.push({ path: "/contacts" })
    }
}

</script>
<template>
    <Header class="bg-black" />
    <main class="bg-gray-100 py-8 px-4">
        <section class="max-w-4xl mx-auto mb-8  ">

            <div>
                <button @click="redirectToCall"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full uppercase">
                    piesakies deju nodarbībām!
                </button>
            </div>
            <div class="flex flex-col gap-9">
                <div v-for="course in courses">
                    <h1 class="text-xl font-bold mb-6">{{ course.title }}</h1>
                    <div class="ml-12">
                        <ul>
                            <li v-for="item in course.list" class="list-disc">
                                <div v-html="item"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            
        </section>



        <section v-for="offer in offers" class="max-w-4xl mx-auto pt-8 border-t-2 border-slate-700">
            <div class="text-center mb-8">
                <button @click="redirectToCall"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full">
                    {{ offer.title }}
                </button>
            </div>
            <div class="d p-4 mb-8">
                <p class="text-gray-800">{{ offer.text }}</p>
            </div>

         
        </section>


     


        <section class="max-w-4xl mx-auto mb-8 px-8">

            <div class="flex flex-col gap-9">
                <div v-for="colab in colabs">
                    <h1 class="text-xl font-bold mb-6">{{ colab.title }}</h1>
                    <div class="ml-12">
                        <ul>
                            <li v-for="item in colab.list" class="list-disc">
                                <div v-html="item"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

       

        <section class="max-w-4xl mx-auto border-t-2 border-slate-600 pt-8 ">
            <div class="text-center">
                <h2 class="text-2xl font-semibold my-4 uppercase">cenas</h2>
            </div>
            <div>
            
                <div>
                    <div v-for="service in services" class="mb-4">
                        <div>
                            <div class="mb-2">
                                <h4 class="text-lg font-semibold">{{ service.title }}</h4>
                            </div>
                            <div v-if="service.prices" class="ml-12">
                                <Prices :prices="service.prices" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <div class="max-w-4xl mx-auto"></div>
    </main>
</template>
