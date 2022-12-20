import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: {},
    user: {},
  }),
  getters: {},
  actions: {
    async createUser() {
      var contactInfo = {
        name: String,
        email: String,
        text: String,
      };
      let data = await axios.post(contactInfo);
      this this.user
    },
  },
});
