<script setup>
import { onMounted, ref, watchEffect, defineAsyncComponent } from "vue";
import RecipePageHeader from "../../components/RecipePageHeader.vue";
import { useQueryStore } from "../../stores/query";
import { fetchRecipe } from "../../js/index.js";
// Code
const RecipeCard = defineAsyncComponent(() =>
  import("../../components/Small/RecipeCard.vue")
);
const data = ref(null);
const searchQuery = useQueryStore();
onMounted(async () => {
  data.value = await fetchRecipe(searchQuery.query);
});
watchEffect(async () => {
  data.value = await fetchRecipe(searchQuery.query);
});
</script>

<template>
  <div class="mb-10">
    <div>
      <RecipePageHeader />
    </div>
    <Suspense>
      <template #default>
        <div class="grid grid-cols-3 items-end space-y-5">
          <span v-for="(recipe, index) in data" :key="index">
            <RecipeCard :recipe="recipe" />
          </span>
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>
