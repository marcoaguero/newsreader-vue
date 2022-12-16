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
            "x-api-key": "ZmMXB7xTV-7YslejYw2LkZgY19LdgXYQbWdJbf5MqvY",
          },
        };
        let data = await axios.request(options);
        this.news = data.data.articles;
        console.log(this.news);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
