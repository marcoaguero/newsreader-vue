<script setup lang="ts">
import { useNewsStore } from "../store/news";
import { ref, onMounted, computed } from "vue";
const urlId: Number = window.location.pathname.split("/").pop();
const newsStore = useNewsStore();
newsStore.getNews();
const newsDetail = newsStore.newsList.filter(
  (newsList) => newsList.id == urlId
);
console.log(newsDetail[0]);
</script>

<template>
  <div class="container col-md-4 col text-center">
    <div class="my-2 my-md-4">
      <img
        :src="newsDetail[0].jetpack_featured_media_url"
        alt="Media"
        class="d-block w-100 position-relative"
      />
    </div>
    <div class="text-center">
      <h1>{{ newsDetail[0].title.rendered }}</h1>
    </div>
    <div class="my-2 my-md-4 text-muted">
      {{ newsDetail[0].content.rendered }}
    </div>
  </div>
  <!-- <div class="container col-md-4 col text-center">
    <div class="text-center">
      <h1>{{ newsDetail.id }}</h1>
    </div>
  </div> -->
</template>
