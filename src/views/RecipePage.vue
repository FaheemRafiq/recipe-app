<script setup>
import RecipePageNavigationBar from "../components/RecipePageNavigationBar.vue";
import OverviewPage from "./RecipeViews/OverviewPage.vue";
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-gray-200">
    <div class="fixed">
      <RecipePageNavigationBar />
    </div>
    <div class="ml-[320px] mr-4 mt-2">
      <OverviewPage />
    </div>
  </div>
</template>
