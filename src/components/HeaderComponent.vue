<script setup>
import { ref, onMounted } from "vue";
import ButtonComponentVue from "./ButtonComponent.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRoute } from "vue-router";
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const router = useRoute();

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <!-- HEADING SECTION -->
  <header class="backdrop-blur-sm text-white flex items-center shadow-2xl px-2">
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
      <RouterLink v-if="!isLoggedIn" to="/signup">
        <ButtonComponentVue class="bg-red-600">
          Sign Up For Free
        </ButtonComponentVue>
      </RouterLink>
      <RouterLink v-if="!isLoggedIn" to="/signin">
        <ButtonComponentVue class="bg-transparent border-yellow-600 border-2"
          >Sign In</ButtonComponentVue
        >
      </RouterLink>
      <ButtonComponentVue
        @click="handleSignOut"
        v-if="isLoggedIn"
        class="bg-red-600"
        >Sign Out</ButtonComponentVue
      >
    </div>
  </header>
</template>
