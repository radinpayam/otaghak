<template>
  <p class="text-2xl">تخفیف ویژه</p>
  <p class="text-base">اقامتگاه‌های دارای تخفیف ویژه 🤩</p>
  <div class="flex">
    <swiper
      :slidesPerView="3.8"
      :navigation="true"
      :spaceBetween="30"
      :modules="modules"
      class="flex mySwiper mx-[40vw]"
    >
      <swiper-slide v-for="product in products" class="w-full">
        <PartsProducts :product="product" class="w-full h-[50vh] object-cover object-center" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";
</style>
<script setup>
const {
  data: products,
  pending,
  error,
  refresh,
} = await useFetch("/api/products");
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import {Navigation } from "swiper/modules";
const modules = [Navigation];
</script>
