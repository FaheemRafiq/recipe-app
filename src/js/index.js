import { ref } from "vue";

// Function
export const fetchRecipe = async (url) => {
  const data = ref(null);
  try {
    const response = await fetch(url);
    const json = await response.json();
    data.value = json;
  } catch (error) {
    console.log(error);
  }

  return data.value;
};

export const useAutoComplete = async (q) => {
  const list = ref(null);
  try {
    const response = await fetch(
      `https://api.edamam.com/auto-complete?app_id=1de7d82d&app_key=66a56d1d8234787b206df22616205d3c&q=${q}&limit=10`
    );
    const json = await response.json();
    list.value = json;
  } catch (error) {
    console.log(error);
  }

  return list.value;
}
