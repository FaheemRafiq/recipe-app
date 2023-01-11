<script setup>
import RecipePageNavigationBar from "../components/RecipePageNavigationBar.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-200">
    <div class="fixed">
      <RecipePageNavigationBar />
    </div>
    <div class="ml-[320px] mr-4">
      <RouterView />
    </div>
  </div>
</template>
