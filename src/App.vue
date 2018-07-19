<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Frame from '@/views/Frame.vue'

export default {
  name: 'app',
  components: {
    Frame,
  },
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
