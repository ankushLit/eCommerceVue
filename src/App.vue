<template>
  <div id="nav">
    <NavBar />
  </div>
  <router-view />
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/nav.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: lightpink;
  align-items: stretch ;
  display: flex-column
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
