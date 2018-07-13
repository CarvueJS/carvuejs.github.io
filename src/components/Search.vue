<template>
  <div class="search">
    <ca-search class="search__input" v-model="searchInput"></ca-search>
    <ca-data-table class="search__result">
    <tbody>
      <tr>
        <th>
          itemA
        </th>
        <th>
          itemB
        </th>
      </tr>
      <tr>
        <th>
          itemE
        </th>
        <th>
          itemD
        </th>
      </tr>
    </tbody>
  </ca-data-table>
  </div>
</template>
<script>
/* eslint-disable */
import Fuse from 'fuse.js'

export default {
  name: 'search',
  data: () => ({
    searchInput: '',
    fuse: null,
    // TODO: Generator Those data
    books: [{
      'ISBN': 'A',
      'title': "Old Man's War",
      'author': 'John Scalzi',
    }, {
      'ISBN': 'B',
      'title': 'The Lock Artist',
      'author': 'Steve Hamilton',
    },
    ],
    options:  {
      keys: [{
        name: 'title',
        weight: 0.3
      }, {
        name: 'author',
        weight: 0.7
      }]
    },
    elementInput: null,
    elementResult: null,
  }),
  beforeMount() {
    this.fuse = new Fuse(this.books, this.options)
  },
  mounted() {
    // add focus event API to ca-search
    this.elementInput = document.querySelector('.search__input');
    this.elementResult = document.querySelector('.search__result');
    this.elementInput.addEventListener('focus', this.toggleResult, true);
    this.elementInput.addEventListener('blur', this.toggleResult, true);
  },
  methods: {
    toggleResult() {
      this.elementResult.style.visibility = this.elementResult.style.visibility === 'visible' ? 'hidden' : 'visible'
    },
  },
  watch: {
    searchInput: function(newValue) {
      console.log(this.fuse.search(newValue))
    }
  }
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
