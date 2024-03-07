<template>
  <div class="grid container mx-auto mob:grid-cols-4 lg:grid-cols-8 mob:gap-4">
    <div v-for="box in boxs" :key="box.id">
      <PartsBoxsQuicAccess :box="box" class="" />
    </div>
  </div>
  <div class="flex gap-4 mt-10 px-3">
    <img :src="banners[0].src" :alt="banners[0].alt" class="rounded-xl"/>
    <div class="flex flex-col">
      <img :src="banners[1].src" :alt="banners[1].alt" class="rounded-xl">
      <img :src="banners[2].src" :alt="banners[2].alt" class="rounded-xl">
    </div>
    <img :src="banners[3].src" :alt="banners[3].alt" class="rounded-xl">
  </div>
</template>
<script setup>
const { data: boxs } = await useFetch("/api/boxsQuicAccess");
const { data: banners } = await useFetch("/api/banners");
</script>
