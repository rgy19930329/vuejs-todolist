<template>
  <div>
    <div>
      <h3>过渡效果(transition)</h3>
    </div>
    <div class="handle-panel">
      <button v-on:click="makeFade" class="btn">toggle</button>
    </div>
    <transition name="fade">
      <h3 v-if="show">hello</h3>
    </transition>

    <div class="floor"></div>

    <div class="handle-panel">
      <button v-on:click="show2 = !show2" class="btn">toggle</button>
    </div>
    <transition name="slide-fade">
      <h3 v-if="show2">hello</h3>
    </transition>

    <div class="floor"></div>
    
    <div class="handle-panel">
      <button v-on:click="show3 = !show3" class="btn">toggle</button>
    </div>
    <transition name="bounce">
      <h3 v-if="show3">hello</h3>
    </transition>

  </div>
</template>

<script>
import child from '../components/demo/child';

export default {
  components: {
    child,
  },
  data() {
    return {
      show: false,
      show2: false,
      show3: false,
    }
  },
  methods: {
    makeFade() {
      this.show = !this.show;
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
.floor {
  border-bottom: 1px solid #ccc;
  margin: 10px 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

</style>
