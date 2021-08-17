<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img
          :src="'assets/images/logo.png'"
          alt=""
          width="30"
          height="30"
          class="d-inline-block align-text-top"
      /></a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">&nbsp;</li>
        </ul>

        <div class="d-flex">
          <button class="button is-success is-outline" type="button">
            Acerca de Mi
          </button>
        </div>
        &nbsp;

        <div class="d-flex">
          <router-link class="button is-success is-outline" to="/home">
            Contacto
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>