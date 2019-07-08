<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>List of Video Tutorials</h4>
            <ul>
                <li v-for="(video, index) in videos" :key="index">
                    <router-link :to="{
                            name: 'video-details',
                            params: { video: video, id: video.id }
                        }">
                            {{video.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>



<script>
import http from "../common";

export default {
  name: "videos-list",
  data() {
    return {
      videos: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrieveVideos() {
      http
        .get("/videos")
        .then(response => {
          this.videos = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveVideos();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrieveVideos();
  }
};
</script>



<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>
