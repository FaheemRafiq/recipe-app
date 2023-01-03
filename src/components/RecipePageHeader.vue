<script setup>
// Importing
import { ref, onMounted } from "vue";
import ButtonComponentVue from "./ButtonComponent.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import LogoHeading from "./Small/LogoHeading.vue";

// Applying
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

const router = useRouter();

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      router.push("/");
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <!-- HEADING SECTION -->
  <header class="backdrop-blur-sm text-white flex items-center shadow-2xl px-2">
    <!-- Logo Name -->
    <LogoHeading />
    <!-- Button -->
    <div class="ml-auto w-1/2 flex justify-end items-center space-x-4 mr-2">
      <ButtonComponentVue
        @click="handleSignOut"
        v-if="isLoggedIn"
        class="bg-red-600"
        >Sign Out</ButtonComponentVue
      >
    </div>
  </header>
</template>
