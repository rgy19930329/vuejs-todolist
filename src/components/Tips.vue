<template>
  <div class="tips" v-bind:class="{show: isShow, error: isError}">
    <div class="tips-close" @click="hideTips">&times;</div>
    <div>{{tipsMsg}}</div>
  </div>
</template>

<style scoped>
.tips {
  width: 250px;
  height: 60px;
  padding: 10px 20px 10px 10px;
  background-color: #00A65A;
  color: #ffffff;
  position: absolute;
  right: -300px;
  top: 55px;
  opacity: 0;
  transition: all 300ms;
}
.show {
  right: 1px;
  opacity: 1;
}
.error {
  background: #e86d73;
}
.tips-close {
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  right: 8px;
  top: 0;
}
.tips-close:hover {
  cursor: pointer;
  color: #e3e3e3;
}
</style>

<script>
export default {
  name: 'tips',
  computed: {
    tipsMsg () {
      var msg = this.$store.getters.tipsMsg;
      return typeof msg == 'string' ? msg : msg.msg;
    },
    isShow() {
      return this.$store.getters.tipsMsg ? true : false;
    },
    isError() {
      var type = this.$store.getters.tipsMsg.type;
      type = type || 'success';
      return type == 'error';
    }
  },
  methods: {
    hideTips () {
      this.$store.dispatch('tips', '');
    }
  }
}
</script>