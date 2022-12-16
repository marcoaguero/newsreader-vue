<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import NewsComponent from "../components/NewsComponent.vue";
import { ref, onMounted, computed } from "vue";
import { useNewsStore } from "../store/news";
const newsStore = useNewsStore();
newsStore.getNews();
</script>

<template>
  <div class="wrapper">
    <HelloWorld msg="Newsreader app" />
  </div>

  <div class="container">
    <div class="row">
      <NewsComponent
        v-for="news in newsStore.news"
        :key="news._id"
        :dataid="news._id"
      ></NewsComponent>
    </div>
  </div>
</template>
