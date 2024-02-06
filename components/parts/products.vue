<template>
  <div class="flex flex-col gap-4">
    <div>
      <img class="rounded-xl w-full h-[38vh]" :src="product.src" alt="" />
      <h1 class="text-base font-semibold text-[#323235]">{{ product.title }}</h1>
    </div>
    <div class="flex justify-between text-[#323235]">
      <ul class="flex flex-col gap-1">
        <li class="text-sm">{{ product.caption }}</li>
        <li>
          هر شب از<span class="font-bold">{{ product.price }}</span> تومان
        </li>
      </ul>
      <ul class="flex flex-col gap-1" style="direction: ltr">
        <li>
          {{ product.comment }}<span>{{ product.star }} </span>
        </li>
        <li class="flex gap-4 items-center">
          <span
            class="text-center rounded text-white bg-[#F03E58] w-4/12 px-1"
            >{{ product.percent }}</span
          ><span
            ><del class="">{{ product.discount }}</del></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
<script setup>
const props = defineProps(["product"]);
</script>
