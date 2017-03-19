<template>
  <div class="common-container">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/history">History</router-link>
        <router-link to="/about">about</router-link>
      </li>
    </ul>
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
