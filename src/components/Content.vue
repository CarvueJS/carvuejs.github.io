<template>
  <div class="markdown-body">
    <keep-alive>
      <component v-bind:is="currentContentPage" />
    </keep-alive>
  </div>
</template>

<script>
import 'highlight.js/styles/atom-one-dark.css'
import 'github-markdown-css' // eslint-disable-line
import Vue from 'vue'

const dynamicContent = file => () => import(`../../content/${file}.md`)

export default {
  name: 'Content',
  components: {
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
    margin: -150px auto 0 auto;
    padding: 45px;
  }

  .markdown-body h1{
    font-size: 3.125rem;
    border-bottom: none;
  }

  .custom {
    color: green;
    font-size: 20px;
  }
</style>
