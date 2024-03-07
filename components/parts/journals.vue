<template>
  <div
    class="flex flex-col text-[#73707C] relative mob:h-[50vh] lg:h-full pb-2 gap-5 border border-[#D6D6DE] rounded-xl"
  >
    <img :src="journal.src" alt="" class="rounded-xl lg:w-[80vw] lg:h-[30vh]" />
    <h1 class="font-semibold text-base text-[#242428] px-2">
      {{ journal.title }}
    </h1>
    <p class="text-sm px-1">{{ journal.description }}</p>
      <ul class="flex justify-between font-semibold text-sm px-2">
        <li class="">{{ journal.writer }}</li>
        <li>{{ journal.date }}</li>
      </ul>
    </div>
</template>
<script setup>
const props = defineProps(["journal"]);
</script>
