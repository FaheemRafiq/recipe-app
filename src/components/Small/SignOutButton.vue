<script setup>
import { ref, onMounted } from "vue";
import ButtonComponentVue from "../ButtonComponent.vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import AlertMessage from "./AlertMessage.vue";

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
  <div>
    <!-- Button -->
    <ButtonComponentVue
      @click="handleSignOut(shouldLogout)"
      v-if="isLoggedIn"
      class="bg-red-600"
      >Sign Out</ButtonComponentVue
    >
    <!-- Alert Message for Log Out -->
    <AlertMessage
      :alert-show="alertShow"
      @signOut="handleSignOut((shouldLogout = true))"
      @cancel="alertShow = false"
    />
  </div>
</template>
