<template>
  <div>
    <ca-layout wrap>
      <ca-flex col="xs3 sm3 md3 lg3 xl3" class="slideMenu">
        <Left />
      </ca-flex>
      <ca-flex col="xs9 sm9 md9 lg9 xl9" class="content">
        <router-view/>
        <footer class="pageFooter">
          <p>The source code is licensed under MIT. </p>
          <p>The website content is licensed under CC ANS 4.0.</p>
          <a href="https://github.com/nicholaslee119/carbon-components-vue">
            <img class="pageFooter__badges" src="https://img.shields.io/github/stars/nicholaslee119/carbon-components-vue.svg?style=social&label=Stars" />
          </a>
        </footer>
      </ca-flex>
    </ca-layout>
  </div>
</template>

<script>
import Left from './Left.vue'

export default {
  name: 'frame',
  components: {
    Left,
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
  padding: 25px 20px 200px 20px;
}

.pageFooter p {
  font-size: 12px;
  margin: 5px 0;
}

.pageHeader {
  height: 150px;
  background: #f4f7fb;
  border-bottom: 1px solid #3057d5
}

.pageFooter__badges {
  margin-top: 20px;
}
</style>
