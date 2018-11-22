<template>
  <div class="assess">
    <div class="dordersTop">
      <div class="dLeft">商品评价(344546)</div>
      <div class="dRight">查看全部<i class="iconfont icon-xiangyoujiantou"></i></div>
    </div>
    <div class="assSpan">
      <span>价格实惠(122)</span>
      <span>手机不错(122)</span>
      <span>质量好(122)</span>
    </div>
    <div class="perass">
      <p><img src="/static/images/per1.jpg" alt=""/>Z.ang</p>
      <p>程控制的应用程序，桌面共享和文件传输的简单且快速的解决方案</p>
    </div>
    <div class="perass">
      <p><img src="/static/images/per1.jpg" alt=""/>Z.ang</p>
      <p>程控制的应用程序，桌面共享和文件传输的简单且快速的解决方案</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailCenterAssess"
    }
</script>

<style scoped>
  .center .assess{
    width:100%;
    background:#ffffff;
    margin-top: 0.12rem;
  }
  .dordersTop{
    width:100%;
    height:0.6rem;
    display: flex;
    justify-content: space-between;
    /*background: lightpink;*/
  }
  .dordersTop .dLeft{
    font-size: 0.22rem;
    color: #0c0c0c;
    line-height: 0.6rem;
    margin-left: 0.17rem;
    /*margin-right: 1.55rem;*/
  }
  .dordersTop .dRight{
    font-size:0.18rem ;
    color: #a4a4a4;
    line-height: 0.6rem;
    margin-right: 0.17rem;
  }
  .dordersTop .dRight i{
    font-size:0.16rem ;
    color: #a4a4a4;
    line-height: 0.6rem;
    margin-left: 0.15rem;
  }
  .assess .assSpan{
    border-top: 1px solid #f3f3f3;
    margin-left: 0.15rem;
    display: flex;
    flex-wrap: wrap;
  }
  .assSpan span{
    flex-shrink: 0;
    padding:0.15rem;
    background: #fceae8;
    font-size:0.16rem ;
    color: #5a5653;
    border-radius: 0.07rem;
    margin-top: 0.16rem;
    margin-right: 0.12rem;
  }
  .assess .perass{
    display: flex;
    flex-direction: column;
    margin-left: 0.15rem;
    margin-right: 0.15rem;
    padding-bottom: 0.2rem;
    border-bottom:1px solid #f3f3f3;
    padding-top: 0.15rem;

  }
  .perass p:nth-child(1){
    font-size:0.15rem ;
    color: #000000;
    line-height: 0.35rem;
  }
  .perass p:nth-child(1) img{
    width:0.35rem;
    height:0.35rem;
    vertical-align: middle;
    margin-bottom: 0.15rem;
  }
  .perass p:nth-child(2){
    font-size:0.15rem ;
    color:#595a5c ;
    line-height: 0.3rem;
  }
</style>
