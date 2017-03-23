<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-active {
  opacity: 0.5;
}
</style>