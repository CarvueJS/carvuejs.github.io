<template>
  <div class="slideMenu">
    <p class="slideMenu__title">CarvueJS</p>
    <p class="slideMenu__subTitle">Carbon Design in VueJS</p>
    <ca-search class="slideMenu__search"></ca-search>
    <ca-accordion>
      <div class="slideMenu__item">GET STARTED</div>
      <ca-accordion-item title="Components" active>
        <ul class="slideMenu__item__list">
          <li v-for="page in pages" :key="page"><router-link :to="page">{{page}}</router-link></li>
        </ul>
      </ca-accordion-item>
      <div class="slideMenu__item">ABOUT US</div>
    </ca-accordion>
  </div>
</template>

<script>
export default {
  name: 'slideMenu',
  data: () => ({
    // TODO: generator the array automatically
    pages: [
      'Accordion',
      'Breadcrumb',
      'Button',
      'Checkbox',
      'CodeSnippet',
      'contentSwitcher',
    ],
  }),
}
</script>

<style scoped>
.slideMenu__title {
  font-size: 20px;
}

.slideMenu__subTitle {
  font-size: 12px;
}

.slideMenu__search {
  margin: 20px 0;
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
