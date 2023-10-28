<template>
  <nav class="navbar navbar-dark sticky-top pl-3 bg-dark shadow">
    <router-link class="navbar-brand ml-3 pl-5 pl-md-0" to="/"
      >Arvan Challenge</router-link
    >
    <div class="greeting-text ml-2 d-none d-sm-block">
      {{ `Welcome ${username}` }}
    </div>
    <button
      type="button"
      class="btn btn-outline-info d-none d-sm-block"
      @click="$emit('logout')"
    >
      Logout
    </button>
    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: "LayoutHeader",
  props: {
    username: {
      default: "",
      type: String,
    },
  },
  emits: ["logout"],
};
</script>

<style lang="scss" scoped>
.navbar {
  .greeting-text {
    margin-right: auto;
    color: #fff;
  }
}
</style>
