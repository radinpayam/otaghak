<template class="">
  <div class="flex flex-col bg-[#F4F4F8] px-10">
    <h1 class="text-xl font-semibold">اقامتگاه های تهران</h1>
    <p class="text-base">اجاره روزانه آپارتمان، خانه مبله و سوئیت در تهران</p>
    <nuxtLink to="/" class="text-[#6685FE]">نمایش همه</nuxtLink>
    <swiper
      :slidesPerView="3.8"
      :navigation="true"
      :spaceBetween="10"
      :modules="modules"
      class="flex mySwiper bg-[#F4F4F8]"
    >
      <!-- <div  class=""> -->
      <swiper-slide v-for="product in products" class="h-10">
        <PartsProducts
          :product="product"
          class="w-full object-cover object-center bg-white rounded-xl p-1"
        />
      </swiper-slide>
      <!-- </div> -->
    </swiper>
  </div>
  <div class="flex gap-4 px-10">
    <div v-for="feature in features" class="">
      <PartsFeatures :feature="feature" />
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
const { data: features } = await useFetch("/api/features");
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const modules = [Navigation];
</script>
