<script setup>
import ButtonComponentVue from "./components/ButtonComponent.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const hideHeader = computed(() => {
  return route.path === "/signup" || route.path === "/signin";
});
</script>

<template>
  <div>
    <!-- HEADING SECTION -->
    <header
      v-show="!hideHeader"
      class="backdrop-blur-sm text-white flex items-center shadow-2xl px-2"
    >
      <!-- Heading -->
      <h1
        class="p-3 text-4xl font-LogoFont font-bold underline underline-offset-8 decoration-yellow-500"
      >
        <span class="text-5xl text-red-600">R</span>ecipe<span
          class="text-yellow-500"
          >.</span
        >
      </h1>
      <!-- Button -->

      <div class="ml-auto w-1/2 flex justify-end items-center space-x-4 mr-2">
        <RouterLink to="/signup">
          <ButtonComponentVue class="bg-red-600">
            Sign Up For Free
          </ButtonComponentVue>
        </RouterLink>
        <RouterLink to="/signin">
          <ButtonComponentVue
            class="bg-transparent border-yellow-600 border-2"
            >Sign In</ButtonComponentVue
          >
        </RouterLink>
      </div>
    </header>

    <!-- Router View -->
    <RouterView />
  </div>
</template>
