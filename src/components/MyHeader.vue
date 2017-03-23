<template>
  <div class="common-container">
    <ul>
      <li>
        <router-link to="/" v-bind:class="{active: homef}">Home</router-link>
        <router-link to="/history" v-bind:class="{active: historyf}">History</router-link>
        <router-link to="/demos" v-bind:class="{active: demosf}">Demos</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  computed: {
    homef() {
      return '/' == this.$route.path;
    },
    historyf() {
      return '/history' == this.$route.path;
    },
    demosf() {
      return !!this.$route.path.match(/\/demos/);
    }
  }
}
</script>

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
.active {
  color: #de1b46;
}
.active:hover {
  color: #c3183e;
}
</style>
