<script setup>
import RecipePageNavigationBar from "../components/RecipePageNavigationBar.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-200">
    <div class="hidden sm:block fixed">
      <RecipePageNavigationBar />
    </div>
    <div class="sm:ml-[320px] sm:mr-4">
      <RouterView />
    </div>
  </div>
</template>
