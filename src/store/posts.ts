import { defineStore } from "pinia";
import axios from "axios";

export const usePostsStore = defineStore("post", {
  state: () => ({
    posts: [],
  }),
  getters: {},
  actions: {
    async getPosts() {
      try {
        let data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = data.data;
        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
