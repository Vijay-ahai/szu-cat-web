<template>
  <div id="main">
    <h1>{{ msg }}</h1>
    <slider></slider>
  </div>
</template>

<script>
  import slider from './Slider.vue'

  export default {
    name: 'Home',
    components: {
      slider
    },
    data () {
      return {
        msg: 'Welcome to SZU Cat Website!'
      }
    }
  }
</script>

<style lang="css">
  #main {
    display: flex;
    flex-direction: column;
  }
</style>