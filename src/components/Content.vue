<template>

  <div class="markdown-body">

    <component v-bind:is="currentContentPage" />

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import 'highlight.js/styles/atom-one-dark.css'
import 'github-markdown-css' // eslint-disable-line
import Vue from 'vue'

const dynamicContent = file => () => import(`../../content/${file}.md`)

export default {
  name: 'Content',
  components: {
    VueMarkdown,
  },
  computed: {
    currentContentPage: function () {
      const pageName = this.$route.params.name
      const component = dynamicContent(pageName)
      if (component) Vue.component(pageName, component)
      return pageName
    },
  },
}
</script>

<style>
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }

  .custom {
    color: green;
    font-size: 20px;
  }
</style>
