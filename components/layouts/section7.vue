<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-xl font-semibold">رزرو آنی و سریع</h1>
    <p>رزرو سریع اقامتگاه بدون نیاز به تأیید میزبان</p>
    <div>
      <swiper
        :slidesPerView="3.8"
        :navigation="true"
        :spaceBetween="30"
        :modules="modules"
        class="flex mySwiper"
      >
        <!-- <div  class=""> -->
        <swiper-slide v-for="product in products" class="h-10">
          <PartsProducts
            :product="product"
            class="w-full object-cover object-center"
          />
        </swiper-slide>
        <!-- </div> -->
      </swiper>
    </div>
    <img class="rounded-xl" src="https://www.otaghak.com/_next/image/?url=https%3A%2F%2Fs3.afranet.net%2Fotg-images%2FWeb%2Fimages%2Fhomepageimages%2F1%2FHost-banner-wide.jpg&w=2048&q=75" alt="">
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";

</style>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const modules = [Navigation];
const {
  data: products,
  pending,
  error,
  refresh,
} = await useFetch("/api/products");
</script>
