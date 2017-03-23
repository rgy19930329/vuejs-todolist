<template>
  <common>
    <div>
      <h3>双向绑定 + 父子组件 + vuex(store)</h3>
      <div>
        <input v-model="pMsg">
      </div>
      <child v-bind:msg="pMsg"></child>
    </div>
    <div class="handle-panel">
      <button v-on:click="pressSuccess" class="btn">tip success</button>
      <button v-on:click="pressError" class="btn">tip error</button>
      <button v-on:click="pressLoading" class="btn">tip loading</button>
    </div>
  </common>
</template>

<script>
import common from '../layouts/common';
import child from '../components/demo/child';

export default {
  data() {
    return {
      'pMsg': '数据双线绑定'
    }
  },
  components: {
    common,
    child,
  },
  methods: {
    pressSuccess() {
      this.$store.dispatch('tips', this.pMsg);
    },
    pressError() {
      this.$store.dispatch('tips', {msg: this.pMsg, type: 'error'});
    },
    pressLoading() {
      this.$store.dispatch('loading', true);
      setTimeout((o) => {
        this.$store.dispatch('loading', false);
      }, 2000);
    }
  }
}
</script>

<style scoped>
h3 {
  line-height: 50px;
}
.handle-panel button {
  margin-top: 20px;
}
</style>
