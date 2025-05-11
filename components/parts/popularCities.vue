<template>
  <div class=" relative">
    <NuxtImg
    :src="popular.src" 
    :alt="popular.alt"
    quality="10"
  format="webp"
  loading="lazy"
  class="rounded-xl w-[22vw] h-full mob:w-full"
/>
    <div class="w-full items-end h-1/2 bg-gradient-to-t rounded-xl bottom-0 left-0 from-[#000] from-0 z-10 p-4 flex absolute font-semibold text-sm text-white">
      <h1 class="absolute right-4 bottom-3">
        {{ popular.city }}
      </h1>
      <p class="flex gap-1 absolute left-4 bottom-3"><span class="font-bold">{{ popular.residence }}</span><span class="font-medium">اقامتگاه</span></p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["popular"]);
</script>
