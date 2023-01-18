<script setup>
import { ref, onMounted, watchEffect } from "vue";
import RecipeCard from "../../components/Small/RecipeCard.vue";
import { fetchRecipe } from "../../js";

const apiUrlSweets = ref(
  `https://api.edamam.com/api/recipes/v2?type=public&q=sweets&app_id=a5383dfa&app_key=1d67f82b2789019aa619f5b6555ca04f`
);
const apiUrlBakery = ref(
  `https://api.edamam.com/api/recipes/v2?type=public&q=bakery&app_id=a5383dfa&app_key=1d67f82b2789019aa619f5b6555ca04f`
);
const sweets = ref(null);
const bakery = ref(null);
onMounted(async () => {
  sweets.value = await fetchRecipe(apiUrlSweets.value);
  bakery.value = await fetchRecipe(apiUrlBakery.value);
});
watchEffect(async () => {
  sweets.value = await fetchRecipe(apiUrlSweets.value);
  bakery.value = await fetchRecipe(apiUrlBakery.value);
});
setInterval(() => {
  if (sweets.value._links.next.href) {
    apiUrlSweets.value = sweets.value._links.next.href;
  }
  if (bakery.value._links.next.href) {
    apiUrlBakery.value = bakery.value._links.next.href;
  }
}, 360000);
</script>

<template>
  <div>
    <div v-if="sweets" class="p-1">
      <h1 class="text-4xl font-bold font-serif">Sweets</h1>
      <div class="overflow-auto whitespace-nowrap rounded-lg space-x-10">
        <span
          class="inline-block"
          v-for="(recipe, index) in sweets.hits"
          :key="index"
        >
          <RecipeCard :recipe="recipe" />
        </span>
      </div>
    </div>
    <div v-if="bakery" class="p-1">
      <h1 class="text-4xl font-bold font-serif">Bakery</h1>
      <div class="overflow-auto whitespace-nowrap rounded-lg space-x-10">
        <span
          class="inline-block"
          v-for="(recipe, index) in bakery.hits"
          :key="index"
        >
          <RecipeCard :recipe="recipe" />
        </span>
      </div>
    </div>
  </div>
</template>
