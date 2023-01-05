<script setup>
import ButtonComponentVue from "./ButtonComponent.vue";
import LogoHeading from "./Small/LogoHeading.vue";
</script>

<template>
  <!-- HEADING SECTION -->
  <header class="backdrop-blur-sm text-white flex items-center shadow-2xl px-2">
    <!-- Logo Name -->
    <LogoHeading />
    <!-- Button -->
    <div class="ml-auto mr-2">
      <RouterLink to="/signin">
        <ButtonComponentVue class="bg-transparent border-yellow-600 border-2"
          >Sign In</ButtonComponentVue
        >
      </RouterLink>
    </div>
  </header>
</template>
