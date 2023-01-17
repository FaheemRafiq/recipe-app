<script setup>
import {
  onMounted,
  ref,
  watchEffect,
  defineAsyncComponent,
  computed,
} from "vue";
import { useQueryStore } from "../../stores/query";
import { fetchRecipe } from "../../js/index.js";
import RecipePageHeader from "../../components/RecipePageHeader.vue";
import RecipeCardSuspense from "../../components/Small/RecipeCardSuspense.vue";

// Code
const RecipeCard = defineAsyncComponent(() =>
  import("../../components/Small/RecipeCard.vue")
);
const data = ref(null);
const previous = ref([]);
const searchQuery = useQueryStore();
const pages = ref(1);
const apiURL = computed(() => {
  return `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery.query}&app_id=a5383dfa&app_key=1d67f82b2789019aa619f5b6555ca04f`;
});
onMounted(async () => {
  data.value = await fetchRecipe(apiURL.value);
});
watchEffect(async () => {
  data.value = await fetchRecipe(apiURL.value);
});

async function apiUrlChanged(url) {
  previous.value.push(apiURL.value);
  data.value = await fetchRecipe(url);
  pages.value += 1;
}

async function previousUrl(url) {
  data.value = await fetchRecipe(url);
  previous.value.pop();
  pages.value -= 1;
}

function isDisable(from) {
  return from == 1;
}
</script>

<template>
  <div class="pb-10">
    <div class="sticky top-0 z-10">
      <RecipePageHeader />
    </div>
    <div
      v-if="data"
      class="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto sm:gap-4 mt-4"
    >
      <span v-for="(recipe, index) in data.hits" :key="index">
        <RecipeCard :recipe="recipe" />
      </span>
    </div>
    <div v-else class="grid grid-cols-3 items-center gap-4 mt-4">
      <span v-for="n in 6" :key="n">
        <RecipeCardSuspense />
      </span>
    </div>
    <!-- Pagination Links -->
    <div v-if="data" class="space-x-2 flex justify-center mt-10">
      <button
        :disabled="isDisable(data.from)"
        @click="previousUrl(previous[previous.length - 1])"
        class="bg-red-600 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed hover:bg-yellow-400 hover:text-black text-white p-2 rounded-full"
      >
        Previous Page
      </button>
      <button
        @click="apiUrlChanged(data._links.next.href)"
        :disabled="!data._links.next"
        class="bg-red-600 disabled:bg-gray-400 disabled:text-white disabled:cursor-not-allowed hover:bg-yellow-400 hover:text-black text-white p-2 rounded-full"
      >
        Next Page
      </button>
      <h1 class="self-center">
        {{ pages }} / {{ Math.round(data.count / 20) }}
      </h1>
    </div>
  </div>
</template>
