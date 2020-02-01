<template>
  <div id="app">
    <div class="container">
      <app-header>
        <div class="row">
          <div class="col-xs-12">
            <router-view></router-view>
          </div>
        </div>
      </app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('stocks/initStocks');
    }
  }
</script>

<style>
  body {
    padding: 30px;
  }
</style>
