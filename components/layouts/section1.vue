<template>
  <div
    class="grid mob:grid-cols-4 lg:grid-cols-8 mob:gap-2 w-full h-full px-[5%]"
  >
    <div v-for="box in boxs" :key="box.id">
      <PartsBoxsQuicAccess :box="box" />
    </div>
  </div>
  <div class="flex gap-4 mt-10 mob:hidden justify-center items-center">
    <NuxtImg
      width="208"
      height="143"
      :src="banners[0].src"
      :alt="banners[0].alt"
      class="rounded-xl cursor-pointer w-[46%] h-auto"
    />
    <div class="flex flex-col cursor-pointer w-[16%] h-auto">
      <NuxtImg
        width="143"
        height="143"
        :src="banners[1].src"
        :alt="banners[1].alt"
        loading="lazy"
        class="rounded-xl w-full h-auto"
      />
      <NuxtImg
        width="143"
        height="143"
        :src="banners[2].src"
        :alt="banners[2].alt"
        loading="lazy"
        class="rounded-xl w-full h-auto"
      />
    </div>
    <NuxtImg
      width="364"
      height="364"
      :src="banners[3].src"
      :alt="banners[3].alt"
      loading="lazy"
      class="rounded-xl cursor-pointer w-4/12"
    />
  </div>
</template>
<script setup>
const { data: boxs } = await useFetch("/api/boxsQuicAccess");
const { data: banners } = await useFetch("/api/banners");
</script>
