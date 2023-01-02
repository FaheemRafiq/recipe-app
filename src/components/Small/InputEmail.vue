<script setup>
defineEmits(["update:email"]);
defineProps(["email"]);
</script>

<template>
  <div>
    <label for="email" class="text-lg">Email</label>
    <span
      class="border-2 p-2 text-gray-300 rounded-lg flex items-center focus-within:border-yellow-600 py-1"
    >
      <input
        autocomplete="off"
        type="email"
        class="w-full text-lg bg-transparent outline-none"
        name="email"
        id="email"
        placeholder="example@gamil.com"
        :value="email"
        @input="$emit('update:email', $event.target.value)"
      />
    </span>
  </div>
</template>
