<template>
  <div class="searchform">
    <h4>Find by Age</h4>
    <div class="form-group">
      <input type="number" class="form-control" id="age" required v-model="age" name="age">
    </div>

    <div class="btn-group">
      <button v-on:click="VideosSearch" class="btn btn-success">Search</button>
    </div>

    <ul class="search-result">
      <li v-for="(video, index) in videos" :key="index">
        <h6>{{video.name}} ({{video.age}})</h6>
      </li>
    </ul>
  </div>
</template>



<script>
import http from "../common";

export default {
  name: "search-video",
  data() {
    return {
      age: 0,
      videos: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    VideosSearch() {
      http
        .get("/videos/age/" + this.age)
        .then(response => {
          this.videos = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console  */
  }
};
</script>



<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>
