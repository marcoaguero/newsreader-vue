<script setup lang="ts">
import { useNewsStore } from "../store/news";
const props = defineProps({
  dataid: String,
});
const newsStore = useNewsStore();
const news = newsStore.news.filter((news) => news._id == props.dataid);
</script>

<template>
  <div class="col-3 h-25">
    <a
      :href="news[0].link"
      target="_blank"
      class="link-secondary text-decoration-none"
    >
      <img
        :src="news[0].media"
        alt=""
        class="d-block w-100 position-relative"
      />
      <p>{{ news[0].title }}</p></a
    >
  </div>
</template>
