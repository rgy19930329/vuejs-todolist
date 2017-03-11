<template>
  <common>
    <todo></todo>
  </common>
</template>

<script>
import Common from '../layouts/common';
import Todo from '../components/Todo/Todo';

export default {
  name: 'app',
  components: {
    Common,
    Todo,
  }
}
</script>