<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import NavigationBar from "./components/NavigationBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <header>
    <NavigationBar></NavigationBar>
  </header>
  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>
