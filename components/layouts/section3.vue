<template>
  <div class="px-10">
    <h1 class="text-xl font-semibold text-[#48484E]">محبوب ترین شهر ها</h1>
    <div class="grid grid-cols-4">
      <div class="flex col-span-1" v-for="popular in populars">
        <PartsPopularCities :popular="popular"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";
</style>
<script setup>
const { data: populars } = await useFetch("/api/popular-cities");
</script>
