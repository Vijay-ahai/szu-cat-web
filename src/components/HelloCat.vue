<template>
  <div class="hello">
    <img src="../assets/helloCat.gif">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloCat',
    data () {
      return {
        msg: 'Welcome to SZU Cat Website!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    margin-top: 100px;
  }

  h1 {
    font-weight: normal;
  }
</style>
