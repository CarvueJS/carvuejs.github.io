<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from '@/views/Home.vue'

export default {
  name: 'app',
  components: {
    Home,
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
