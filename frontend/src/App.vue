<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>CoderTubes</h1>
            <h3>Web Developer Video Tutorials for Savvy Developers</h3>
        </div>

        <nav>
            <router-link class="btn btn-primary" to="/">Videos</router-link>
            <router-link class="btn btn-primary" to="/add">Add</router-link>
            <router-link class="btn btn-primary" to="/search">Search</router-link>
        </nav>

        <br/>
        <router-view/>
    </div>
</template>


<script>
export default {
  name: "app"
};
</script>


<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}

#app {
  font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
