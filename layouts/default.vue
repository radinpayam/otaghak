<template>
  <div class="flex mob:w-full flex-col gap-10 mob:gap-[10vh] mob:px-[3%] font-iran-sans text-[#48484E]">
    <ClientOnly>
      <NuxtLazyHydrate when-visible>
      <LayoutsHeader />
      </NuxtLazyHydrate>
    </ClientOnly>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection1 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection2 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection3 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection4 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection5 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection6 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection7 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsSection8 />
    </NuxtLazyHydrate>
    <NuxtLazyHydrate when-visible>
      <LazyLayoutsFooter class="-mx-[3%]"/>
    </NuxtLazyHydrate>
  </div>
</template>
<script setup lang="ts">
</script>
