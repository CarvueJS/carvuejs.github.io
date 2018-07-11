<template>

  <div class="markdown-body">

    <testContent />

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import testContent from '../../content/testA.md'
import 'highlight.js/styles/atom-one-dark.css'
import 'github-markdown-css' // eslint-disable-line

export default {
  name: 'Content',
  components: {
    VueMarkdown,
    testContent
  }
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
