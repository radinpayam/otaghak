<template>
  <div class="overflow-x-hidden">
    <NuxtPage />
  </div>
</template>
<script setup>
useHead({
  link: [
    { rel: "manifest", href: "/manifest.json" },
  ],
});
</script>
