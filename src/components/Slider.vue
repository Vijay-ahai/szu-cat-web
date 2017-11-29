<template>
  <div id="slider">
    <slider v-bind="setting"></slider>
  </div>
</template>

<script>
  import slider from 'vue-image-scroll'

  export default {
    components: {
      slider
    },
    data () {
      return {
        setting: {
          styleObject: {
            width: '500',
            height: '300',
            backgroundColor: 'rgba(0, 225, 226, 0.2)',
            borderRadius: '20px'
          },
          image: [
            {
              src: 'static/img/大黄.jpg',
              tagName: '大黄',
              tagStyle: {
                backgroundColor: 'blue',
                fontSize: '20px'
              }
            },
            {
              src: 'static/img/小黄和小黑.jpg',
              tagName: '小黄和小黑',
              tagStyle: {
                backgroundColor: 'green',
                fontSize: '20px'
              }
            },
            {
              src: 'static/img/楼楼.jpg',
              tagName: '楼楼',
              tagStyle: {
                backgroundColor: 'yellow',
                color: 'black',
                fontSize: '20px'
              }
            },
            {
              src: 'static/img/花生姐.jpg',
              tagName: '花生姐',
              tagStyle: {
                backgroundColor: 'orange',
                fontSize: '20px'
              }
            },
            {
              src: 'static/img/flash.jpg',
              tagName: 'flash',
              tagStyle: {
                fontSize: '20px'
              }
            }
          ],
          interval: 2000,
          imgStyle: {
            borderRadius: '20px'
          },
          autoRoll: true,
          direction: 'right'
        }
      }
    }
  }
</script>

<style lang="css">
  #slider {
    margin: 2em auto;
  }
</style>