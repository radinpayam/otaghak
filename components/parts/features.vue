<template>
  <div
    class="flex flex-col gap-4 rounded-2xl border w-full h-full p-4 border-[#D6D6DE]"
  >
    <div class="flex gap-4">
      <img :src="feature.src" alt="" class="w-12" />

      <h1 class="text-xl text-[#48484E] font-semibold">{{ feature.title }}</h1>
    </div>
    <p>{{ feature.description }}</p>
  </div>
</template>
<script setup>
const props = defineProps(["feature"]);
</script>
