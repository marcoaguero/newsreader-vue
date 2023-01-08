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
  <div class="col-12 col-sm-6 col-lg-3 h-25 d-flex position-relative p-0">
    <router-link
      :to="`/${dataid}`"
      class="text-decoration-none text-light hover-effect"
    >
      <div class="">
        <img
          :src="newsList[0].jetpack_featured_media_url"
          alt=""
          class="d-block w-100 img-cover position-relative"
        />
      </div>
      <div class="p-4 news-title">
        <p>{{ newsList[0].title.rendered }}</p>
      </div></router-link
    >
  </div>
</template>
