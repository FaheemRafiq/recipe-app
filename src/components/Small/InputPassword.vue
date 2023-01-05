<script setup>
import { ref } from "vue";
defineProps({
  password: String,
  title: String,
  validPassword: {
    value: Object,
    default: {},
  },
});
defineEmits(["update:password"]);
const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div>
    <label for="password" class="text-lg">{{ title }}</label>
    <span
      :class="
        validPassword.$error
          ? 'border-2 border-red-600 focus-within:border-red-600'
          : ''
      "
      class="border-2 p-2 text-gray-300 rounded-lg flex items-center focus-within:border-yellow-600 py-1"
    >
      <input
        v-if="showPassword"
        autocomplete="off"
        type="text"
        class="w-full text-lg bg-transparent outline-none"
        name="password"
        id="password"
        :value="password"
        @input="$emit('update:password', $event.target.value)"
      />
      <input
        v-else
        autocomplete="off"
        type="password"
        class="w-full text-lg bg-transparent outline-none"
        name="password"
        id="password"
        :value="password"
        @input="$emit('update:password', $event.target.value)"
      />
      <i @click="togglePassword" class="px-1 text-white cursor-pointer">
        <!-- ShowPassword Eye -->
        <svg
          v-if="showPassword"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
        <!-- HidePassword Eye -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </i>
    </span>
    <span
      v-if="validPassword.$error"
      class="text-sm absolute text-yellow-400"
      >{{ validPassword.$errors[0].$message }}</span
    >
  </div>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: ghostwhite;
}
</style>
