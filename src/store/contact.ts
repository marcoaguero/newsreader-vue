import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    visits: 1,
    name: "Marco",
    email: "marco@marco.com",
    text: "",
  }),
  actions: {
    setUserInfo(newName: string, newEmail: string, newText: string) {
      this.$patch({
        visits: this.visits++,
        name: newName,
        email: newEmail,
        text: newText,
      });
      console.log(this.name + " " + this.email + " " + this.text + ".");
    },
  },
});
