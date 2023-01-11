<script setup>
import { defineAsyncComponent } from 'vue';

const OverviewRecipe = defineAsyncComponent(() => {
  return import("./RecipeViews/OverviewRecipes.vue");
});
</script>

<template>
  <div class="mx-44"><OverviewRecipe /></div>
</template>
