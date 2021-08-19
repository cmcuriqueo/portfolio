<template>
  <NavBar></NavBar>
        <router-view></router-view>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>