<template>
  <common>
    <div id="about">
      this is demo about!
      <ul>
        <li><router-link to="/demo1">demo1</router-link></li>
      </ul>
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
div {
	text-align: center;
}
</style>
