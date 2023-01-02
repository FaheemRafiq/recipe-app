<script setup>
import ButtonComponentVue from "./ButtonComponent.vue";
const heroHeading = "Find delicious recipes and cooking inspiration.";
</script>

<template>
  <section class="w-[45%] text-white flex flex-col justify-center m-20">
    <h1 class="text-6xl font-LogoFont pb-8">
      {{ heroHeading }}
    </h1>
    <p class="font-ButtonFont py-2 pr-10">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to our recipe app!
      We're excited to bring you a wide selection of delicious recipes for every
      occasion. Our app is easy to use and packed with features to help you find
      exactly what you're looking for.
    </p>
    <p class="font-ButtonFont py-2 pr-10">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you're a food lover, you'll
      love our community features. You can save your favorite recipes, rate and
      review dishes you've tried, and even submit your own recipes to share with
      the community.
    </p>

    <ButtonComponentVue class="self-start mt-5 bg-red-600"
      >Browse Recipes Now</ButtonComponentVue
    >
  </section>
</template>
