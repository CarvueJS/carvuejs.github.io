<template>
  <div class="slideMenu">
    <ca-layout wrap>
      <ca-flex col="xs3 sm3 md3 lg3 xl3" >
       <img height="100px" src="../../public/icon.png">
      </ca-flex>
      <ca-flex class="slideMenu__logoText" col="xs5 sm5 md5 lg5 xl5">
        <p class="slideMenu__title">CarvueJS</p>
        <p class="slideMenu__subTitle">Carbon Design in VueJS</p>
        <a href="https://github.com/nicholaslee119/carbon-components-vue">
          <img class="pageFooter__badges" src="https://img.shields.io/github/stars/nicholaslee119/carbon-components-vue.svg?style=social&label=Stars" />
        </a>
      </ca-flex>
    </ca-layout>
    <search></search>
    <ca-accordion>
      <div class="slideMenu__item"><router-link to="/GetStarted" active-class="activeLink" class="inactiveLink">Get Started</router-link></div>
      <ca-accordion-item title="Components" active>
        <ul class="slideMenu__item__list">
          <li v-for="page in pages" :key="page"><router-link :to="'/component/'+page" active-class="activeLink" class="inactiveLink">{{page}}</router-link></li>
        </ul>
      </ca-accordion-item>
      <div class="slideMenu__item"><router-link to="/Ecosystem" active-class="activeLink" class="inactiveLink">Ecosystem</router-link></div>
    </ca-accordion>
  </div>
</template>

<script>
// eslint-disable-next-line
import { getNames } from '../utils/contentIndex'

import search from '@/components/Search.vue'

export default {
  name: 'slideMenu',
  components: {
    search,
  },
  data: () => ({
  }),
  computed: {
    pages: function () {
      return getNames()
    },
  },
}
</script>

<style scoped>
.inactiveLink {
  text-decoration: none;
}

.activeLink {
  font-weight: bold;
  text-decoration: none;
  color: #3057d5
}

.slideMenu__title {
  font-size: 25px;
}

.slideMenu__subTitle {
  font-size: 10px;
  margin-bottom: 5px;
}

.slideMenu__logoText {
  padding: 10px 10px 0 10px;
}

.slideMenu__item {
  margin: 10px 7px;
}

.slideMenu {
  padding: 30px 15px;
}

.slideMenu__item__list li {
  margin: 0 0 12px 10px;
}

/* overwrite the default*/
.bx--accordion__item {
  border-top: none;
}

.bx--accordion__item:last-child {
  border-bottom: none;
}
</style>
