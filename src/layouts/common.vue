<template>
  <div class="common-container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/history">History</v-link>
        <v-link href="/about">About</v-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style>
body {
  font-family: "Microsoft yahei";
}
.common-container {
  width: 300px;
  margin: 0 auto;
  padding: 10px;
}
</style>

<style scoped>
ul {
  margin-bottom: 20px;
  text-align: center;
}
li {
  display: flex;
}
a {
  text-decoration: none;
  color: cornflowerblue;
  flex: 1;
}
a {
  border-left: 1px solid #ddd;
}
a:nth-child(1) {
  border-left: none;
}
a:hover {
  color: #59f;
}
</style>
