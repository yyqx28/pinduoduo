<template>
  <div class="order">
    <div class="orderTop">
      <div class="otLeft">我的订单</div>
      <router-link to="/Order">
        <div class="otRight">查看全部<i class="iconfont icon-xiangyoujiantou"></i></div>
      </router-link>
    </div>
    <div class="orderBottom">
      <div class="orderList">
        <i class="iconfont icon-daifukuan"></i>
        <p>待付款</p>
      </div>
      <div class="orderList">
        <i class="iconfont icon-fenxiang"></i>
        <p>待分享</p>
      </div>
      <div class="orderList">
        <i class="iconfont icon-biao"></i>
        <p>待发货</p>
      </div>
      <div class="orderList">
        <i class="iconfont icon-icon3"></i>
        <p>待收货</p>
      </div>
      <div class="orderList">
        <i class="iconfont icon-daipingjiaicon"></i>
        <p>待评价</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineCenterOrder"
    }
</script>

<style scoped>
  .center .order{
    width: 100%;
    /*display: flex;*/
    background: #ffffff;
    /*margin-left:0.17rem ;*/
    /*margin-right:0.17rem ;*/
  }
  .order .orderTop{
    width:100%;
    height:0.6rem;
    display: flex;
    justify-content: space-between;
    /*background: lightpink;*/
  }
  .orderTop .otLeft{
    font-size: 0.22rem;
    color: #0c0c0c;
    line-height: 0.6rem;
    margin-left: 0.17rem;
    /*margin-right: 1.55rem;*/
  }
  .orderTop .otRight{
    font-size:0.18rem ;
    color: #a4a4a4;
    line-height: 0.6rem;
    margin-right: 0.17rem;
  }
  .orderTop .otRight i{
    font-size:0.16rem ;
    color: #a4a4a4;
    line-height: 0.6rem;
    margin-left: 0.15rem;
  }
  .order .orderBottom{
    width: 100%;
    display: flex;
    -webkit-justify-content: space-around;
  }
  .orderBottom .orderList{
    display: flex;
    flex-direction: column;
  }
  .orderList i{
    color: #9b9b9b;
    font-size: 0.35rem;
    text-align: center;
  }
  .orderList p{
    font-size: 0.18rem;
    color: #595a5c;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
  }
</style>
