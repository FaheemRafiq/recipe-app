<script setup>
import { ref } from "vue";
import SignOutButton from "./Small/SignOutButton.vue";
import TeleportComponent from "./Small/TeleportComponent.vue";
const profile = ref(false);
</script>

<template>
  <div class="flex items-center">
    <img
      @click="profile = true"
      src="https://i.pinimg.com/736x/da/c7/bd/dac7bd954b00c78d8561c6a901276a68.jpg"
      alt="Image"
      class="w-12 h-12 rounded-full mr-2 cursor-pointer"
    />
    <div class="relative">
      <button class="peer text-lg font-serif font-semibold flex items-center">
        Faheem Rafiq
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 self-end ml-0.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      <!-- the menu here -->
      <div
        id="dropdown"
        class="hidden border p-5 rounded-lg flex-col absolute top-6 z-10 bg-white drop-shadow-lg hover:flex peer-hover:flex"
      >
        <div class="flex flex-col w-full rounded-lg mb-2 mx-2">
          <button
            class="cursor-pointer rounded-lg self-start px-3 py-2 border hover:bg-yellow-400"
            @click="profile = true"
          >
            Profile
          </button>
        </div>
        <SignOutButton class="ml-2" />
      </div>
    </div>
    <!-- Teleported Component -->
    <TeleportComponent :show="profile">
      <div class="flex justify-center">
        <div class="text-center">
          <img
            src="https://i.pinimg.com/736x/da/c7/bd/dac7bd954b00c78d8561c6a901276a68.jpg"
            alt="Image"
            class="w-96 h-96 rounded-full cursor-pointer"
          />
          <div class="text-5xl">Faheem Rafiq</div>
          <p class="text-gray-500 text-lg">Account Holder</p>
        </div>
      </div>
      <button
        class="bg-red-500 text-white p-1 px-3 absolute -top-2 -right-2 shadow-md shadow-black rounded-full text-md hover:bg-red-600"
        @click="profile = false"
      >
        X
      </button></TeleportComponent
    >
  </div>
</template>

<style scoped>
#dropdown {
  box-shadow: -1px -1px 20px 1px gray;
}
</style>
