<template>
  <div>
    <ca-layout wrap>
      <ca-flex col="xs2 sm2 md2 lg2 xl2" class="slideMenu">
        <SliderMenu />
      </ca-flex>
      <ca-flex col="xs12 sm10 md10 lg10 xl10" class="content">
        <!-- <CodeSnippet/> -->
        <Content/>
      </ca-flex>
    </ca-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import SliderMenu from '@/components/SlideMenu.vue'
import Content from '@/components/Content.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'

export default {
  name: 'home',
  components: {
    SliderMenu,
    Content,
    CodeSnippet
  },
  data: () => ({
    model: 100
  })
}
</script>

<style scroped>
.slideMenu {
  max-height: 100vh;
  overflow: scroll;
}

.content {
  max-height: 100vh;
  overflow: scroll;
}
</style>
