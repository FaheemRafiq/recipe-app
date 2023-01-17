<script setup>
import TeleportComponent from "./TeleportComponent.vue";
import { ref, watch } from "vue";
defineProps({
  recipe: Object,
});
const teleportShow = ref(false);

// Stop scrolling the background cards if teleportShow is TRUE
watch(teleportShow, (newValue) => {
  if (newValue == true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

function firstCapitalWord(str) {
  let newStr = str
    .split(" ")
    .map((x) => {
      return x.charAt(0).toUpperCase() + x.slice(1);
    })
    .join(" ");
  return newStr;
}
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
    <div
      class="w-auto max-w-[700px] max-h-[700px] overflow-y-scroll overflow-x-hidden"
    >
      <div class="flex">
        <img :src="recipe.recipe.image" class="rounded" />
        <div class="p-1">
          <div class="text-center">
            <ul class="flex space-x-2">
              <li
                class="bg-red-600 text-white rounded-xl px-2"
                v-for="(cuisine, index) in recipe.recipe.cuisineType"
                :key="index"
              >
                {{ firstCapitalWord(cuisine) }}
              </li>
              <li
                class="bg-green-600 text-white rounded-xl px-2"
                v-for="(diet, index) in recipe.recipe.dietLabels"
                :key="index"
              >
                {{ firstCapitalWord(diet) }}
              </li>
              <li
                class="bg-yellow-500 text-white rounded-xl px-2"
                v-for="(meal, index) in recipe.recipe.mealType"
                :key="index"
              >
                {{ firstCapitalWord(meal) }}
              </li>
            </ul>
          </div>
          <h1 class="text-2xl font-bold text-center flex-wrap">
            {{ firstCapitalWord(recipe.recipe.label) }}
          </h1>
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-semibold">Ingredients</h1>
        <span class="text-md bg-yellow-400 px-2 py-1 rounded-full"
          >{{ Math.round(recipe.recipe.totalWeight) }}g</span
        >
      </div>
      <ul class="space-y-2">
        <li
          class="flex cursor-default"
          v-for="(ingredient, index) in recipe.recipe.ingredients"
          :key="index"
        >
          <img :src="ingredient.image" alt="Image" class="w-20 rounded-lg" />
          <div class="pl-2">
            <div class="flex space-x-1">
              <h1
                class="text-sm bg-red-600 text-white px-2 py-0.5 rounded-xl inline-block"
              >
                {{ firstCapitalWord(ingredient.food) }}
              </h1>
              <p class="bg-green-600 text-white rounded-xl px-2 text-sm py-0.5">
                {{ firstCapitalWord(ingredient.foodCategory) }}
              </p>
            </div>
            <p class="text-xl">
              {{ ingredient.text }}
            </p>
            <p
              class="text-sm bg-yellow-300 px-2 py-0.5 rounded-xl inline-block"
            >
              {{ Math.floor(ingredient.weight) }}g
            </p>
          </div>
        </li>
      </ul>
      <div class="flex flex-col items-center justify-center">
        <a
          :href="recipe.recipe.url"
          target="_blank"
          class="hover:bg-gray-300 bg-yellow-400 border-2 rounded-xl px-2 py-1 flex items-center"
          ><span class="text-lg">More Info</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg> </span
        ></a>
      </div>
    </div>
    <button
      class="bg-red-500 text-white p-1 px-3 absolute -top-2 -right-4 shadow-md shadow-black rounded-full text-md hover:bg-red-600"
      @click="teleportShow = false"
    >
      X
    </button>
  </TeleportComponent>
</template>
