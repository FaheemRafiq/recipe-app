<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const isSignUp = computed(() => {
  return router.path === "/signup";
});
defineProps(["errors"]);
</script>
<template>
  <Teleport to="body">
    <div v-if="isSignUp"
      class="absolute top-0 right-0 h-full w-[32%] py-5 mr-5 flex flex-col justify-end space-y-2 overflow-hidden"
    >
      <div
        v-for="error in errors"
        :key="error.$property"
        class="bg-black border-yellow-400 border-2 rounded-xl py-2 px-4 text-yellow-400 text-center text-sm w-full"
      >
        <div class="flex">
          <h1 class="font-bold">
            {{ error.$property.toLocaleUpperCase() }}
          </h1>
          &nbsp;:&nbsp;
          <p>{{ error.$message }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>
