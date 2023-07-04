import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import OurTeamView from "@/views/OurTeamView.vue";
import ContactsView from "@/views/ContactsView.vue";
import ServicesView from "@/views/ServicesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/team",
      name: "team",
      component: OurTeamView,
    },

    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsView,
    },
  ],
});

export default router
