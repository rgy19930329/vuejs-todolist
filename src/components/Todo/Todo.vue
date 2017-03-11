<template>
  <div>
    <todo-header></todo-header>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  }
}
</script>

<style scoped>

</style>
