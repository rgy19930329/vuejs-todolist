<template>
  <div id="app">
    <common>
      <todo-header></todo-header>
      <todo-list></todo-list>
      <todo-footer></todo-footer>
    </common>
  </div>
</template>

<script>
import Common from '../layouts/common';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoFooter from '../components/TodoFooter';

export default {
  name: 'app',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
    Common
  }
}
</script>

<style>
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
li {
    list-style: none;
}
</style>
