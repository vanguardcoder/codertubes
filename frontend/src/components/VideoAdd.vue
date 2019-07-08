<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required v-model="video.name" name="name">
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" required v-model="video.age" name="age">
        </div>

        <button v-on:click="saveVideo" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Submit Successful</h4>
      <button class="btn btn-success" v-on:click="newVideo">Add</button>
    </div>
  </div>
</template>



<script>
import http from "../common";

export default {
  name: "add-video",
  data() {
    return {
      video: {
        id: 0,
        name: "",
        age: 0,
        active: false
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    saveVideo() {
      var data = {
        name: this.video.name,
        age: this.video.age
      };

      http
        .post("/video", data)
        .then(response => {
          this.video.id = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newVideo() {
      this.submitted = false;
      this.video = {};
    }
    /* eslint-enable no-console */
  }
};
</script>



<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
