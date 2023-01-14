<script setup>
import TeleportComponent from "./TeleportComponent.vue";
import { ref } from "vue";
defineProps({
  recipe: Object,
});

const teleportShow = ref(false);
</script>

<template>
  <div
    @click="teleportShow = true"
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
  <!-- Teleport Component -->
  <TeleportComponent :show="teleportShow">
    <h1>{{ recipe.recipe.label }}</h1>
    <button
      class="bg-red-500 text-white p-1 px-3 absolute -top-2 -right-2 shadow-md shadow-black rounded-full text-md hover:bg-red-600"
      @click="teleportShow = false"
    >
      X
    </button>
  </TeleportComponent>
</template>
