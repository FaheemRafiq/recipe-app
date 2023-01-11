import { ref } from "vue";

// Function
export const fetchRecipe = async (recipe) => {
  const data = ref(null);
  try {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=a5383dfa&app_key=1d67f82b2789019aa619f5b6555ca04f`
    );
    const json = await response.json();
    data.value = json.hits;
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
