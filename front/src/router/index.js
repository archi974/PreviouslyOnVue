import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "register",
      component:  import("../views/RegisterView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: '/select-profile/:token',
      name: 'selectProfileToken',
      params: true,
      component: () => import("../views/SelectProfileView.vue")
    },
    {
      path: '/select-profile/',
      name: 'selectProfile',
      params: true,
      component: () => import("../views/SelectProfileView.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
