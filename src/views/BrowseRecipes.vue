<script setup>
import { defineAsyncComponent } from "vue";

const OverviewRecipe = defineAsyncComponent(() => {
  return import("./RecipeViews/OverviewRecipes.vue");
});
</script>

<template>
  <div class="mx-44">
    <div class="fixed top-3 left-16">
      <RouterLink to="/">
        <div class="bg-gray-300 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
        </div>
      </RouterLink>
    </div>
    <OverviewRecipe />
  </div>
</template>
