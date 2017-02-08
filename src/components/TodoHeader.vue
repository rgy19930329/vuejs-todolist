<template>
  <div class="tc">
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tc {
    text-align: center;
}
img {
  width: 100px;
  height: 100px;
}

</style>
