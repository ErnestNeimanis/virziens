<script setup lang="ts">
import Prices from "@/components/services/Prices.vue";
import ColabList from "@/components/services/ColabList.vue";
import NavBar from "@/components/navbar/NavBar.vue";
import Header from "@/components/Header.vue";
import LogoSmall from "@/components/utils/LogoSmall.vue";
import { useDeviceStore } from "@/stores/device.store";
import router from "@/router";
import type LogoSmallVue from "@/components/utils/LogoSmall.vue";

const device = useDeviceStore();
device.setDeviceType();


interface Service {
    title: string;
    text?: string;
    prices?: {
        amount: string | number;
        description?: string;
        nodisc?:boolean
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
        title: "PRIEKŠNESUMI",
        text: `Labprāt priecēsim Jūsu acis ar krāšņiem, dejiskiem, tehniskiem priekšnesumiem Jūsu pasākumos, piemēram, uzstāšanos jubilejās, ceremonijās, ballēs, dažādos svētkos, reklāmas videoklipu uzņemšanai vai jebkurā citā notikumā. Lai nodrošinātu augstvērtīgu kvalitāti, pielāgojam individuālu pieeju katram pasūtījumam atbilstoši Jūsu prasībām un vajadzībām. Esam atvērti jebkurai idejai!`,
    },
    {
        title: "SADARBĪBAS",
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
            `Hip Hop`,
            `Laikmetīgās dejas`,
            `House`,
            `Sacensību solo dejas`,
            `Džeza dejas`,
            `Lady style`,
            `Experimental`,
            `Fusion`,
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
            "Mēneša maksa deju studijā VIRZIENS 2023./2024:",
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
                amount: "",
                description: "VAI",
                nodisc:true
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



const section1 = [

    {
        container: "bg-blac text-black border-4 border-white shadow shadow-fuchsia-900 shadow-6xl",
        h1: "",
        content: "",
        listItem: "",
    },
    {
        container: "text-black border-4 border-white shadow shadow-fuchsia-900 shadow-6xl",
        h1: "",
        content: "",
        listItem: "",
    },
]

const section2 = [
    {
        section: "",
        button: "",
        content: "",

    },
    {
        section: "",
        button: "",
        content: "",

    },
]

const section3 = [
    {
        container: "bg-rose-100 text-black border-4 border-white shadow shadow-red-300 shadow-6xl",
        h1: "text-center",
        list: "",
        listItem: "font-semibold",

    },
    {
        container: "bg-rose-100 text-black border-4 border-white shadow shadow-red-300 shadow-6xl",
        h1: "text-center",
        list: "",
        listItem: "font-semibold",

    },

]


</script>
<template>


   
    <main class=" relative " style=" background-image: url('https://images.pexels.com/photos/4286932/pexels-photo-4286932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    ">

        <Header/>

        <section id="section1" class="max-w-4xl mx-auto mb-8  ">

       
                <div 
                    class="bg-rose-700 text-white text-center text-2xl font-extrabold py-2 px-4  w-full uppercase"
                   >
                    DEJU NODARBĪBAS
                </div>
         
            <div class="flex flex-col gap-9 my-8  ">
                <div v-for="(course, i) in courses" class=" p-8 "
                    :class="section1[i].container">
                    <h1 class="text-xl font-bold mb-6 font-serif" :class="section1[i].h1">{{ course.title }}</h1>
                    <div class="ml-12" :class="section1[i].content">
                        <ul>
                            <li v-for="item in course.list" class="list-disc font-serif text-xl"
                                :class="section1[i].listItem">
                                <div v-html="item"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>

          <section id="section4" class="max-w-4xl mx-auto ">
            <div class="text-center">
                <h2 class="text-2xl font-extrabold uppercase  bg-blue-950 mb-4 p-2 text-white">cenas</h2>
            </div>
            <div class="bg-blue-950 text-white   shadow shadow-fuchsia-900 shadow-6xl p-8 ">

                <div>
                    <div v-for="service in services" class="mb-4">
                        <div>
                            <div class="mb-2">
                                <h4 class="text-lg font-semibold">{{ service.title }}</h4>
                            </div>
                            <div v-if="service.prices" class="ml-12  font-bold">
                                <Prices :prices="service.prices" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <div class="max-w-4xl mx-auto mt-12 h-[2px] bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 w-full "></div>

        <!-- <section id="section2" v-for="(offer, i) in offers" class="max-w-4xl mx-auto pt-8 border-slate-700  "
            :class="section2[i].section">
            <div class="text-center mb-8">
                <button @click="redirectToCall" class="bg-rose-700 text-white font-semibold rounded py-2 px-4  w-full"
                    :class="section2[i].button">
                    {{ offer.title }}
                </button>
            </div>
            <div class="d p-4 mb-8 bg-black text-white text-center font-bold font-serif border-4 white "
                :class="section2[i].content">
                <p class="0">{{ offer.text }}</p>
            </div>

        </section> -->

         <section id="section2" class="max-w-4xl mx-auto pt-8  b-gradient-to-b from-transparent  via-white/50 to-transparent " >
        
            <div class="d p-4 mb-8  text-white  text-cente  text-[1.4rem]  font-serif  white ">
                <p class="0 text-black ">
                    Labprāt priecēsim Jūsu acis ar krāšņiem, dejiskiem, tehniskiem priekšnesumiem Jūsu pasākumos, piemēram, uzstāšanos jubilejās, ceremonijās, ballēs, dažādos svētkos, reklāmas videoklipu uzņemšanai vai jebkurā citā notikumā. Lai nodrošinātu augstvērtīgu kvalitāti, pielāgojam individuālu pieeju katram pasūtījumam atbilstoši Jūsu prasībām un vajadzībām. Esam atvērti jebkurai idejai!
                </p>
                <p class="text-black mt-4 font-extrabold  ">
                    Vienmēr esam atvērti gan nacionāla, gan starptautiska mēroga sadarbībām!
                </p>
            </div>

        </section>

<div class="max-w-4xl mx-auto my-12 h-[2px] bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 w-full "></div>



        <section id="section3" class="max-w-4xl mx-auto mb-8 p">

            <div class="flex flex-col gap-9">
                <div class="p-4" v-for="(colab,i) in colabs" :class="section3[i].container">
                    <h1 class="text-xl font-bold mb-6 " :class="section3[i].h1">{{ colab.title }}</h1>
                    <div class="ml-12 " :class="section3[i].list">
                        <ul>
                            <li v-for="item in colab.list" class="list-disc" :class="section3[i].listItem">
                                <div v-html="item"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>



      
        <div class="max-w-4xl mx-auto"></div>
    </main>
</template>

<style>
main-bg {}
</style>