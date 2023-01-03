<script setup>
import { reactive } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import InputEmail from "./Small/InputEmail.vue";
import InputPassword from "./Small/InputPassword.vue";
import InputUsername from "./Small/InputUsername.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import LogoHeading from "./Small/LogoHeading.vue";
const user = reactive({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});
const router = useRouter();

// Sign Up using Email and Password
const register = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => {
      console.log("Successfully Registered!");
      auth.currentUser.displayName = user.username;
      console.log(auth.currentUser, data);
      router.push("/recipes");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<template>
  <div class="pl-10 pr-20 w-[500px]">
    <!-- Logo name -->
    <LogoHeading />

    <!-- Sign Up Section -->
    <h1 class="text-2xl font-Prosto font-bold py-2">Create Account</h1>
    <div class="space-y-3">
      <!-- Username -->
      <InputUsername v-model:username="user.username" />
      <!-- Email -->
      <InputEmail v-model:email="user.email" />
      <!-- Password -->
      <InputPassword v-model:password="user.password" title="Password" />
      <!-- Confirm_password -->
      <InputPassword
        v-model:password="user.confirm_password"
        title="Confirm Password"
      />

      <div class="flex items-center text-white">
        <input
          id="yellow-checkbox"
          type="checkbox"
          class="w-4 h-4 accent-yellow-400"
          required
        />
        <label for="link-checkbox" class="ml-2 text-sm font-medium"
          >I agree with the
          <a href="#" class="text-yellow-400 hover:underline"
            >terms and conditions</a
          >.</label
        >
      </div>

      <!-- Button -->
      <div class="pt-2">
        <ButtonComponent @click="register" class="bg-red-600"
          >Create account</ButtonComponent
        >
      </div>
      <div>
        <p class="">
          Already have an account.<RouterLink
            to="/signin"
            class="text-yellow-400 hover:underline cursor-pointer"
          >
            Sign In</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ghostwhite;
}
</style>
