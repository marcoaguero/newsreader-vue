<script lang="ts">
import image from "../assets/about.png";

export default {
  data() {
    return {
      image: image,
    };
  },
};
</script>
<template>
  <div class="container col-md-4 col text-center">
    <div class="my-2 my-md-4"><img :src="image" alt="About image" /></div>
    <div class="my-2 my-md-4 text-muted">
      I’m a web developer with more than 5 years of experience in frontend and
      many projects around different areas of software engineering including
      video games design and development, 3D animation and 3D modeling. Highly
      mastered HTML, CSS and JS with quick adaptation to high workloads, fast
      problem solving and great teamwork skills.
    </div>
  </div>
</template>

<style></style>
