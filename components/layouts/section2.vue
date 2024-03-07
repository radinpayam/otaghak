<template>
  <div class="flex px-10 flex-col gap-3">
    <div class="flex justify-between">
      <p class="text-2xl">تخفیف ویژه</p>
      <NuxtLink to="/"><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink /></NuxtLink>
    </div>

    <p class="text-base">اقامتگاه‌های دارای تخفیف ویژه 🤩</p>
    <swiper
      :navigation="true"
      :breakpoints="{
        0: {
          slidesPerView: 1.3,
        },
        600: { slidesPerView: 3 },
        900: { slidesPerView: 3.6 },
      }"
      :spaceBetween="10"
      :modules="modules"
      class="flex mySwiper mx-[40vw]"
    >
      <swiper-slide
        v-for="residence in residences"
        class="w-full"
        :key="residence.id"
      >
        <PartsResidences
          :residence="residence"
          class="w-full h-[50vh] object-cover object-center"
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
