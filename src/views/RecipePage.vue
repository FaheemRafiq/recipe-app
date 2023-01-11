<script setup>
import { defineAsyncComponent } from "vue";
import { useRoute } from "vue-router";
import RecipePageNavigationBar from "../components/RecipePageNavigationBar.vue";
import OverviewRecipes from "./RecipeViews/OverviewRecipes.vue";
const RecipesView = defineAsyncComponent(() => {
  return import("./RecipeViews/RecipesView.vue");
});

const route = useRoute();
</script>

<template>
  <div class="min-h-screen bg-gray-200">
    <div class="fixed">
      <RecipePageNavigationBar />
    </div>
    <div class="ml-[320px] mr-4">
      <OverviewRecipes v-show="route.path == '/recipes/overview'" />
      <RecipesView v-show="route.path == '/recipes/recipess'" />
    </div>
  </div>
</template>
