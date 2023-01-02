import { defineStore } from "pinia";
import axios from "axios";

const base_url = "https://techcrunch.com/wp-json/wp/v2/posts/";
export const useNewsStore = defineStore("news", {
  state: () => ({
    newsList: [],
    // news: {},
  }),
  getters: {},
  actions: {
    async getNews() {
      try {
        // var options = {
        //   method: "GET",
        //   url: "https://api.newscatcherapi.com/v2/search",
        //   params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
        //   headers: {
        //     "x-api-key": "4kifJ6lY9wISHp__Yez2x9o6TLYf_PSHc5MkS05Ry2A",
        //   },
        // };
        // let data = await axios.request(options);
        // this.news = data.data.articles;
        let response = await axios.get(base_url);
        this.newsList = response.data;
        console.log(this.newsList);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
