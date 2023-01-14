<script setup>
import { defineProps, toRefs } from "vue";
import ButtonComponent from "../ButtonComponent.vue";
defineEmits(["signOut", "cancel"]);
const props = defineProps(["alertShow"]);
const { alertShow } = toRefs(props);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="alertShow"
      class="fixed top-0 h-full w-full flex justify-center items-center z-10 backdrop-blur-sm"
    >
      <div
        id="alert-additional-content-4"
        class="p-4 flex mb-4 bg-white text-black border-2 rounded-lg dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-800"
        role="alert"
      >
        <div class="text-end space-y-3">
          <div class="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-44 h-44 text-red-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <h3 class="text-lg font-medium">
              Are you sure you want to log out?
            </h3>
          </div>
          <div class="space-x-3">
            <ButtonComponent
              class="border-2 text-black px-4"
              @click="$emit('signOut')"
            >
              Yes
            </ButtonComponent>
            <ButtonComponent @click="$emit('cancel')" class="bg-black px-5">
              No
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
