<template>
  <div class="loading" v-show="show">
    <div class="loading-img"></div>
  </div>
</template>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
}
.loading-img {
  width: 32px;
  height: 32px;
  background-image: url(../assets/bg_loading.gif);
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -16px 0 0 -16px;
}
</style>

<script>
export default {
  name: 'loading',
  computed: {
    show() {
      return this.$store.getters.loading;
    }
  }
}
</script>