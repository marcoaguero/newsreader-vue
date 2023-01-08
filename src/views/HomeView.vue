<script setup lang="ts">
import NewsComponent from "../components/NewsComponent.vue";
import { ref, onMounted, computed } from "vue";
import { useNewsStore } from "../store/news";
const newsStore = useNewsStore();
newsStore.getNews();
localStorage.newsList = newsStore.newsList;
console.log(localStorage.newsList);
</script>

<template>
  <div class="">
    <div class="row text-center">
      <NewsComponent
        v-for="news in newsStore.newsList.slice(0, 8)"
        :key="news.id"
        :dataid="news.id"
      ></NewsComponent>
    </div>
  </div>
</template>

<style>
.img-cover {
  height: 450px;
  object-fit: cover;
  transition: 0.7s;
}
.news-title {
  position: absolute;
  bottom: 0;
  text-shadow: 2px 2px 4px #000000;
  transition: 0.7s;
}
@media (min-width: 1281px) {
  .img-cover {
    opacity: 0.75;
  }
  .hover-effect:hover .img-cover {
    opacity: 1;
  }
  .hover-effect:hover .news-title {
    opacity: 1;
  }
  .news-title {
    opacity: 0;
  }
}
</style>
