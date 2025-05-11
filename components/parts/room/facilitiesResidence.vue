<template>
  <h3 class="font-semibold text-xl">امکانات اقامتگاه</h3>
  <div class="grid grid-cols-2 mob:grid-cols-1 gap-4">
    <div class="flex gap-2" v-for="part in room.facilitiesResidence">
      <img :src="part.src" alt="" loading="lazy"/>
      <p class="text-lg">{{ part.text }}</p>
    </div>
  </div>
  <NuxtLink to="/room/2387189" class="text-[#446BFF] font-bold"
    ><span>مشاهده همه امکانات</span> <IconsFlashLink /></NuxtLink
  >
</template>
<script setup>
const props = defineProps(["room"]);
</script>
