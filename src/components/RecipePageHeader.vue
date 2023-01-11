<script setup>
// Importing
import { ref, onMounted } from "vue";
import ButtonComponentVue from "./ButtonComponent.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import AlertMessage from "./Small/AlertMessage.vue";
import SearchBar from "./Small/SearchBar.vue";

// Applying
const isLoggedIn = ref(false);
const alertShow = ref(false);
const shouldLogout = ref(false);
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

const handleSignOut = async (val) => {
  alertShow.value = true;
  if (val) {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => console.log(error));
  }
};
</script>

<template>
  <!-- HEADING SECTION -->
  <header
    class="bg-white text-black shadow-md flex items-center rounded-lg p-3"
  >
    <div class="w-2/3">
      <SearchBar />
    </div>
    <!-- Button -->
    <div class="ml-auto w-1/2 flex justify-end items-center space-x-4 mr-2">
      <ButtonComponentVue
        @click="handleSignOut(shouldLogout)"
        v-if="isLoggedIn"
        class="bg-red-600"
        >Sign Out</ButtonComponentVue
      >
    </div>
    <!-- Alert Message for Log Out -->
    <AlertMessage
      :alert-show="alertShow"
      @signOut="handleSignOut((shouldLogout = true))"
      @cancel="alertShow = false"
    />
  </header>
</template>
