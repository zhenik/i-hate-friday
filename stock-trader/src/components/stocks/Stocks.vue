<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock" v-bind:key="stock.id"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
    data() {
      return {
        stocks: [
          {id:1, name: 'BMW', price: 110},
          {id:2, name: 'GOOGLE', price: 200},
          {id:3, name: 'APPLE', price: 250},
          {id:4, name: 'TAPAD', price: 8},
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>