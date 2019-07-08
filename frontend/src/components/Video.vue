<template>
  <div v-if="this.video">
    <h4>Web Dev Tutorials</h4>
    <div>
      <label>Name: </label> {{this.video.name}}
    </div>
    <div>
      <label>Age: </label> {{this.video.age}}
    </div>
    <div>
      <label>Active: </label> {{this.video.active}}
    </div>


    <span v-if="this.video.active"  v-on:click="updateActive(false)"  class="button is-small btn-primary">Inactive</span>
    <span v-else                    v-on:click="updateActive(true)"   class="button is-small btn-primary">Active</span>
    <span                           v-on:click="VideoDelete()"        class="button is-small btn-danger" >Delete</span>
  </div>

  <div v-else>
    <br/>
    <p>Please click on a Tutorial ...</p>
  </div>
</template>



<script>
import http from "../common";

export default {
  name: "video",
  props: ["video"],
  methods: {
    /* eslint-disable no-console */
    updateActive(status) {
      var data = {
        id: this.video.id,
        name: this.video.name,
        age: this.video.age,
        active: status
      };

      http
        .put("/video/" + this.video.id, data)
        .then(response => {
          this.video.active = response.data.active;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    VideoDelete() {
      http
        .delete("/video/" + this.video.id)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>
