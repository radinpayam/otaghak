<template>
  <h1>مجله‌ی اتاقک</h1>
  <div class="flex gap-4">
    <div class="" v-for="journal in journals">
      <PartsJournals :journal="journal" />
    </div>
  </div>
</template>
<script setup>
const {
  data: journals,
  pending,
  error,
  refresh,
} = await useFetch("/api/journals");
</script>
