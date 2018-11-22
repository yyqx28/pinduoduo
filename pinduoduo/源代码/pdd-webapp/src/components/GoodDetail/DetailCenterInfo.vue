<template>
  <div class="goodinfo">
    <h3>商品详情</h3>
    <div class="infos">
      <p><span>型号</span>iphone XS Max</p>
      <p><span>存储容量</span>256GB , 64GB</p>
      <p><span>屏幕尺寸</span>6.5英寸</p>
    </div>
    <p class="items">天天模拟器是一款可以让安卓手游在电脑上完美运行的安卓模拟器电脑版,也是由国人自主研发、支持opengl硬件加速、支持游戏双开,是目前性能优异的安卓模拟器,游戏运</p>
  </div>
</template>

<script>
    export default {
        name: "DetailCenterInfo"
    }
</script>

<style scoped>
  .center .goodinfo{
    display: flex;
    flex-direction: column;
    background: #ffffff;
    margin-top: 0.12rem;
    padding: 0.25rem 0.15rem 0.25rem 0.15rem;
  }
  .goodinfo h3{
    font-size: 0.2rem;
    color: #111111;
    font-weight: 100;
    /*margin-left: 0.15rem;*/
  }
  .goodinfo .infos{
    background: #fafafa;
    display: flex;
    flex-direction: column;
    /*margin-left: 0.15rem;*/
    margin-right: 0.15rem;
    margin-top: 0.13rem;
    margin-bottom: 0.18rem;
  }
  .infos p{
    font-size: 0.17rem;
    color: #151515;
    margin-bottom: 0.2rem;
    margin-left: 0.2rem;
  }
  .infos p span{
    font-size: 0.17rem;
    color: #9f9f9f;
    margin-bottom: 0.22rem;
    width:1.35rem;
  }
  .goodinfo .items{
    font-size: 0.15rem;
    color: #5b5d5c;
    line-height:0.3rem ;
  }
</style>
