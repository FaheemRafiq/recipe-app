<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
const paths = ["/", "/signin", "/signup"];
</script>
<template>
  <div v-if="paths.includes(router.path)" id="container">
    <!-- Router View -->
    <RouterView />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style>
#container {
  background: url(./assets/vegetables-set-left-black-slate.jpg);
  background-size: cover;
  height: 100vh;
}
</style>
