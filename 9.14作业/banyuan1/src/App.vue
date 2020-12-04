<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/Home"

export default {
  name: "App",
  components: {
    // HelloWorld
    Home,
  }
};
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
