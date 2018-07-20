<template>
  <div>
    <ca-layout wrap>
      <ca-flex col="xs3 sm3 md3 lg3 xl3" class="frame__left">
        <Left />
      </ca-flex>
      <ca-flex col="xs9 sm9 md9 lg9 xl9" class="frame__right">
        <router-view/>
        <Footer />
      </ca-flex>
    </ca-layout>
  </div>
</template>

<script>
import Left from './Left.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'frame',
  components: {
    Left,
    Footer,
  },
}
</script>

<style scoped>
.frame__left {
  max-height: 100vh;
  overflow: scroll;
  border-right: 2px solid #f5f7fa;
  background: #fff
}

.frame__right {
  max-height: 100vh;
  overflow: scroll;
  background: #fff;
}
</style>
