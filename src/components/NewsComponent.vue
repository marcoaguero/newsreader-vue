<script setup lang="ts">
import { useNewsStore } from "../store/news";
const props = defineProps({
  dataid: String,
  title: String,
  userid: Number,
  summary: String,
  media: String,
});
const newsStore = useNewsStore();
const news = newsStore.news.filter((news) => news._id == props.dataid);
</script>

<template>
  <div class="col-3">
    <img :src="media" alt="" class="d-block w-100 position-relative" />
    <p>{{ title }}</p>
  </div>
</template>
