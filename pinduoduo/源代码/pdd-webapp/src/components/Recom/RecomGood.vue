<template>
  <div class="recomGood" >
    <div class="goodTop">
      <img :src="inx.goodsPic" />
    </div>
    <div class="goodButtom">
      <h3><img :src="inx.activePic" alt=""/>{{inx.title}}</h3>
      <div class=" goodBottomB">
        <span class="tag">{{inx.tag}}</span>
        <p>
          ￥{{inx.price}}<span class="count">已拼{{inx.qal}}万+件</span>
          <span class="find">发现<i class="iconfont icon-xiangyoujiantou"></i></span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Recomgood",
        props:["inx"]
    }
</script>
<style scoped>
  .recomGood{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height:3rem;
    width:1.85rem;
    background: #ffffff;
    margin-bottom: 0.04rem;
    flex-shrink: 0;
  }
  .recomGood .goodTop{
    display: flex;
  }
  .goodTop img{
    width:1.85rem;
    height:1.85rem;
  }
  .recomGood .goodButtom{
    display: flex;
    flex-direction: column;
    /*height:0.68rem;*/
    -webkit-justify-content: space-between;
  }
  .goodButtom h3{
    font-size: 0.14rem;
    color:#060606;
    font-weight: 100;
    margin-bottom: 0.14rem;
    margin-top: 0.13rem;
  }
  .goodButtom h3 img{
    width:0.3rem;
    height:0.16rem;
    margin-right: 0.06rem;
  }
  .goodButtom .goodBottomB{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .goodButtom .goodBottomB .tag{
    display: inline-block;
    padding:0.04rem 0.05rem;
    background: #f5f9ec;
    border-radius: 0.04rem;
    text-align: center;
    font-size: 0.1rem;
    color: #ff4a00;
    line-height: 0.15rem;
    margin-bottom: 0.1rem;
  }
  .goodButtom .goodBottomB p{
    font-size:0.14rem ;
    color:#e72623 ;

  }
  .goodBottomB p .count{
    font-size:0.12rem ;
    color:#909090 ;
    margin-left: 0.04rem;
    margin-right: 0.16rem;
  }
  .goodBottomB p .find{
    height:0.26rem;
    width:0.47rem;
    border:1px solid #dbdbdb;
    border-right:0;
    border-bottom-left-radius: 0.13rem;
    border-top-left-radius: 0.13rem;
    font-size: 0.11rem;
    color:#6e6e70;
    line-height:0.26rem;
    padding:0.02rem 0.01rem 0.04rem 0.04rem;
  }
  p .find i{
    font-size:0.07rem ;
    color: #6e6e70;
    margin-left: 0.05rem;
    line-height: 0.26rem;
  }
</style>
