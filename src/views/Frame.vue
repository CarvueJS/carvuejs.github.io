<template>
  <div>
    <ca-layout wrap>
      <ca-flex col="xs3 sm3 md3 lg3 xl3" class="slideMenu">
        <SliderMenu />
      </ca-flex>
      <ca-flex col="xs9 sm9 md9 lg9 xl9" class="content">
        <router-view/>
        <footer class="pageFooter">
          <p>Vanilla Components version 9.0.15</p>
          <p>React Components version 6.5.2</p>
          <p>Website last updated on June 20, 2018 at 12:00 AM</p>
          <p>MIT</p>
        </footer>
      </ca-flex>
    </ca-layout>
  </div>
</template>

<script>
import SliderMenu from '@/components/SlideMenu.vue'

export default {
  name: 'frame',
  components: {
    SliderMenu,
  },
}
</script>

<style scoped>
.slideMenu {
  max-height: 100vh;
  overflow: scroll;
  border-right: 2px solid #f5f7fa;
  background: #fff
}

.content {
  max-height: 100vh;
  overflow: scroll;
  background: #fff;
}

.pageFooter {
  background: #f4f7fb;
  padding: 25px 100px;
}

.pageFooter p {
  font-size: 10px;
  margin: 5px 0;
}

.pageHeader {
  height: 150px;
  background: #f4f7fb;
  border-bottom: 1px solid #3057d5
}
</style>
