<template>
  <div class="flex gap-10">
    <div v-for="d in data" class="">
      <PartsBoxsQuicAccess :title="d.title" class="" :src="d.src" />
    </div>
  </div>
  <div class="flex gap-4 mt-10">
    <img :src="banners[0].src" :alt="banners[0].alt" class="rounded-lg"/>
    <div class="flex flex-col">
      <img :src="banners[1].src" :alt="banners[1].alt" class="rounded-lg">
      <img :src="banners[2].src" :alt="banners[2].alt" class="rounded-lg">
    </div>
    <img :src="banners[3].src" :alt="banners[3].alt" class="rounded-lg">
  </div>
</template>
<script setup>
const { data, pending, error, refresh } = await useFetch("/api/boxsQuicAccess");
const { data: banners } = await useFetch("/api/banners");
console.log(banners);
</script>
