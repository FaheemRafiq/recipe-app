<script setup>
import { defineProps } from "vue";
defineEmits(["update:email"]);
defineProps({
  email: String,
  validEmail: {
    value: Object,
    default: {},
  },
});
</script>

<template>
  <div>
    <label for="email" class="text-lg">Email</label>
    <span
      :class="
        validEmail.$error
          ? 'border-2 border-red-600 focus-within:border-red-600'
          : ''
      "
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
    <span v-if="validEmail.$error" class="text-sm absolute text-yellow-400">{{
      validEmail.$errors[0].$message
    }}</span>
  </div>
</template>
