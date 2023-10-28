<template>
  <div class="panel-layout">
    <Header :username="username" @logout="handleLogout()" />
    <div class="layout-content container-fluid">
      <div class="row">
        <Sidebar :username="username" @logout="handleLogout()" />
        <main
          role="main"
          class="router-view-wrapper col-md-9 ml-sm-auto col-lg-10 px-md-4"
        >
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./partials/Header.vue";
import Sidebar from "./partials/SideBar.vue";

export default {
  name: "DashboardLayout",
  components: { Header, Sidebar },
  data() {
    return {
      username: "John Doe",
    };
  },
  // beforeMount() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.panel-layout {
  min-height: 100vh;
  .layout-content {
    overflow: hidden;
    height: calc(100vh - 50px);
    .router-view-wrapper {
      padding: 0 30px 73px;
      overflow-y: scroll;
      height: calc(100vh - 50px);
    }
  }
}
</style>
