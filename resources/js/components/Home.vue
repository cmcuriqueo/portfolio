<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="row">
      <div class="col-12 incololate code">
        &lt;body&gt;Hello World!&lt;/body&gt;
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style>
</style>