<template>
  <div>
    <header class="pageHeader"></header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'components',
}
</script>

<style scoped>
.pageHeader {
  height: 150px;
  background: #f4f7fb;
  border-bottom: 1px solid #3057d5
}
</style>
