<template>
  <div class="flex flex-col gap-5 lg:px-10">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">رزرو آنی و سریع</h1>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>
    <p>رزرو سریع اقامتگاه بدون نیاز به تأیید میزبان</p>
    <div>
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
        :breakpoints="{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 1.6 },
          900: { slidesPerView: 3.6 },
          1500: {
            slidesPerView: 4.6,
            spaceBetween: 10, // فاصله بین اسلایدها
          },
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
    <NuxtImg
      src="https://www.otaghak.com/_next/image/?url=https%3A%2F%2Fs3.afranet.net%2Fotg-images%2FWeb%2Fimages%2Fhomepageimages%2F1%2FHost-banner-wide.jpg&w=2048&q=40"
      alt="دعوت میزبان"
      class="rounded-xl mt-10 mob:hidden w-full h-auto"
      loading="lazy"
      width="1482"
      height="366"
    />
    <NuxtImg
      src="https://www.otaghak.com/_next/image/?url=https%3A%2F%2Fcdn.otaghak.com%2Fotg-images-new%2FLarge%2Fh2tvb3y0.mij.jpg&w=750&q=40"
      alt="دعوت میزبان"
      class="rounded-xl mt-10 lg:hidden w-full h-auto"
      loading="lazy"
       width="537"
      height="366"
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
