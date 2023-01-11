<script setup>
defineProps({
  recipe: Object,
});
</script>

<template>
  <div
    class="bg-white relative inline-block w-[350px] overflow-hidden h-auto cursor-pointer p-1 rounded-lg shadow-md shadow-black hover:shadow-lg hover:shadow-black transition-all duration-300"
  >
    <img
      class="w-full rounded-md hover:scale-100 transition-all duration-300"
      :src="recipe.recipe.image"
      alt="Food Title"
    />
    <div
      class="text-center w-full p-0.5 bg-yellow-400 absolute bottom-0 right-0 rounded-t-xl"
    >
      <h1 class="text-xl font-serif font-bold">
        {{ recipe.recipe.label }}
      </h1>
      <h4 class="text-gray-600 text-lg">
        {{ Math.round(recipe.recipe.calories) }}cal
      </h4>
    </div>
  </div>
</template>