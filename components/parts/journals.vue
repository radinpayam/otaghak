<template>
  <div class="flex flex-col text-[#73707C] h-full gap-2 border border-[#D6D6DE] rounded-xl">
    <img :src="journal.src" alt="" class="rounded-xl w-[80vw] h-full"/>
    <h1 class="font-semibold text-base text-[#242428] px-2">{{ journal.title }}</h1>
    <p class="text-sm px-3">{{ journal.description }}</p>
    <ul class="flex justify-between font-semibold text-base px-2">
        <li>{{ journal.writer }}</li>
        <li>{{ journal.date }}</li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps(["journal"]);
</script>
