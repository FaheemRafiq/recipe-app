import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
    // Browser Recipes Now
    {
      path: "/browse",
      component: () => import("../views/BrowseRecipes.vue"),
    },
    // After Login or signUp
    {
      path: "/recipes",
      name: "Recipes",
      component: () => import("../views/RecipePage.vue"),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "overview",
          component: () => import("../views/RecipeViews/OverviewRecipes.vue"),
        },
        {
          path: "recipess",
          component: () => import("../views/RecipeViews/RecipesView.vue"),
        },
      ],
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
