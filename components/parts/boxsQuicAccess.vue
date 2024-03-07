<template>
  <div class="">
    <div class="flex mob:h-[10vh] flex-col items-center lg:w-[10vw] lg:p-4 justify-center rounded-lg border-2 border-[#D6D6DE]">
      <img :src="box.src" alt="" class="w-[48px] h-[48px]" />
      <p class="text-[#4C4C51] mob:text-xs">{{ box.title }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["box"]);
</script>
