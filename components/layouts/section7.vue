<template>
  <div class="flex flex-col gap-5 px-10">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">رزرو آنی و سریع</h1>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>
    <p>رزرو سریع اقامتگاه بدون نیاز به تأیید میزبان</p>
    <div>
      <swiper
        :breakpoints="{
          600: { slidesPerView: 3 },
          900: { slidesPerView: 3.6 },
        }"
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
            class="w-full object-cover object-center"
          />
        </swiper-slide>
        <!-- </div> -->
      </swiper>
    </div>
    <img
      class="rounded-xl mt-10"
      src="https://www.otaghak.com/_next/image/?url=https%3A%2F%2Fs3.afranet.net%2Fotg-images%2FWeb%2Fimages%2Fhomepageimages%2F1%2FHost-banner-wide.jpg&w=2048&q=75"
      alt=""
    />
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
  data: residences,
  pending,
  error,
  refresh,
} = await useFetch("/api/residences");
</script>
