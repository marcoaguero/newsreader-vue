<script setup lang="ts">
import NewsComponent from "../components/NewsComponent.vue";
import { ref, onMounted, computed } from "vue";
import { useNewsStore } from "../store/news";
const newsStore = useNewsStore();
newsStore.getNews();
</script>

<template>
  <div class="container">
    <div class="row">
      <NewsComponent
        v-for="news in newsStore.newsList.slice(0, 8)"
        :key="news.id"
        :dataid="news.id"
      ></NewsComponent>
    </div>
  </div>
</template>
