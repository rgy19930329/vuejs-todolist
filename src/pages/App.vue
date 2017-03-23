<template>
  <div class="app-wrap">
    <template v-if="ok">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </template>
    <template v-else>
      <NotFoundPage></NotFoundPage>
    </template>
  </div>
</template>

<script>
import NotFoundPage from './404';

export default {
  data() {
    return {
      map: {
        '/': 'home',
        '/history': 'history',
        '/demos': 'demos',
        '/demos/demo1': 'demo1',
        '/demos/demo2': 'demo2',
      }
    }
  },
  computed: {
    ok() {
      return this.map[this.$route.path] || '';
    }
  },
  components: {
    NotFoundPage
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 300ms;
}
.fade-enter, .fade-leave-active {
  box-shadow: 0 0 20px #888;
}
</style>
