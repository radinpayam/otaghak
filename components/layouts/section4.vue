<template class="">
  <div class="flex flex-col gap-1">
    <div class="flex justify-between px-7">
      <h1 class="text-xl font-bold">اقامتگاه های تهران</h1>
      <NuxtLink to="/"
        ><span class="text-[#446BFF]">نمایش همه</span><IconsFlashLink
      /></NuxtLink>
    </div>
    <p class="text-base px-7">
      اجاره روزانه آپارتمان، خانه مبله و سوئیت در تهران
    </p>
    <div class="bg-[#F4F4F8] relative w-full px-10 h-[80vh]">
      <div class="absolute left-0 w-[3vw] h-full bg-[#F4F4F8]"></div>
      <swiper
        :navigation="true"
        :breakpoints="{
          600: { slidesPerView: 3 },
          900: { slidesPerView: 3.6, showSwitchArrows: false },
        }"
        :spaceBetween="10"
        :modules="modules"
        class="flex mySwiper absolute top-24"
      >
        <!-- <div  class=""> -->
        <swiper-slide v-for="residence in residences" class="">
          <PartsResidences
            :residence="residence"
            class="w-full bg-white rounded-xl pb-2"
          />
        </swiper-slide>
        <!-- </div> -->
      </swiper>
    </div>
  </div>
  <div class="flex mob:hidden gap-4 px-10 mt-40">
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

const { data: residences } = await useFetch("/api/residences");
const { data: features } = await useFetch("/api/features");
onMounted(() => {
  document.querySelectorAll('.swiper-button-next')[1].style.backgroundColor = "#F4F4F8"
})
</script>
