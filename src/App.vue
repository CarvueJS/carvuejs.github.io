<template>
  <div id="app">
    <router-view/>
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
</style>
