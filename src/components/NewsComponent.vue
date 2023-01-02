<script setup lang="ts">
import { useNewsStore } from "../store/news";
const props = defineProps({
  dataid: Number,
});
const newsStore = useNewsStore();
const newsList = newsStore.newsList.filter(
  (newsList) => newsList.id == props.dataid
);
</script>

<template>
  <div class="col-3 h-25">
    <router-link :to="`/${dataid}`" class="link-secondary text-decoration-none">
      <img
        :src="newsList[0].jetpack_featured_media_url"
        alt=""
        class="d-block w-100 position-relative"
      />
      <p>{{ newsList[0].title.rendered }}</p></router-link
    >
  </div>
</template>
