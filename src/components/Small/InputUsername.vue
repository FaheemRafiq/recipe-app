<script setup>
import {} from "vue";
defineEmits(["update:username"]);
defineProps(["username", "validUser"]);
</script>

<template>
  <div>
    <label for="username" class="text-lg">Username</label>
    <span
      :class="
        validUser.$error
          ? 'border-2 border-red-600 focus-within:border-red-600'
          : ''
      "
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
    <span v-if="validUser.$error" class="text-sm absolute text-yellow-400">{{
      validUser.$errors[0].$message
    }}</span>
  </div>
</template>
