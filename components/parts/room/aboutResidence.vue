<template>
  <div class="flex flex-col border-b pb-4 border-slate-400">
    <h3 class="text-xl font-semibold">درباره اقامتگاه</h3>
    <div class="flex">
      <div class="flex flex-col gap-4">
        <div class="flex gap-3">
          <span v-for="information in room.aboutResidence.basicInformation"
            >,{{ information }}</span
          >
        </div>
        <div class="flex gap-2" v-for="part in room.aboutResidence">
          <img :src="part.src" alt="" class="w-8" loading="lazy">
        <div class="flex flex-col">
          <h3 class="font-semibold text-lg">{{ part.title }}</h3>
          <p>{{ part.description }}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["room"]);
</script>
