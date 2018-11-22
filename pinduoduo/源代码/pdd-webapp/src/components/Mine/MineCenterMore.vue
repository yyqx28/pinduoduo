<template>
  <div class="more">
    <div class="moreList">
      <img src="/static/images/more1.jpg" alt=""/>
      <p>多多果园</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more2.jpg" alt=""/>
      <p>砍价免费拿</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more3.jpg" alt=""/>
      <p>大奖必中</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more4.jpg" alt=""/>
      <p>边逛边转</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more5.jpg" alt=""/>
      <p>天天领现金</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more6.jpg" alt=""/>
      <p>收货地址</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more1.jpg" alt=""/>
      <p>我的评价</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more1.jpg" alt=""/>
      <p>官方客服</p>
    </div>
    <div class="moreList">
      <img src="/static/images/more1.jpg" alt=""/>
      <p>设置</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineCenterMore"
    }
</script>

<style scoped>
  .center .more{
    width: 100%;
    display: flex;
    -webkit-justify-content: space-between;
    margin-top: 0.11rem;
    background: #ffffff;
    flex-wrap: wrap;
    padding-bottom:0.3rem ;
  }
  .more .moreList{
    width:1rem;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  .moreList img{
    width: 0.35rem;
    height: 0.35rem;
    margin-left: 0.35rem;
    margin-top: 0.3rem;
  }
  .moreList p{
    font-size: 0.18rem;
    color: #595a5c;
    text-align: center;
    /*margin-top: 0.2rem;*/
    /*margin-bottom: 0.3rem;*/
  }
</style>
