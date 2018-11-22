<template>
  <div class="centerLeft">
    <a href="">女装</a>
    <a href="">鞋包</a>
    <a href="">母婴</a>
    <a href="">男装</a>
    <a href="">内衣</a>
    <a href="">食品</a>
    <a href="">百货</a>
    <a href="">美妆</a>
    <a href="">手机</a>
    <a href="">电器</a>
    <a href="">家纺</a>
    <a href="">家具</a>
    <a href="">电脑</a>
    <a href="">充值</a>
    <a href="">水果</a>
    <a href="">运动</a>
    <a href="">家装</a>
    <a href="">汽车</a>
    <a href="">海淘</a>
    <a href="">健康</a>
  </div>
</template>

<script>
    export default {
        name: "SearchCeneterLeft"
    }
</script>

<style scoped>
  .center .centerLeft{
    width:34%;
    height:4.8rem;
    background:#f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
  .centerLeft::-webkit-scrollbar{
    display: none;
  }
  .centerLeft a{
    display: inline-block;
    padding:0.1rem 0.3rem;
    line-height: 0.39rem;
    font-size:0.22rem ;
    color: #535456;
    white-space: nowrap;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
