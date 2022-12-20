<script lang="ts">
export default {
  data() {
    return {
      name: (String = ""),
      email: (String = ""),
      text: (String = ""),
    };
  },
  computed: {
    formValid() {
      const { name, email, message } = this;
      return (
        name.length > 0 &&
        /(.+)@(.+){2,}\.(.+){2,}/.test(email) &&
        message.length > 0
      );
    },
  },
};
</script>

<template>
  <div class="container col-md-4 col">
    <div class="text-center"><h1>Contact form</h1></div>
    <div>
      <form>
        <div class="form-group">
          <label for="emailContact">Email</label>
          <input
            v-model="email"
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="email@gmail.com"
          />
        </div>
        <div class="form-group">
          <label for="nameContact">Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label for="textContact">Message</label>
          <textarea
            v-model="text"
            type="text"
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Write here your message"
            rows="3"
          ></textarea>
        </div>
        <button
          @submit=""
          :disabled="!email || !name || !text"
          class="btn btn-primary float-right"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
