<template>
  <div class="full-screen-layout">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FullScreenLayout",
  // beforeMount() {},
};
</script>

<style lang="scss" scoped>
.full-screen-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
