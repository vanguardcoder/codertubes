import Vue from "vue";
import Router from "vue-router";
import VideosList from "./components/VideosList.vue";
import AddVideo from "./components/VideoAdd.vue";
import SearchVideos from "./components/VideosSearch.vue";
import Video from "./components/Video.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "videos",
      alias: "/video",
      component: VideosList,
      children: [
        {
          path: "/video/:id",
          name: "video-details",
          component: Video,
          props: true
        }
      ]
    },
    {
      path: "/add",
      name: "add",
      component: VideoAdd
    },
    {
      path: "/search",
      name: "search",
      component: VideosSearch
    }
  ]
});
