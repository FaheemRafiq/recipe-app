<script setup>
// Start Imports
import { reactive, computed, ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import InputEmail from "./Small/InputEmail.vue";
import InputPassword from "./Small/InputPassword.vue";
import InputUsername from "./Small/InputUsername.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import LogoHeading from "./Small/LogoHeading.vue";
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  sameAs,
  minLength,
  alphaNum,
} from "@vuelidate/validators";

// End Imports
const spinner = ref(false);

const user = reactive({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});
const rules = computed(() => ({
  username: { required, alphaNum, minLength: minLength(4) },
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirm_password: {
    required,
    sameAs: sameAs(user.password),
  },
}));
const router = useRouter();
const v$ = useVuelidate(rules, user);
// Sign Up using Email and Password
const register = () => {
  const auth = getAuth();
  v$.value.$validate();
  if (!v$.value.$error) {
    spinner.value = true;
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((data) => {
        console.log("Successfully Registered!");
        auth.currentUser.displayName = user.username;
        console.log(auth.currentUser);
        router.push("/recipes/overview");
      })
      .catch((error) => {
        spinner.value = false;
        console.log(error.code);
        alert(error.message);
      });
  }
};
</script>

<template>
  <div class="pl-10 pr-20 w-[500px]">
    <!-- Logo name -->
    <LogoHeading />

    <!-- Sign Up Section -->
    <h1 class="text-2xl font-Prosto font-bold py-2">Create Account</h1>
    <div class="space-y-4">
      <!-- Username -->
      <InputUsername
        v-model:username="user.username"
        :validUser="v$.username"
      />
      <!-- Email -->
      <InputEmail v-model:email="user.email" :validEmail="v$.email" />
      <!-- Password -->
      <InputPassword
        v-model:password="user.password"
        title="Password"
        :validPassword="v$.password"
      />
      <!-- Confirm_password -->
      <InputPassword
        v-model:password="user.confirm_password"
        title="Confirm Password"
        :validPassword="v$.confirm_password"
      />
    </div>
    <div class="mt-6 space-y-2">
      <span class="flex items-center text-white">
        <input
          v-model="isChecked"
          type="checkbox"
          class="w-4 h-4 accent-yellow-400 cursor-pointer"
        />
        <label for="link-checkbox" class="ml-2 text-sm font-medium"
          >I agree with the
          <a href="#" class="text-yellow-400 hover:underline"
            >terms and conditions</a
          >.</label
        >
      </span>
      <!-- Button -->
      <div class="pt-2">
        <ButtonComponent @click="register" class="bg-red-600"
          ><span class="flex">
            <div v-if="spinner" class="flex" role="status">
              <svg
                aria-hidden="true"
                class="inline w-6 h-6 mr-2 text-gray-200 animate-spin fill-gray-900"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <h1 class="">Wait...</h1>
            </div>
            <h1 v-else>Create Account</h1>
          </span></ButtonComponent
        >
      </div>
      <!-- If any account -->
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
