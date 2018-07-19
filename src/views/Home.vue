<template>
  <ca-layout wrap class="home">
    <ca-flex col="xs8 sm8 md8 lg8 xl8" offset="xs2 sm2 md2 lg2 xl2" class="home__logo">
      <div class="home__logo__banner">
        <img class="home__logo__banner__icon" src='../../public/HomeBanner.png' />
        <div>
          <a href="https://www.npmjs.com/package/carvue">
            <img class="home__badges" src="https://img.shields.io/npm/v/carvue.svg" />
          </a>
          <a href="https://david-dm.org/nicholaslee119/carbon-components-vue?type=dev">
            <img class="home__badges" src="https://david-dm.org/nicholaslee119/carbon-components-vue/dev-status.svg" />
          </a>
          <a href="https://coveralls.io/github/nicholaslee119/carbon-components-vue?branch=master">
            <img class="home__badges" src=" https://coveralls.io/repos/github/nicholaslee119/carbon-components-vue/badge.svg?branch=master" />
          </a>
          <a href=" https://travis-ci.org/nicholaslee119/carbon-components-vue">
            <img class="home__badges" src="https://travis-ci.org/nicholaslee119/carbon-components-vue.svg?branch=master" />
          </a>
          <a href="https://github.com/nicholaslee119/carbon-components-vue">
          <img class="home__badges" src="https://img.shields.io/github/stars/nicholaslee119/carbon-components-vue.svg?style=social&label=Stars" />
        </a>
        </div>
        <p class="home__logo__banner__title">Carvue is a UI components library which is based on Carbon-Design and VueJS with ❤️ </p>
        <ca-button class="home__logo__btn" icon="icon--power" primary><router-link to="/GetStarted">Get Started</router-link></ca-button>
        <ca-button class="home__logo__btn" icon="icon--pa" primary><router-link to="/Component/Accordion">Components</router-link></ca-button>
        <ca-button class="home__logo__btn" icon="icon--services" primary><router-link to="/Ecosystem">Ecosystem</router-link></ca-button>
      </div>
    </ca-flex>
  </ca-layout>
</template>

<script>
export default {
  name: 'home',
}
</script>

<style>
.home__logo {
  text-align: center;
}

.home__logo__banner__icon {
  width: 500px;
}

.home__badges {
  margin: 20px 10px;
}

.home__logo__btn {
  margin: 40px 35px;
}

.home__logo__btn a {
  text-decoration: none;
  color: #ffffff;
}

.home__logo__banner {
  padding: 100px 0 400px 0;
}

</style>
