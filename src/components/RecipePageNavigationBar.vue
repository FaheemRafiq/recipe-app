<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useRoute } from "vue-router";
// import SignOutButton from "./Small/SignOutButton.vue";
import UserAvatar from "./UserAvatar.vue";
const route = useRoute();
</script>

<template>
  <div class="bg-white px-4 md:px-8 pb-12">
    <!-- Logo Name -->
    <div class="pt-8">
      <div class="">
        <UserAvatar />
      </div>
      <nav class="pt-10">
        <ul class="space-y-6">
          <RouterLink
            to="/recipes/overview"
            :class="{
              'shadow-md text-gray-900 scale-105':
                route.path === '/recipes/overview',
            }"
            class="flex items-center pl-3 transition-all duration-500 cursor-pointer text-gray-600 hover:text-gray-900 hover:scale-105 hover:shadow-md p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              /></svg
            ><button type="button" class="text-xl ml-2">Overview</button>
          </RouterLink>
          <RouterLink
            to="/recipes/recipess"
            :class="{
              'shadow-md text-gray-900 scale-105':
                route.path === '/recipes/recipess',
            }"
            class="flex items-center pl-3 transition-all duration-500 cursor-pointer text-gray-600 hover:text-gray-800 p-1 hover:scale-105 hover:shadow-md rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              class="w-8 h-8"
              viewBox="0 0 64 64"
            >
              <path
                d="M50.21 59.56h-5.28a2 2 0 0 1 0-4h3.28v-42h-4.15v4.71a2 2 0 0 1-2 2H21.94a2 2 0 0 1-2-2v-4.72h-4.15v42h19.3a2 2 0 0 1 0 4h-21.3a2 2 0 0 1-2-2v-46a2 2 0 0 1 2-2h8.15a2 2 0 0 1 2 2v4.71h16.12v-4.71a2 2 0 0 1 2-2h8.15a2 2 0 0 1 2 2v46a2 2 0 0 1-2 2.01Z"
              />
              <path
                d="M42.06 20.26H21.94a2 2 0 0 1-2-2V6.44a2 2 0 0 1 2-2h20.12a2 2 0 0 1 2 2v11.82a2 2 0 0 1-2 2zm-18.12-4h16.12V8.44H23.94zm.83 16.1h-3a2 2 0 1 1 0-4h3a2 2 0 0 1 0 4zm17.46-.22H30.45a2 2 0 0 1 0-4h11.78a2 2 0 1 1 0 4zM24.77 43.93h-3a2 2 0 0 1 0-4h3a2 2 0 1 1 0 4zm17.46-.22H30.45a2 2 0 1 1 0-4h11.78a2 2 0 0 1 0 4z"
              /></svg
            ><button type="button" class="text-xl ml-2">Recipes</button>
          </RouterLink>
          <li
            class="flex items-center pl-3 transition-all duration-500 cursor-pointer text-gray-600 hover:text-gray-800 p-1 rounded-full hover:scale-105 hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <button type="button" class="text-xl ml-2">Favorite</button>
          </li>
          <li
            class="flex items-center pl-3 transition-all duration-500 cursor-pointer text-gray-600 hover:text-gray-900 hover:scale-105 hover:shadow-md p-1 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <button type="button" class="text-xl ml-2">Custom</button>
          </li>
        </ul>
      </nav>
      <div>
        <img
          class="relative xl:top-20 xl:left-2 hover:scale-105 transition-all duration-500"
          width="200"
          src="../assets/pngegg.png"
          alt="Food Plate"
        />
        <div
          class="bg-yellow-500 text-white px-5 h-44 flex flex-col justify-end pb-3 rounded-3xl"
        >
          <h1 class="text-xl mb-1 text-center">
            Add your own <span class="font-bold">Recipe</span>.
          </h1>
          <ButtonComponent class="bg-white text-yellow-700"
            >Add Now</ButtonComponent
          >
        </div>
      </div>
    </div>
  </div>
</template>
