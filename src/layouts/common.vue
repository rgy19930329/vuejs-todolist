<template>
  <div class="wrap">
    <my-header></my-header>
    <slot></slot>
    <tips></tips>
    <loading></loading>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader';
import Tips from '../components/Tips';
import Loading from '../components/Loading';

export default {
  components: {
    MyHeader,
    Tips,
    Loading,
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
input {
  box-sizing: border-box;
  font-size: 18px;
  padding: 3px;
  font-family: "Microsoft yahei";
  display: block;
  width: 100%;
}
.btn {
  width: 100%;
  line-height: 28px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.btn:hover {
  background: #eee;
}
</style>
