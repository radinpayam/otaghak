<template>
    <div class="flex justify-between">
        <div class="flex gap-2 items-center">
        <img :src="city.src" alt="" class="w-9 rounded-lg">
        <span class="font-bold text-base">{{ city.city }}</span>
        <span class="text-[.8rem]">{{ city.state }}</span>
    </div>
    <span class="text-[.8rem]">{{ city.residence }}</span>
    </div>
</template>
<script setup>
const props = defineProps(["city"]);
</script>