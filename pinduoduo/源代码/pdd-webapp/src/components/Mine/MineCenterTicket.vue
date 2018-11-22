<template>
  <div class="ticket">
    <div class="ticketList">
      <i class="iconfont icon-youhuiquan-"></i>
      <p>优惠券</p>
    </div>
    <div class="ticketList">
      <i class="iconfont icon-shangpinshoucang"></i>
      <p>商品收藏</p>
    </div>
    <div class="ticketList">
      <i class="iconfont icon-haofangtuoiconfont_dianpushoucang"></i>
      <p>店铺收藏</p>
    </div>
    <div class="ticketList">
      <i class="iconfont icon-zuji"></i>
      <p>历史记录</p>
    </div>
    <div class="ticketList">
      <i class="iconfont icon-tuikuan"></i>
      <p>退款售后</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineCenterTicket"
    }
</script>

<style scoped>
  .center .ticket{
    width: 100%;
    display: flex;
    -webkit-justify-content: space-around;
    margin-top: 0.11rem;
    background: #ffffff;
  }
  .ticket .ticketList{
    display: flex;
    flex-direction: column;
  }
  .ticketList i{
    color: #9b9b9b;
    font-size: 0.35rem;
    text-align: center;
    color: #df2e1a;
    margin-top: 0.35rem;
  }
  .ticketList p{
    font-size: 0.18rem;
    color: #595a5c;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
  }
</style>
