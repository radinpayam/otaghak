<template>
  <div class="flex flex-col gap-4">
    <div>
      <NuxtLink :to="residence.route">
        <NuxtImg
  :src="residence.src"
  :alt="residence.title"
  loading="lazy"
  quality="1"
  format="webp"
  class="rounded-xl w-full mob:h-[36vh] lg:h-[36vh]"
/>
        <h1 class="pr-4 text-base mt-4 font-semibold text-[#323235]">
          {{ residence.title }}
        </h1>
      </NuxtLink>
    </div>
    <div class="flex justify-between text-[#323235] px-4">
      <ul class="flex flex-col gap-1">
        <li class="text-sm text-[#64646E]">{{ residence.caption }}</li>
        <li class="text-sm">
          هر شب از<span class="font-bold text-base">{{ residence.price }}</span>
          تومان
        </li>
      </ul>
      <ul class="flex flex-col gap-1" style="direction: ltr">
        <li class="space-x-[1px] text-sm">
          <span class="text-[#64646E]">{{ residence.comment }}</span
          ><span class="font-bold">{{ residence.star }} </span> <IconsStar />
        </li>
        <li class="flex gap-4 items-center">
          <span
            class="text-center rounded text-white bg-[#F03E58] mob:w-full text-sm w-[2.8vw] px-1 py-[1px]"
            >{{ residence.percent }}</span
          ><span
            ><del class="decoration-[#f03e58]">{{
              residence.discount
            }}</del></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
<script setup>
const props = defineProps(["residence"]);
</script>
