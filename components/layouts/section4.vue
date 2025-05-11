<template class="">
  <div class="flex flex-col gap-1">
    <div class="flex justify-between lg:px-7">
      <h1 class="text-xl font-bold">اقامتگاه های تهران</h1>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>
    <p class="text-base px-7">
      اجاره روزانه آپارتمان، خانه مبله و سوئیت در تهران
    </p>
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
          900: { slidesPerView: 3.6},
          1500: {
          slidesPerView: 4.6,
          spaceBetween: 10, // فاصله بین اسلایدها
        },
        }"
        :spaceBetween="10"
        :modules="modules"
        class="flex mySwiper"
      >
        <swiper-slide v-for="residence in residences" class="">
          <PartsResidences
            :residence="residence"
            class="w-full bg-white rounded-xl pb-2"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="flex mob:hidden gap-4 px-10 ">
    <div v-for="feature in features" :key="feature.id">
      <PartsFeatures :feature="feature" />
    </div>
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

const { data: residences, pending} = await useFetch("/api/residences");
const { data: features } = await useFetch("/api/features");
</script>
