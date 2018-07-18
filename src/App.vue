<template>
  <div id="app">
    <Components/>
  </div>
</template>

<script>
import Components from '@/views/Components.vue'

export default {
  name: 'app',
  components: {
    Components,
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
