<script setup>
import { ref, watchEffect } from "vue";
import { useQueryStore } from "../../stores/query";
import { useAutoComplete } from "../../js/index.js";

// Code
const searchQuery = useQueryStore();
const q = ref(null);

function updateQuery() {
  searchQuery.query = q.value;
  q.value = null;
}

const auto = ref("");
watchEffect(async () => {
  auto.value = await useAutoComplete(q.value);
});

function searchSelectedQuery(el) {
  searchQuery.query = el.target.innerHTML;
  auto.value = "";
  q.value = null;
}
</script>

<template>
  <div>
    <section id="searchBar" class="flex items-center">
      <label for="simple-search" class="sr-only">Search</label>
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          v-model="q"
          @keydown.enter="updateQuery"
          type="text"
          id="simple-search"
          class="bg-gray-50 border rounded-3xl outline-none transition-all duration-300 focus-within:shadow-sm focus-within:shadow-black border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5"
          placeholder="Search"
          required
        />
        <div
          v-if="auto != ''"
          class="absolute top-12 border border-gray-400 bg-white w-full p-2 z-10 rounded-xl"
        >
          <ul>
            <li
              v-for="(recipeName, index) in auto"
              :key="index"
              @click="searchSelectedQuery"
              class="border-b-2 border-gray-200 p-2 hover:bg-gray-50 hover:shadow-md rounded-lg"
            >
              {{ recipeName }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
