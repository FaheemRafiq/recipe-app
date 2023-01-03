<script setup>
import SignUpComponent from "../components/SignUpComponent.vue";
import SignIpComponent from "../components/SignInComponent.vue";
import ImageSliderVue from "../components/ImageSlider.vue";
import { useRoute } from "vue-router";

const router = useRoute();
</script>

<template>
  <div
    class="text-white relative top-20 -right-20 inline-flex border-b-4 border-r-4 border-b-yellow-600 border-r-red-600"
  >
    <section class="w-96 h-[600px]">
      <ImageSliderVue />
    </section>
    <!-- Register -->
    <section class="backdrop-blur-sm">
      <SignUpComponent v-show="router.path === '/signup'" />
      <SignIpComponent v-show="router.path === '/signin'" />
    </section>
  </div>
</template>
