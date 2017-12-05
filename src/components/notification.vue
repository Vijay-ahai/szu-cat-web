<template>
  <div id="notification">
    <div class="notif" :class={notifocus:isfocused} @mouseenter="isfocused=true" @mouseleave="isfocused=false">
      <p class="word">通知</p>
      <p v-html="content" class="cont"></p>
      <img src="../../static/img/公众号二维码.jpg" class="public"/>
      <a  class="more"  > <router-link to="/notif_more">查看更多...</router-link></a>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        content: '1.猫咪协会建立啦<br/>2.最近活动在紧张筹备中！<br/>3.详情请关注我们公众号！<br>',
        isfocused: false
      }
    }

  }
</script>

<style lang="css">

  div.notif{
    position: absolute;
    right:0px;
    margin: 20px;
    background-color: #F8F8F8;
    border-radius: 10px;
    font-size: 5px;
    height: 350px;
    width: 150px;
    border: 1px #E8E8E8 solid ;
    border-top:none;
    border-left:none;

    }
  div.notifocus{
    background-color: white;
    border: 1px black solid;
  }
  p.word{
    font-family: 幼圆;
    font-size: 30px;
    margin: 0px 20px;
    text-align: center;
    padding:5px;
    border-bottom: 1px solid black;
  }
  p.cont{
   text-align: left;
    color: black;
    font-family: 微软雅黑;
    color:  #585858;
  }
  a.more{
    position: absolute;
    bottom: 0px;
    font-size: 5px;
    right:0px;
  }
  img.public{
    width:130px;
    height:130px;
    position: absolute;
    bottom: 20px;
    margin-left:-65px;
  }
</style>
