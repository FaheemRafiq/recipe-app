import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/signin",
      name: "SignIn",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/recipes",
      name: "Recipes",
      component: () => import("../views/RecipePage.vue"),
    },
  ],
});

export default router;
