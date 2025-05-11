<template>
  <div class="flex lg:px-10 flex-col gap-3">
    <div class="flex justify-between">
      <p class="text-2xl">تخفیف ویژه</p>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>

    <p class="text-base">اقامتگاه‌های دارای تخفیف ویژه 🤩</p>
    <swiper
  :navigation="true"
  :breakpoints="{
    0: { slidesPerView: 1 },
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3.6 },
    1500: { slidesPerView: 5, spaceBetween: 10 },
  }"
  :spaceBetween="10"
  :modules="modules"
  class="flex mySwiper w-full h-[50vh]"
>
  <!-- Skeleton -->
  <swiper-slide
    v-if="pending"
    v-for="i in 5"
    :key="`skeleton-${i}`"
    class="h-[50vh] w-full max-w-[300px] rounded overflow-hidden"
  >
    <div class="w-full h-3/4 bg-gray-200 animate-pulse"></div>
    <div class="p-2 space-y-2">
      <div class="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
      <div class="h-3 w-1/2 bg-gray-200 animate-pulse rounded"></div>
    </div>
  </swiper-slide>
  <!-- محتوای واقعی -->
  <swiper-slide
    v-else
    v-for="residence in residences"
    :key="residence.id"
    class="h-[50vh] w-full"
  >
    <PartsResidences
      :residence="residence"
      class="w-full h-full object-cover object-center"
    />
  </swiper-slide>
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
