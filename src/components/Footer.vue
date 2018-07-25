<template>
  <footer class="pageFooter">
    <p>The source code is licensed under MIT. </p>
    <p>The website content is licensed under CC ANS 4.0.</p>
    <div>
      <a href="https://www.npmjs.com/package/carvue">
        <img class="pageFooter__badges" src="https://img.shields.io/npm/v/carvue.svg" />
      </a>
      <a href="https://david-dm.org/CarvueJS/carbon-components-vue?type=dev">
        <img class="pageFooter__badges" src="https://david-dm.org/CarvueJS/carbon-components-vue/dev-status.svg" />
      </a>
      <a href="https://coveralls.io/github/CarvueJS/carbon-components-vue?branch=master">
        <img class="pageFooter__badges" src=" https://coveralls.io/repos/github/CarvueJS/carbon-components-vue/badge.svg?branch=master" />
      </a>
      <a href=" https://travis-ci.org/CarvueJS/carbon-components-vue">
        <img class="pageFooter__badges" src="https://travis-ci.org/CarvueJS/carbon-components-vue.svg?branch=master" />
      </a>
      <a href="https://github.com/CarvueJS/carbon-components-vue">
        <img class="pageFooter__badges" src="https://img.shields.io/github/stars/CarvueJS/carbon-components-vue.svg?style=social&label=Stars" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
}
</script>

<style scroped>
.pageFooter {
  background: #f4f7fb;
  padding: 25px 20px 200px 20px;
}

.pageFooter p {
  font-size: 12px;
  margin: 5px 0;
}

.pageFooter__badges {
  margin: 20px 5px 0 0;
}
</style>
