<script setup>
import CardsSwiper from "../components/CardsSwiper.vue";
import RecipePageHeader from "../components/RecipePageHeader.vue";
</script>

<template>
  <div>
    <RecipePageHeader />
    <div class="flex justify-center items-center h-[600px]">
      <CardsSwiper />
    </div>
  </div>
</template>
