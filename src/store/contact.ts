import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => {
    return { name: "Marco", email: "marco@marco.com", text: "" };
  },
  actions: {
    setUserInfo(newName: string, newEmail: string, newText: string) {
      this.name = newName;
      this.email = newEmail;
      this.text = newText;
      console.log(this.name + " " + this.email + " " + this.text + ".");
    },
    // async setUser() {},
    // changeName(newName: string) {
    //   user.value.name = newName;
    // },
    // changeEmail(newEmail: string) {
    //   user.value.email = newEmail;
    // },
    // changeText(newText: string) {
    //   user.value.text = newText;
    // },
  },
});

interface UserInfo {
  id: number;
  name: string;
  email: string;
  text: string;
}

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     users: {},
//     user: {} as UserInfo | null,
//   }),
//   getters: {},
//   actions: {
//     async createUser() {
//         var userData:UserInfo={};

//         // let data = await axios.post(userData)
//     },
//   },
// });

// interface UserInfo {
//   id: 0;
//   name: String;
//   email: String;
//   text: String;
// }
