<script setup lang="ts">
import TeamMember from "@/components/our-team/TeamMember.vue"
import ligitaImg from "@/assets/images/LIGITA.jpg"
import baibaImg from "@/assets/images/BAIBA.jpg"
import melanijaImg from "@/assets/images/MELANIJA.jpg"
import montaImg from "@/assets/images/MONTA.jpg"
import karlinaImg from "@/assets/images/Karlina.jpg"
import AnnijaImg from "@/assets/images/annija-placinda.jpg"

import LindaImg from "../assets/images/LindaKogana.jpeg"
import MaijaImg from "../assets/images/MaijaAnnaDudzinska.jpeg"
import ElinaImg from "../assets/images/ElinaEstereSlisane.jpeg"


import NavBar from "@/components/navbar/NavBar.vue"
import Header from "@/components/Header.vue"
import SocialIcons from "@/components/SocialIcons.vue"

import { useWindowSize } from "@/composables/window"
const {smallWindow,mediumWindow,largeWindow} = useWindowSize();

interface TeamMember {
    name: string;
    subtitle?: string;
    image: string;
    text?: string;

}

const teamMembers =
    [
        {
            name: "Ligita Apena",
            subtitle: "deju studijas VIRZIENS dibinātāja, vadītāja, trenere un horeogrāfe",
            image: ligitaImg,
            text:
                `<article>
                Dejas dzīve sākās trīs gadu vecumā uzsākot sporta dejas, tautas dejas un mākslas vingrošanu.
1977. gadā dejotāja ar izcilību beidza Leona Brunava Baleta studijas sešu gadu kursu mācību
programmā “Baleta mākslinieks”. Vēlāk deviņus gadus nostrādāja Tartu (Igaunijas) teātra
Vanemuine baleta grupā, kurā savas prasmes pilnveidoja pie tādiem deju meistariem kā Ülo
Vilimaa, Mäe Kaasik, Elena Poznjak-Kõlar, kā arī ieguva prestižo Igaunijas Kultūras ministrijas
Balletiartist kvalifikāciju.
1986. gadā atgriezās Latvijā un sāka strādāt - Jūrmalas koncertu apvienībā, Rīgas koncertu
apvienībā un MARK-SHOW. Ar krāšņām koncertprogrammām uzstājoties vairākas valstīs,
piemēram, Somijā, Šveicē, Norvēģijā, Zviedrijā, Vācijā, Bulgārijā, Polijā un Krievijā. Paralēli
darbam absolvēja Latvijas Kultūras koledžu (LKA) studiju programmu “Horeogrāfs, deju
kolektīva vadītājs”, kā arī Liepājas Universitātē ieguva kvalifikāciju pedagoģiskās darbības
veikšanai.
Profesionālās dejotājas gaitas noslēdzās 2000. gadā, kad tika dibināta deju studija “Virziens”, un
kļūstot par Sacensību solo deju konkursu un pasākumu organizatori.
Šobrīd turpina izglītot dejotājus, kuri gūst ievērojamus panākumus nacionālos un starptautiskos
Sacensību solo deju konkursos. Regulāri papildina savas zināšanas dažādās meistarklasēs,
tālākizglītības kursos, kā arī profesionālās pilnveides semināros Latvijā un ārpus tām robežām.
                </article>`,
        },
        {
            name: "Baiba Apena",
            subtitle: "deju studijas VIRZIENS līdzvadītāja, dejotāja, trenere, horeogrāfe un Serificēta Sacensību solo deju tiesnese",
            image: baibaImg,
            text: `<article> 
                Dejas ceļš aizsākās četru gadu vecumā, dejojot dažādu deju stilus bērnu grupā, savas mammas
Ligitas Apenas dibinātajā deju studijā “Virziens”. Sevi ir pilnveidojusi un piedalījusies vairākos
nozīmīgos pasākumos - “Bērnu un jauniešu deju festivāls” (Ungārijā 2004. gadā), starptautiskā
mēroga Sacensību solo deju konkursā (Vācijā, Berlīnē 2007.), Agra Daņiļeviča programmā
“Satikšanās dejā” (2009.), koncertprogrammā “Latvijai 100”, uzstājoties sešu mēnešu garumā uz
kruīza kuģa Tallink Romantika, kā arī vairākās meistarklasēs un privātstundās pie pasaules
mēroga Sacensību solo deju zvaigznēm - Roy Verdonk, Daniel Trepat, Roy Hadisubroto un
citiem.
Ar lieliskiem panākumiem ir pārstāvējusi Latviju starptautiskos Sacensību solo deju konkursos -
Lietuvā, Vācijā, Beļģijā, Norvēģijā, Šveicē, Apvienotajā Karalistē, Čehijā un citās valstīs.
Ieguvusi vairākus World Country Dance Federation (WorldCDF) titulus - pasaules
vicečempiones tituls Sacensību solo deju konkursā Novice Teen grupā (2010.), RISING STAR
(2014.) un visaugstāko titulu MEGASTAR (2015.).
Absolvējusi Latvijas Kultūras koledžas (LKA) studiju programmu “Deju kolektīva vadītājs ar
specializāciju mūsdienu dejā” un ieguvusi pedagoga sertifikātu, kā arī ir sertificēta Sacensību
solo deju tiesnese Global Organisation of Line Dance (GOLD) asociācijā. Sadarbojas ar
dažādiem Latvijas māksliniekiem un horeogrāfiem, kā arī regulāri tiek aicināta tiesāt sacensības
Latvijā un ārpus tām robežām.
            </article>`,
        },
        {
            name: "Karlīna Savicka",
            subtitle: "trenere un horeogrāfe",
            image: karlinaImg,
            
            text: `<article>
            
                Karlīna Savicka ir jutekliska dejotāja, kura ar dejošanu nodarbojas kopš 2012. gada. Apguvusi
vairākus deju stilus, tai skaitā laikmetīgo deju, šova deju, hiphop, fusion, dancehall, waacking un
citus. Kopš astoņu gadu vecuma nodarbojas ar Sacensību solo dejām, apgūstot valša, čačas, west
coast swing, džaiva un sambas deju elementus. Regulāri savas zināšanas pilnveido meistarklasēs
pie slaveniem deju horeogrāfiem un pasniedzējiem, piemēram, pie Daniel Trepat un Roy
Verdonk. Piedaloties Sacensību solo deju konkursos regulāri iegūst godalgotas vietas gan
Latvijā, gan ārpus tās, tostarp Lietuvā, Igaunijā, Šveicē, Vācijā un Dānijā, sasniedzot
Intermediate līmeni. 2019. gadā Vācijā dejotāja izcīnīja pirmo vietu Novice grupā WorldCDF
pasaules čempionātā. Aktīvi iesaistās deju videoklipu filmēšanā un dažādos korporatīvajos
pasākumos. Uzstājusies 2023. gadā televīzijas raidījuma Muzikālās bankas finālā Martas
Grigales priekšnesumā, bet 2024. gadā Starptautiskās Eirovīzijas dziesmu konkursa Latvijas
nacionālās atlases “Supernova” Edvarda Strazdiņa priekšnesumos kā viena no horeogrāfēm un
dejotājām.
Deju studijā “Virziens” aktīvi asistē pasniedzējus un veido horeogrāfijas deju priekšnesumiem
un videoklipiem. Regulāri piedaloties treniņu procesā, Karlīnas mērķis ir palīdzēt komandai
attīstīties par vēl labākiem dejotājiem.
            
            </article>`,
        },
     {
            name: "Monta Markus",
            subtitle: "trenere un horeogrāfe",
            image: montaImg,
            text: `<article>
            Monta Markus deju pasaulē atrodas no sešu gadu vecuma, un ir apguvusi dažādus deju stilus -
mūsdienu deju, latin jazz, hip-hop, comtemporary jazz, Sacensību solo dejas un laikmetīgo deju.
Māksliniece deju studijas “Virziens” sastāvā ir piedalījusies dažādos nacionāla un starptautiska
mēroga konkursos gan deju grupu sastāvā, gan Sacensību solo deju stilā individuāli. Par saviem
nozīmīgākajiem panākumiem atzīst - 2019. gada Vācijā WorldCDF rīkotajā Sacensību solo deju
pasaules čempionātā izcīnīto pirmo vietu Newcomer kategorijā, 2022. gadā uzsāka dalību Līgas
Libertes dejas teātra Mentoringa programmā, kur praktizēja savas prasmes baletā, akrobātikā,
laikmetīgās un džeza dejas tehnikā, kā arī 2022. gadā piedalījās “Smart Art Cabaret 36/37/38”
deju izrādē. Kopumā ir piedalījusies un piedalās visdažādākajos korporatīvajos un cita veida
pasākumos, piemēram, bagātinot mūzikas grupas Mazais princis priekšnesumus. Patstāvīgi
pilnveido savas zināšanas un dejas tehniku profesionālu dejotāju un horeogrāfu vadītāju
semināros un meistarklasēs.

            </article>`,
        },
        {
            name: "Elīna Estere Slišāne",
            subtitle: "trenere un horeogrāfe akrobātikā",
            image: ElinaImg,
            text: `<article>Latvijas Kultūras koledžas absolvente - deju kolektīva vadītāja ar specializāciju laikmetīgajā
dejā.
Jau četru gadu vecumā sāka nodarboties ar mākslas vingrošanu. Vēlāk pievērsās tieši mūsdienu,
šova un laikmetīgās dejas apguvei, attīstot prasmes gan Rīgas, gan Liepājas deju studijās.
Tā kā dejošana un bērni ir Elīnas sirdslieta, Elīna saprata, ka viņas aicinājums ir kļūt par
pedagogu, treneri un horeogrāfu. </article>`,
        },

            {
            name: "Linda Kogana",
            subtitle: "deju studijas “Virziens” dejotāja, trenere un horeogrāfe",
            image: LindaImg,
            text: `<article>Lindas deju dzīve aizsākās jau piecu gadu vecumā, dejojot tautas dejas un mākslas vingrošanu.
Pēc pāris gadiem pievienojās deju studijā “Virziens”, pilnveidojot sevi ne tikai dejojot grupā, bet
arī Sacensību solo dejās. Piedalījusies vairākos konkursos gan Latvijā, gan ārpus dzimtās valsts,
sacenšoties ar visdažādākajiem deju māksliniekiem.
Aktīva un dzīvespriecīga meitene, kurai vienmēr ir paticis būt uz skatuves, kā pati apgalvo:
“Vienmēr esmu sev teikusi, ka es dejoju, jo man tas patīk,” tāpēc ļoti intensīvi strādā ar sevi, lai
pilnveidotu, sasniegtu labus rezultātus un mācītu citus dejot, lai tie iemīl deju tik pat ļoti kā viņa
pati.
Lindas mērķis ir atvērt cilvēkiem acis deju pasaulē, radīt vēlmi nākt dejot, nebaidīties un izbaudīt
katru sekundi no tās. Redzot dejotāju smaidus un prieku, Lindai dod tikai lielāku motivāciju
turpināt vēl vairāk strādāt šajā sfērā. Vienmēr ir zinājusi, ka savu nākotni saistīs ar mākslu, un ir
pieņēmusi lēmumu iegūt Deju pedagoga grādu, iestājoties Latvijas Kultūras Akadēmijas
Latvijas kultūras koledžā.</article>`,
        },

         {
            name: "Maija Anna Dudzinska",
            subtitle: "deju studijas “Virziens” dejotāja, trenere un horeogrāfe",
            image: MaijaImg,
            text: `<article>Maija ar tautas dejām un sporta dejām sāka nodarboties no piecu gadu vecuma, dejojot trīs gadus
tautas dejas, bet septiņus gadus (2011. – 2018.) sporta dejas. Paralēli savu dejas tehniku attīstīja,
dodoties uz privātnodarbībām. Pēc sporta dejām, Maija uzsāka savas deju gaitas mūsdienu deju
stilu un Sacensību solo deju apgūšanā deju studijā “Virziens”, tomēr tautas dejas dejotājai bija
neatņemama sastāvdaļa, ka paralēli deju studijas “Virziens” nodarbībām, uzsāka dejot jauniešu
tautas deju kolektīvā “Pumpuri”. Uzstājoties ievērojamākajos tautas deju koncertos – 2022. gada
koncertuzvedumā “Dziesma dejo, deja skan” un 2023. gadā “Vispārējos latviešu dziesmu un
deju svētkos”.
Dejotāja regulāri piedalās deju koncertos, sacensībās, skatēs, pasākumos un meistarklasēs, kā
Maija pati saka: “Deja ir māksla, kuru var izveidot jebkurš un jebkur. Ar deju var izstāstīt veselu
stāstu, nepasakot ne vārda. Tajā var atslēgt prātu un domas un nodoties kustības vaļai, un tajā
brīdī justies labi un patiesi. Dejošana ir mans prieka avots, un tā ir nodarbošanās, kuru vēlos
klāstīt arī citiem.”</article>`,
        },
        
    ]

</script>
<template>


  
    <main class="min-h-screen"
    style=" background-image: url('https://images.pexels.com/photos/4286932/pexels-photo-4286932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    "
    >
         <Header/>

        <div>

            <div class="my-12">
                <h1 class="text-center text-[8vw] font-serif">
                    Mākslinieciskā komanda
                </h1>
            </div>

        </div>
        <div class="md:px-36 px-4  flex flex-col gap-16">
            <TeamMember v-for="member in teamMembers" :member="member" />


        </div>
         <div class="h-[15vh]">

        </div>
      <SocialIcons class="z-[999]"  />
    </main>
    
          
           
    
    
</template>