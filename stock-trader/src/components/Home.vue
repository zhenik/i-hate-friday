<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>You may save ur crap</h6>
    <hr>
    <p>Your fund: {{funds | currency}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      funds() {
        return this.$store.getters['portfolio/funds']
      }
    }
  }
</script>