<template>
  <div class="flex flex-col gap-3">
    <h1 class="text-xl font-semibold">پرایم</h1>
    <p>راحتی خیال با اقامتگاه‌های منتخب و آنی به همراه بسته بهداشتی سپید</p>
    <div>
      <swiper
        :slidesPerView="3.8"
        :navigation="true"
        :spaceBetween="30"
        :modules="modules"
        class="flex mySwiper"
      >
        <!-- <div  class=""> -->
        <swiper-slide v-for="product in products" class="h-10 ">
          <PartsProducts
            :product="product"
            class="w-full object-cover object-center rounded-xl"
          />
        </swiper-slide>
        <!-- </div> -->
      </swiper>
    </div>
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
import { Navigation } from "swiper/modules";
const modules = [Navigation];
</script>
