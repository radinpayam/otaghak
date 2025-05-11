<template>
  <div class="">
    <div class="flex mob:h-[12vh] cursor-pointer flex-col items-center lg:w-[10vw] lg:p-4 justify-center rounded-lg border-2 border-[#D6D6DE]">
      <NuxtImg :src="box.src" :alt="box.title" alt="" class="" width="48" height="48" loading="lazy" />
      <p class="text-[#4C4C51] mob:text-xs">{{ box.title }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["box"]);
</script>
