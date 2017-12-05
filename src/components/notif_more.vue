<template>
  <div class="dmore">
    <h2>{{msg}}</h2>
    {{this.addnotice}}
    <table v-for="notice in Nhistory">
      <tr>
        <td><h5 class="title">{{notice.title}}</h5>
          <p class="ntime">{{notice.ntime}}</p>
          <p class="ntime">{{notice.producer}}</p>
          <p class="content">{{notice.content}}</p>
        </td>
      </tr>
    </table>


  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: '通知',
        Nhistory: [{
          title: '关于深大动物保护协会近期活动',
          ntime: '2017-12-5',
          producer: '王小明',
          content: '请各部门确定自己义卖的工作分配，负责人有问题及时上报。同时各需求已下放到群，请各位务必保证不出差错。'
        },
        {
          title: '关于深大动物保护协会近期活动',
          ntime: '2017-12-5',
          producer: '王小明',
          content: '请各部门确定自己义卖的工作分配，负责人有问题及时上报。同时各需求已下放到群，请各位务必保证不出差错。'
        }
        ]
      }
    },
    computed: {
      addnotice: function () {
        this.Nhistory.push({title: '关于从数据库添加公告',
          ntime: '2017-12-5',
          producer: '王小明',
          content: '数据库表象名字请务必与本数组对象一致。'})
      }
    }
  }
</script>

<style>

  div.dmore{
    position: relative;

  }
  p{
    text-align: left;
  }
  h2{
   text-align: left;
    padding: 50px 10px 10px;
    background-color: #F8F8F8;
    border-bottom: 1px solid #E8E8E8;
  }
  h5.title{
    text-align: left;
    margin: 0px;

  }
  p.ntime{
    margin: 0px 5px 0px 0px;
    font-size: 5px;
    color: #E8E8E8;
    display: inline-block;
    float: left;

  }
  p.content{
    font-size: 15px;
    clear: both;
    margin-top: 25px;
    width: 25%;
  }
  table{
    border-bottom: 1px solid #E8E8E8;
    width: 80%;
    margin-left: 20px;
  }
</style>
