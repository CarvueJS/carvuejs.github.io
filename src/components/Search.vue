<template>
  <div class="search">
    <ca-search class="search__input" v-model="searchInput"></ca-search>
    <ca-data-table class="search__result">
    <tbody>
      <tr v-for='(resultItem, index) in searchResult' :key='index'>
        <th>
          <router-link :to="'/component/'+resultItem.name">{{resultItem.name}}</router-link>
        </th>
        <th>
          {{resultItem.content}}
        </th>
      </tr>
    </tbody>
  </ca-data-table>
  </div>
</template>
<script>
// eslint-disable-next-line
import { getList, } from '../utils/contentIndex'
import Fuse from 'fuse.js'

export default {
  name: 'search',
  data: () => ({
    searchInput: '',
    searchResult: [],
    fuse: null,
    options: {
      matchAllTokens: true,
      keys: [{
        name: 'title',
        weight: 0.3,
      }, {
        name: 'author',
        weight: 0.7,
      }, ],
    },
    elementInput: null,
    elementResult: null,
  }),
  watch: {
    searchInput: function (newValue) {
      this.searchResult = this.fuse.search(newValue)
    },
  },
  beforeMount () {
    this.fuse = new Fuse(getList(), this.options)
  },
  mounted () {
    // add focus event API to ca-search
    if (typeof window !== 'undefined') {
      this.elementInput = document.querySelector('.search__input')
      this.elementResult = document.querySelector('.search__result')
      this.elementInput.addEventListener('focus', this.toggleResult, true)
      this.elementInput.addEventListener('blur', this.toggleResult, true)
    }
  },
  methods: {
    toggleResult () {
      // TODO: fix this ugly way
      if (typeof window !== 'undefined') {
        setTimeout(() => {
          this.elementResult.style.visibility = this.elementResult.style.visibility === 'visible' ? 'hidden' : 'visible'
        }, 1000)
      }
    },
  },
}
</script>

<style scroped>
.search {
  margin: 20px 0;
  position: relative;
}

/* TODO: remove important */
.search__result {
  position: absolute !important;
  padding: 0 !important;
  z-index: 100;
  visibility: hidden;
}
</style>
