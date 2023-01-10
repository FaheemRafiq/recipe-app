import { ref } from "vue";
import { defineStore } from "pinia";

export const useQueryStore = defineStore("query", () => {
  const query = ref("chicken");
  return { query };
});
