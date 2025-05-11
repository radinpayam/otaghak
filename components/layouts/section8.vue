<template>
  <div class="flex flex-col gap-4 lg:px-10">
    <h1 class="text-xl font-semibold">مجله‌ی اتاقک</h1>
    <!-- desktop -->
    <div class="flex mob:hidden gap-4">
      <div class="" v-for="journal in journals">
        <PartsJournals :journal="journal" />
      </div>
    </div>
    <!-- mobile -->
    <div class="lg:hidden">
      <swiper
      :breakpoints="{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
          1500: {
            slidesPerView: 4.6,
            spaceBetween: 10, // فاصله بین اسلایدها
          },
        }"
        :spaceBetween="30"
        :modules="modules"
        class="flex mySwiper"
      >
        <swiper-slide v-for="journal in journals">
          <PartsJournals :journal="journal" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const modules = [Navigation];
const {
  data: journals,
  pending,
  error,
  refresh,
} = await useFetch("/api/journals");
</script>
