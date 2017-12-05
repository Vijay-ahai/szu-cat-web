<template>
  <div id="main">
    <h1>{{ msg }}</h1>
    <tips></tips>
    <slider></slider>

  </div>
</template>

<script>
  import slider from './Slider.vue'
  import tips from './notification.vue'
  export default {
    name: 'Home',
    components: {
      slider,
      tips
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
