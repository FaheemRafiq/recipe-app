<script setup>
import { onMounted, ref, watchEffect, defineAsyncComponent } from "vue";
import { useQueryStore } from "../../stores/query";
import { fetchRecipe } from "../../js/index.js";
import RecipePageHeader from "../../components/RecipePageHeader.vue";
import RecipeCardSuspense from "../../components/Small/RecipeCardSuspense.vue";

// Code
const RecipeCard = defineAsyncComponent(() =>
  import("../../components/Small/RecipeCard.vue")
);
const data = ref(null);
const searchQuery = useQueryStore();
onMounted(async () => {
  data.value = await fetchRecipe(searchQuery.query);
  console.log(data.value);
});
watchEffect(async () => {
  data.value = await fetchRecipe(searchQuery.query);
});
</script>

<template>
  <div class="pb-10">
    <div class="sticky top-0 z-10">
      <RecipePageHeader />
    </div>
    <div v-if="data" class="grid grid-cols-3 items-center gap-4 mt-4">
      <span v-for="(recipe, index) in data" :key="index">
        <RecipeCard :recipe="recipe" />
      </span>
    </div>
    <div v-else class="grid grid-cols-3 items-center gap-4 mt-4">
      <span v-for="n in 6" :key="n">
        <RecipeCardSuspense />
      </span>
    </div>
  </div>
</template>

<style scoped></style>
