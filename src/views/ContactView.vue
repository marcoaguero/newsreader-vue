<script lang="ts">
import { useUserStore } from "../store/contact";

const userStore = useUserStore();
console.log(userStore.name);
export default {
  data() {
    return {
      nameInput: "",
      emailInput: "",
      textInput: "",
    };
  },
  methods: {
    handleSubmit() {
      userStore.setUserInfo(this.emailInput, this.nameInput, this.textInput);
    },
  },
};

//   computed: {
//     formValid() {
//       const { name, email, message } = this;
//       return (
//         name.length > 0 &&
//         /(.+)@(.+){2,}\.(.+){2,}/.test(email) &&
//         message.length > 0
//       );
//     },
//   },
// };
</script>

<template>
  <div class="container col-md-4 col">
    <div class="text-center"><h1>Contact form</h1></div>
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="emailContact" class="form-label">Email</label>
          <input
            v-model="emailInput"
            type="email"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="email@domain.com"
          />
        </div>
        <div class="mb-3">
          <label for="nameContact" class="form-label">Name</label>
          <input
            v-model="nameInput"
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Name"
          />
        </div>
        <div class="mb-3">
          <label for="textContact" class="form-label">Message</label>
          <textarea
            v-model="textInput"
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Write here your message"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          :disabled="!emailInput || !nameInput || !textInput"
          class="btn btn-primary float-right"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
