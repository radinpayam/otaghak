<template>
  <div class="flex flex-col gap-2 px-10">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">پرایم</h1>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>
    <p>راحتی خیال با اقامتگاه‌های منتخب و آنی به همراه بسته بهداشتی سپید</p>
  </div>
  <div>
    <swiper
      :breakpoints="{ 600: { slidesPerView: 3 }, 900: { slidesPerView: 3.6 } }"
      :navigation="true"
      :spaceBetween="10"
      :modules="modules"
      class="flex mySwiper"
    >
      <!-- <div  class=""> -->
      <swiper-slide
        v-for="residence in residences"
        class="h-10"
        :key="residence.id"
      >
        <PartsResidences
          :residence="residence"
          class="w-full object-cover object-center rounded-xl"
        />
      </swiper-slide>
      <!-- </div> -->
    </swiper>
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";
</style>
<script setup>
const {
  data: residences,
  pending,
  error,
  refresh,
} = await useFetch("/api/residences");
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const modules = [Navigation];
</script>
