<script setup>
import { reactive, ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";
import InputEmail from "./Small/InputEmail.vue";
import InputPassword from "./Small/InputPassword.vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import LogoHeading from "./Small/LogoHeading.vue";

const user = reactive({
  email: "",
  password: "",
});
const router = useRouter();
const errMsg = ref("");
const spinner = ref(false);

// Sign Up using Email and Password
const signin = () => {
  spinner.value = true;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => {
      router.push("/recipes");
    })
    .catch((error) => {
      spinner.value = false;
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid Email.";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with the email was found!";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect Password.";
          break;
        default:
          errMsg.value = "Email and Password was Incorrect.";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/recipes/overview");
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <div class="pl-10 pr-20 w-[500px]">
    <!-- Logo Name -->
    <LogoHeading />
    <h1 class="text-2xl font-Prosto font-bold py-2">Sign In</h1>
    <div class="space-y-2">
      <!-- Email -->
      <InputEmail v-model:email="user.email" />
      <!-- Password -->
      <InputPassword v-model:password="user.password" title="Password" />
      <div class="flex items-center pt-1">
        <input
          type="checkbox"
          class="h-4 w-4 accent-yellow-400 cursor-pointer"
        />
        <p class="ml-2">Remember me.</p>
        <div
          class="ml-auto text-yellow-400 hover:underline hover:text-yellow-500 cursor-pointer"
        >
          Forget Password
        </div>
      </div>
      <!-- Button -->
      <div class="pt-2 flex items-center">
        <ButtonComponent @click="signin" class="bg-red-600"
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
            <h1 v-else>Sign In</h1>
          </span></ButtonComponent
        >
      </div>
      <div v-if="errMsg" class="text-sm text-yellow-400 absolute">
        {{ errMsg }}
      </div>
    </div>
    <div class="text-gray-400 my-4">
      ______________________<span class="relative top-2"> OR </span
      >______________________
    </div>
    <div>
      <ButtonComponent
        @click="signInWithGoogle"
        class="w-full border-2 border-yellow-400 mt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="30px"
          height="30px"
          class="inline"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
        Sign In with Google</ButtonComponent
      >
      <h1 class="text-center mt-4 text-sm">
        New Lovebirds?
        <RouterLink
          to="/signup"
          class="text-yellow-400 cursor-pointer hover:underline"
          >Create Account</RouterLink
        >
      </h1>
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
