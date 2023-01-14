<script setup>
defineProps(["show"]);
</script>
<template>
  <Teleport to="body">
    <div v-if="show" class="fixed top-0 z-10 w-full">
      <div
        class="min-h-screen backdrop-blur-sm flex items-center justify-center"
      >
        <div
          class="bg-white p-4 rounded-lg shadow-lg z-10 relative shadow-black"
        >
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
