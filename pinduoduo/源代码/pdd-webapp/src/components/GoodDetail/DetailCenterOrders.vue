<template>
  <div class="dorders">
    <div class="dordersTop">
      <div class="dLeft">11人在拼单</div>
      <div class="dRight">查看更多<i class="iconfont icon-xiangyoujiantou"></i></div>
    </div>
    <div class="dordersBttoom">
      <div class="dbLeft">
        <p><img src="/static/images/dOrder1.jpg" alt=""/>Chu 猪</p>
      </div>
      <div class="dbRight">
        <div class="bdRightL">
          <p>还差<span>1人</span>拼成</p>
          <p>剩余23:36:15.1</p>
        </div>
        <div class="bdRightR">
          <span>去拼单</span>
        </div>
      </div>
    </div>
    <div class="dordersBttoom">
      <div class="dbLeft">
        <p><img src="/static/images/dOrder1.jpg" alt=""/>Chu 猪</p>
      </div>
      <div class="dbRight">
        <div class="bdRightL">
          <p>还差<span>1人</span>拼成</p>
          <p>剩余23:36:15.1</p>
        </div>
        <div class="bdRightR">
          <span>去拼单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailCenterOrders"
    }
</script>

<style scoped>
  .center .dorders{
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
  .dorders .dordersBttoom{
    display: flex;
    -webkit-justify-content: space-between;
    margin-left: 0.15rem;
    border-top: 1px solid #f3f3f3;
    padding-bottom: 0.15rem;
  }
  .dordersBttoom .dbLeft{
    display: flex;
  }
  .dbLeft p{
    font-size: 0.2rem;
    color: #1a1a1a;
    line-height: 0.7rem;
    /*margin-top: 0.1rem;*/
  }
  .dbLeft p img{
    width:0.6rem;
    height:0.6rem;
    vertical-align: middle;
    margin-right: 0.15rem;
    margin-top: 0.1rem;
  }
  .dordersBttoom .dbRight{
    display: flex;
  }
  .dbRight .bdRightL{
    display: flex;
    flex-direction: column;
    margin-top: 0.15rem;
  }
  .bdRightL p:nth-child(1){
    font-size:0.18rem ;
    color:#0e0e0e ;
  }
  .bdRightL p:nth-child(1) span{
    color:#f13536;
  }
  .bdRightL p:nth-child(2){
    font-size:0.16rem ;
    color:#575958;
  }
  .dbRight .bdRightR{
    display: flex;
    margin-top: 0.15rem;
  }
  .bdRightR span{
    width:0.8rem;
    height:0.4rem;
    background: #df2e24;
    border-radius: 0.04rem;
    margin-left: 0.1rem;
    font-size: 0.18rem;
    color:#eff9fb ;
    line-height:0.4rem ;
    text-align: center;
    margin-right: 0.1rem;
  }
</style>
