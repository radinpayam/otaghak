<template>
  <div class="">
    <div class="flex flex-col items-center w-[10vw] p-4 justify-center rounded-lg border-2 border-[#D6D6DE]">
      <img :src="props.src" alt="" class="w-[48px] h-[48px]" />
      <p class="text-[#4C4C51]">{{ props.title }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["src", "title"]);
console.log(props.src);
</script>
