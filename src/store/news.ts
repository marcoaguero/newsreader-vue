import { defineStore } from "pinia";
import axios from "axios";

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [],
  }),
  getters: {},
  actions: {
    async getNews() {
      try {
        var options = {
          method: "GET",
          url: "https://api.newscatcherapi.com/v2/search",
          params: { q: "Bitcoin", lang: "en", sort_by: "relevancy", page: "1" },
          headers: {
            "x-api-key": "mJQi-2gPlkeT_tQBRPzVtAiAm2XaaGu2SvnbMHKND84",
          },
        };
        let data = await axios.request(options);
        this.news = data.data.articles;
        console.log(this.news.length);
        console.log(this.news);
        console.log(typeof this.news);
        console.log(this.news[0]);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
