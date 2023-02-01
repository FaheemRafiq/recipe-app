<script setup>
import { onMounted, ref, watchEffect, computed } from "vue";
import { useQueryStore } from "../../stores/query";
import { fetchRecipe } from "../../js/index.js";
import RecipePageHeader from "../../components/RecipePageHeader.vue";
import RecipeCardSuspense from "../../components/Small/RecipeCardSuspense.vue";
import RecipeCard from "../../components/Small/RecipeCard.vue";

// code
const dataNotReceived = ref(true);
const data = ref(null);
const searchQuery = useQueryStore();
const apiURL = computed(() => {
  return `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery.query}&app_id=a5383dfa&app_key=1d67f82b2789019aa619f5b6555ca04f`;
});
onMounted(async () => {
  data.value = await fetchRecipe(apiURL.value);
  setTimeout(() => {
    dataNotReceived.value = false;
  }, 1500);
});
watchEffect(async () => {
  data.value = await fetchRecipe(apiURL.value);
});

async function loadMoreRecipes(url) {
  let response = await fetchRecipe(url);
  data.value.hits = [...data.value.hits, ...response.hits];
  data.value._links.next = response._links.next;
}
</script>

<template>
  <div class="pb-10">
    <div class="sticky top-0 z-10">
      <RecipePageHeader />
    </div>
    <div
      v-if="dataNotReceived"
      class="grid grid-cols-4 items-center gap-4 mt-4"
    >
      <span v-for="n in 8" :key="n">
        <RecipeCardSuspense />
      </span>
    </div>
    <div
      v-if="data"
      class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto sm:gap-4 mt-4"
    >
      <span v-for="(recipe, index) in data.hits" :key="index">
        <RecipeCard :recipe="recipe" />
      </span>
    </div>
    <!-- More Recipes -->
    <div v-if="data" class="flex justify-center mt-10">
      <button
        @click="loadMoreRecipes(data._links.next.href)"
        :disabled="!data._links.next"
        class="bg-gray-300 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed hover:bg-gray-400 p-2 rounded-full"
      >
        More Recipes
      </button>
    </div>
  </div>
</template>
