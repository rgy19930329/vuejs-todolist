<template>
  <common>
    <div id="demos">
      <h3>demos</h3>
      <ul>
        <li><router-link to="/demos/demo1">demo1</router-link></li>
        <li><router-link to="/demos/demo2">demo2</router-link></li>
        <li><router-link to="/demos/demo3">demo3</router-link></li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  </common>
</template>

<script>
import Common from '../layouts/common';

export default {
  components: {
    Common
  }
}
</script>

<style scoped>
h3, ul {
	text-align: center;
}
</style>
