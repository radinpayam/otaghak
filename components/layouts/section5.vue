<template>
  <div class="flex flex-col gap-2 lg:px-10">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">پرایم</h1>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>
    <p>راحتی خیال با اقامتگاه‌های منتخب و آنی به همراه بسته بهداشتی سپید</p>
  </div>
  <div class="relative w-full mt-5 lg:px-10">
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
    <swiper
    v-else
    :navigation="true"
      :breakpoints="{
        0: { slidesPerView: 1 },
        600: { slidesPerView: 1.6 },
        900: { slidesPerView: 3.6 },
        1500: {
          slidesPerView: 4.6,
          spaceBetween: 10, // فاصله بین اسلایدها
        },
      }"
      :spaceBetween="10"
      :modules="modules"
      class="flex mySwiper"
    >
      <swiper-slide
        v-for="residence in residences"
        :key="residence.id"
      >
        <PartsResidences
          :residence="residence"
          class="w-full bg-white rounded-xl pb-2"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";
</style>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const modules = [Navigation];
const {
  data: residences,
  pending,
  error,
  refresh,
} = await useFetch("/api/residences");
</script>
