<template>
  <app-header class="mb-3" />
  <div class="container"><router-view /></div><!--tag autoconclusiva-->
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "app-header": Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
