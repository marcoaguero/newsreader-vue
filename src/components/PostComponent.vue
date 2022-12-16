<script setup lang="ts">
import { usePostsStore } from "../store/news";

const props = defineProps({
  dataid: String,
  title: String,
  userid: Number,
});
const postStore = usePostsStore();
const post = postStore.posts.filter((post) => post._id == props.dataid);
</script>

<template>
  <div class="col-3">
    <p>{{ dataid }}</p>
    <p>{{ title }}</p>
    <p>{{ userid }}</p>
  </div>
</template>
