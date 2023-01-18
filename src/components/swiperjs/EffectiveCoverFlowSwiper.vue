<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(recipe, index) in data.hits" :key="index"
      ><RecipeCardVue :recipe="recipe"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  props: ["recipes"],
  components: {
    Swiper,
    SwiperSlide,
  },
  async setup() {
    const data = ref(null);
    const response = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=indian&app_id=a5383dfa&app_key=1d67f82b2789019aa619f5b6555ca04f"
    );
    const json = await response.json();
    data.value = json;
    return {
      modules: [EffectCoverflow, Pagination],
      data,
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
