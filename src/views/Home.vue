<template>
  <div>
    <ca-layout wrap>
      <ca-flex col="xs3 sm3 md3 lg3 xl3" class="slideMenu">
        <SliderMenu />
      </ca-flex>
      <ca-flex col="xs9 sm9 md9 lg9 xl9" class="content">
        <router-view/>
      </ca-flex>
    </ca-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import SliderMenu from '@/components/SlideMenu.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'

export default {
  name: 'home',
  components: {
    SliderMenu,
    CodeSnippet,
  },
  data: () => ({
    model: 100,
  }),
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
  background: #fff
}
</style>
