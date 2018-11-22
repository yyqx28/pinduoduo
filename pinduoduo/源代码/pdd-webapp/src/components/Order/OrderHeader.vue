<template>
  <div class="header">
    <div class="headerTop">
      <img src="/static/images/order1.jpg" alt="" @click="goMine"/>
      <h3>我的订单</h3>
      <img src="/static/images/order2.jpg" alt=""/>
    </div>
    <div class="headerList">
      <a href="javascript:;" v-for="p in list">{{p.title}}</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "OrderHeader",
        props:["list"],
        methods:{
          goMine:function(){
            this.$router.push({ path: '/Mine' });
          }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    position: fixed;
    top:0;
    background: #ffffff;
  }
  .header .headerTop{
    margin-left: 0.13rem;
    margin-right: 0.13rem;
    display: flex;
    -webkit-justify-content: space-between;
    height:0.45rem;
  }
  .headerTop img{
    width:0.21rem;
    height:0.21rem;
    margin-top: 0.11rem;
  }

  .headerTop h3{
    font-size: 0.2rem;
    color: #2f2f2f;
    line-height: 0.45rem;
  }
  .header .headerList{
    width:100%;
    height:0.39rem;
    display: flex;
    overflow-x:auto ;
    /*margin-left: 0.13rem;*/
    border-bottom: 1px solid #cfcfcf;
    border-top: 1px solid #cfcfcf;
  }
  .headerList::-webkit-scrollbar{
    display: none;
  }
  .headerList a{
    font-size:0.15rem;
    color:#454545;
    line-height: 0.39rem;
    white-space:nowrap;
    cursor: pointer;
    margin:0 0.16rem;
    flex-shrink: 0;
  }
</style>
