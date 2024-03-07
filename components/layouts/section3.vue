<template>
  <div class="flex flex-col gap-3 px-10">
    <h1 class="text-xl font-semibold text-[#48484E]">محبوب ترین شهر ها</h1>
    <div class="flex gap-2">
      <PartsPopularCities
        v-for="popular in populars.slice(0, 4)"
        :popular="popular"
      />
    </div>
    <div class="flex gap-2">
      <PartsPopularCities
        v-for="popular in populars.slice(4, 8)"
        :popular="popular"
      />
    </div>
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";
</style>
<script setup>
const { data: populars } = await useFetch("/api/popular-cities");
</script>
