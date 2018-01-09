<template>
  <footer class="foot">
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-foot',
    data () {
      return {
        copyright:"Copyright 2018 Emma."
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  footer p{
    color: lightgreen;
    text-align: center;
  }
</style>
