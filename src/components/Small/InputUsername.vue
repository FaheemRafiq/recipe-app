<script setup>
defineEmits(["update:username"]);
defineProps(["username"]);
</script>

<template>
  <div>
    <label for="username" class="text-lg">Username</label>
    <span
      class="border-2 text-gray-300 rounded-lg flex items-center focus-within:border-yellow-600 py-1"
    >
      <i class="px-1 text-white">@</i>
      <input
        autocomplete="off"
        type="text"
        class="w-full text-lg bg-transparent outline-none"
        name="username"
        id="username"
        placeholder="Jhon"
        :value="username"
        @input="$emit('update:username', $event.target.value)"
        required
      />
    </span>
  </div>
</template>
