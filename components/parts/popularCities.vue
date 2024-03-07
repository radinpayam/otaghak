<template>
  <div class=" relative">
    <img :src="popular.src" :alt="popular.alt" class="rounded-xl" />
    <div class="w-full items-end h-1/2 bg-gradient-to-t rounded-xl bottom-0 left-0 from-[#000] from-0 z-10 p-4 flex absolute font-semibold text-sm text-white">
      <h3 class="absolute right-4 bottom-3">
        {{ popular.city }}
      </h3>
      <p class="flex gap-1 absolute left-4 bottom-3"><span class="font-bold">{{ popular.residence }}</span><span class="font-medium">اقامتگاه</span></p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["popular"]);
</script>
