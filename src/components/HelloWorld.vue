<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="container">
    <h3 class="">{{ msg }}</h3>
    <p>
      The API key expires quickly so might need to update it everyday to make it
      work
    </p>
  </div>
</template>

<style scoped></style>
