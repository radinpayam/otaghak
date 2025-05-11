<template>
    <h3 class="text-lg font-semibold">مراکز نزدیک</h3>
    <div class="flex mob:flex-col gap-10">
    <ul v-for="center in room.nearbyCenters">
        <li class="font-semibold">{{ center.center }}</li>
        <div class="flex flex-col" v-for="time in center.time">
        <li>پیاده: <span>{{ time.onFoot }}</span></li>
        <li>با ماشین: <span>{{ time.withCar }}</span></li>
    </div>
    </ul>
</div>
</template>
<script setup>
const props = defineProps(["room"]);
</script>