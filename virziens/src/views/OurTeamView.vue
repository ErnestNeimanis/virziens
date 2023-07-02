<script setup lang="ts">
import TeamMember from "@/components/our-team/TeamMember.vue"
import ligitaImg from "@/assets/images/LIGITA.jpg"
import baibaImg from "@/assets/images/BAIBA.jpg"
import karlinaImg from "@/assets/images/KARLINA.jpg"
import melanijaImg from "@/assets/images/MELANIJA.jpg"
import montaImg from "@/assets/images/MONTA.jpg"
import NavBar from "@/components/navbar/NavBar.vue"


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
            subtitle: "deju studijas VIRZIENS dibinātāja, vadītāja, trenere un horeogrāfe.",
            image: ligitaImg,
            text:
                `Ligita Apena jau no trīs gadu vecuma uzsāka nodarboties ar sporta dejām, tautas dejām un mākslas vingrošanu. 1977. gadā dejotāja ar izcilību beidza Leona Brunava Baleta studijas sešu gadu kursu mācību programmā Baleta mākslinieks.
Vēlāk Ligitu Apenu uzņēma Tartu (Igaunijas) teātra Vanemuine baleta trupā, kur viņa nostrādāja deviņus gadus. Šajā laika posmā māksliniece savas prasmes pilnveidoja pie tādiem deju meistariem kā Ülo Vilimaa, Mäe Kaasik, Elena Poznjak-Kõlar, kā arī ieguva prestižo Igaunijas Kultūras ministrijas Balletiartist kvalifikāciju.
1986. gadā Ligita Apena atgriezās Latvijā un strādāja Jūrmalas koncertu apvienībā, Rīgas koncertu apvienībā un MARK-SHOW. Ar krāšņām koncertprogrammām dejotāja uzstājās Somijā, Šveicē, Norvēģijā, Zviedrijā, Vācijā, Bulgārijā, Polijā, Krievijā un citās valstīs.
Paralēli darbam koncerttrupās viņa absolvēja Latvijas Kultūras koledžu (LKA) studiju programmā Horeogrāfs, deju kolektīva vadītājs, kā arī Liepājas Universitātē ieguva kvalifikāciju pedagoģiskās darbības veikšanai.
Profesionālās dejotājas gaitas Ligita Apena noslēdza 2000. gadā, kad dibināja deju studiju VIRZIENS. Viņa kļuva par Sacensību solo deju konkursu un pasākumu organizatori. Šajā stilā māksliniece arī apmācīja savu meitu Baibu Andersoni, kura ir Sacensību solo deju pasaules čempione, sasniedzot augstāko iespējamo World Country Dance Federation (WorldCDF) līmeni – MEGASTAR.
Ligita Apena arī šobrīd izglīto dejotājus, kuri gūst ievērojamus panākumus nacionālos un starptautiskos Sacensību solo deju konkursos. Ar pieredzi bagātā dejotāja un trenere joprojām regulāri papildina savas zināšanas dažādās meistarklasēs, tālākizglītības kursos, kā arī profesionālās pilnveides semināros Latvijā un ārpus tās robežām.`,
        },
        {
            name: "Baiba Andersone",
            subtitle: "deju studijas VIRZIENS līdzvadītāja, dejotāja, trenere, horeogrāfe un Serificēta Sacensību solo deju tiesnese.",
            image: baibaImg,
            text: `Baiba Andersone ar deju iepazinās četru gadu vecumā, jo nebija jau īsti variantu – mamma bijusi profesionāla balerīna un izveidojusi deju studiju. Tur arī Baiba bērnībā pavadīja visu savu brīvo laiku, dejojot bērnu grupā un ar interesi vērojot lielos dejotājus.
Radošās gaitas un nozīmīgākie panākumi:
·         Dalība bērnu un jauniešu deju festivālā Ungārijā 2004. gadā
·         Aizvadīts pirmais starptautiska mēroga Sacensību solo deju konkurss Vācijā, Berlīnē 2007. gadā
·         Dalība Agra Daņiļeviča programmā Satikšanās dejā 2009. gadā
·         Iegūts WorldCDF pasaules vicečempiones tituls Sacensību solo deju konkursā Novice Teen grupā 2010. gadā
·         Dalība meistarklasēs un privātstundās pie pasaules mēroga Sacensību solo deju zvaigznēm - Roy Verdonk, Daniel Trepat, Roy Hadisubroto un citiem
·         Ar lieliskiem panākumiem pārstāvēts Latvijas gods starptautiskos Sacensību solo deju konkursos Eiropā: Lietuvā, Nīderlandē, Vācijā, Beļģijā, Dānijā, Zviedrijā, Norvēģijā, Šveicē, Apvienotajā Karalistē, Čehijā un citās valstīs
·         Iegūts WorldCDF RISING STAR tituls 2014. gadā
·         Iegūts WorldCDF MEGASTAR tituls 2015. gadā
·         Absolvēta Latvijas Kultūras koledža studiju programmā Deju kolektīva vadītājs ar specializāciju mūsdienu dejā, kā arī iegūts pedagoga sertifikāts
·         Dalība koncertorogrammā Latvijai 100, sešu mēnešu garumā uzstājoties uz kruīza kuģa Tallink Romantika
 
·         Kopā ar mammu Ligitu Apenu ir deju studiju VIRZIENS vadītāja, kā arī trenē dejotājus vecumā no 4 līdz 84 gadiem
·         Serificēta Sacensību solo deju tiesnese Global Organisation of Line Dance (GOLD) asociācijā, kas sniedz iespēju vērtēt dejotāju sniegumu sacensībās un piedalīties šovos visā pasaulē
·         Sadarbība ar dažādiem Latvijas māksliniekiem un horeogrāfiem
·         Regulāri tiek aicināta tiesāt sacensības Latvijā un ārpus tās robežām`,
        },
        {
            name: "Karlīna Savicka",
            subtitle: "deju studijas VIRZIENS treneru asistente un horeogrāfe.",
            image: karlinaImg,
            text: `Karlīna Savicka ir jutekliska dejotāja, kura ar deju nodarbojas kopš 2012. gada, un ir deju studijas VIRZIENS Adult grupas sastāvā. Dejotāja ir apguvusi vairākus deju stilus, tai skaitā Laikmetīgo deju, Šova deju, HipHop, Fusion, DanceHall, Waacking un citus. Karlīna Savicka vienmēr aktīvi iesaistās deju videoklipu filmēšanā un dažādos korporatīva pasākumos. 2023. gada janvārī māksliniece uzņēmās lomu Martas Grigales priekšnesumā televīzijas raidījuma Muzikālā banka finālā.
Paralēli Mūsdienu dejām Karlīna Savicka kopš astoņu gadu vecuma nodarbojas ar Sacensību solo dejām. Viņa ir apguvusi Valša, Čačas, West Coast Swing, Džaiva un Sambas deju elementus šajā stilā, savas zināšanas regulāri pilnveidojot meistarklasēs pie slaveniem deju horeogrāfiem un pasniedzējiem, piemēram, Daniel Trepat un Roy Verdonk.
Piedaloties Sacensību solo deju konkursos Karlīna Savicka regulāri iegūst godalgotas vietas gan Latvijā, gan ārvalstīs, tostarp Lietuvā, Igaunijā, Šveicē, Vācijā un Dānijā, sasniedzot Intermediate līmeni. 2019. gadā dejotāja izcīnīja pirmo vietu Novice grupā WorldCDF pasaules čempionātā Vācijā.
Deju studijā VIRZIENS Karlīna Savicka iesaistās ne tikai kā dejotāja, bet arī aktīvi asistē pasniedzējus un veido horeogrāfijas deju priekšnesumiem un videoklipiem. Regulāri piedaloties treniņu procesā, dejotājas mērķis ir palīdzēt komandai attīstīties par vēl labākiem dejotājiem.`,
        },
        {
            name: "Melānija Vaivode-Šulte",
            subtitle: "deju studijas VIRZIENS dejotāja, trenere un horeogrāfe.",
            image: melanijaImg,
            text: `Melānija Vaivode-Šulte jau no četru gadu vecuma apmeklēja baleta nodarbības pie pasniedzējas Intas Karules-Teikmanes un paralēli Jūrmalas Sporta skolā nodarbojās ar mākslas vingrošanu. Uzsākot skolas gaitas, jaunā censone apguva arī tautas dejas.
Deju studijai VIRZIENS Melānija Vaivode-Šulte pievienojās vecumā, kad sāka mācīties trešajā klasē. Tas viņai ir devis iespēju attīstīt savas dejotprasmes dažādos grupu deju stilos, kā arī pievērsties Sacensību solo dejām. Regulāri piedaloties konkursos un koncertos, Melānija Vaivode-Šulte deviņu gadu laikā Sacensību solo dejās ir sasniegusi Advanced līmeni.
Dejotāja ir guvusi ievērojamus panākumus starptaustiskās sacensībās ārvalstīs, piemēram, Dānijā, Zviedrijā, Austrijā, Vācijā un Lietuvā. Melānijai Vaivodei-Šultei pieder 2019. gada pasaules čempiones tituls WorldCDF Novice youth kategorijā, kā arī māksliniece izpelnījusies pasaules čempiones godu 2022. gada GOLD sacensībās Intermediate Youngster kategorijā.
Prasmes deju mākslā Melānija Vaivode-Šulte jau no agra vecuma ir pilnveidojusi pie cienījamiem treneriem un horeogrāfiem, piemēram, Reiņa Dāga Zvirgzdiņa, Artūra Fatjkina, Dārtas Ģīles, Elīzas Kaijas Kažemakas un citiem.
No 12 gadu vecuma Melānija Vaivode-Šulte deju studijā VIRZIENS darbojas kā treneru asistente, salīdzinoši īsā laika periodā uzkrājot pietiekami daudz noderīgu zināšanu, lai 16 gadu vecumā sāktu strādāt par pastāvīgu treneri Kids ll un Juniori l grupām. Paralēli nodarbību vadīšanai, dejotāja veido horeogrāfijas, piemēram, šova dejām, ar kurām tiek gūti ievērības cienīgi panākumi deju sacensībās.`,
        },
        {
            name: "Monta Markus",
            subtitle: "deju studijas VIRZIENS dejotāja, trenere un horeogrāfe.",
            image: montaImg,
            text: `Monta Markus deju pasaulē atrodas no sešu gadu vecuma, un ir apguvusi dažādus deju stilus: Mūsdienu deju, Latin Jazz, Hip-Hop, Comtemporary Jazz, Sacensību solo dejas un Laikmetīgo deju. Māksliniece deju studijas VIRZIENS sastāvā piedalījusies dažādos nacionāla un starptautiska mēroga konkursos gan deju grupu sastāvā, gan individuāli, Sacensību solo deju stilā.
Nozīmīgākie panākumi:
2019. gadā WorldCDF rīkotajā Sacensību solo deju pasaules čempionātā Vācijā izcīnīta pirmā vieta Newcomer kategorijā.
2022. gadā dalība Līgas Libertes dejas teātra Mentoringa programmā, kur tika gūtas prasmes baletā, akrobātikā, Laikmetīgās un Džeza dejas tehnikā.
2022. gadā dalība Smart Art Cabaret 36/37/38 deju izrādē.
Monta Markus kā dejotāja piedalījusies visdažādākajos korporatīva un citos pasākumos, piemēram, bagātinot mūzikas grupas Mazais princis priekšnesumu. Māksliniece regulāri pilnveido savas zināšanas profesionālu dejotāju un horeogrāfu vadītajos semināros un meistarklasēs.`,
        },
    ]

</script>
<template>
    <div class=" sticky -top-6 pt-8 bg-white ">
        <NavBar />
    </div>
    <div>
        <div>



            <div class="my-12">
                <h1 class="text-center text-[8vw]">
                    Mākslinieciskā komanda
                </h1>
            </div>

        </div>
        <div class="md:px-24 px-4 flex flex-col gap-16">
            <TeamMember v-for="member in teamMembers" :member="member" />


        </div>
    </div>
</template>