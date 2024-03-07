<template>
  <ClientOnly>
    <NuxtPage />
  </ClientOnly>
</template>
<script setup>
useHead({
  link: [{ rel: "manifest", href: "/manifest.json" }],
});
</script>
