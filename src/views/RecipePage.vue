<script setup>
import { getAuth } from "@firebase/auth";

const auth = getAuth();

console.log(window.localStorage);
console.log(auth.currentUser);
</script>

<template>
  <h1 v-show="auth" class="text-white">Recipe</h1>
</template>
