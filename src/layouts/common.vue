<template>
  <div class="wrap">
    <my-header></my-header>
    <slot></slot>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader';

export default {
  components: {
    MyHeader
  }
}
</script>

<style>
body {
  font-family: "Microsoft yahei";
}
li {
  list-style: none;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: "Microsoft yahei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
}
.wrap {
  width: 300px;
  margin: 0 auto;
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
