<script setup>
defineProps({
  recipe: Object,
});
</script>

<template>
  <div
    id="card"
    class="bg-white inline-block w-[350px] h-[425px] cursor-pointer p-3 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black transition-all duration-300"
  >
    <img
      class="w-full rounded-md hover:scale-100 transition-all duration-300"
      :src="recipe.recipe.image"
      alt="Food Title"
    />
    <div class="text-center">
      <h1 class="text-xl font-serif font-bold">
        {{ recipe.recipe.label }}
      </h1>
      <h4 class="text-gray-600 text-lg">
        {{ Math.round(recipe.recipe.calories) }}cal
      </h4>
    </div>
  </div>
</template>
