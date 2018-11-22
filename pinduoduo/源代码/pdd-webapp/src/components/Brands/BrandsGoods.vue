<template>
    <div class="bList">
      <div class="goodImg">
        <img :src="item.goodsPic" />
      </div>
      <div class="goodRight">
        <h3><img :src="item.activePic" />{{item.title}}</h3>
        <div class=" goodRightBottom">
          <span class="tag">{{item.tag}}</span>
          <p>￥{{item.price}}<span>已拼{{item.qal}}万件</span><img :src="item.personPic" alt=""/></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "BrandsGoods",
      props:["item"]
    }
</script>

<style scoped>
  .bList{
    background: #ffffff;
    width:3.53rem;
    height:1.7rem;
    border-radius:0.05rem;
    margin-top: 0.1rem;
    padding:0.05rem 0.05rem 0.06rem 0.06rem;
    display: flex;
    -webkit-justify-content: space-around;

  }
  .bList .goodImg{
    display: flex;
  }
  .bList .goodImg img{
    width:1.55rem;
    height:1.6rem;
    vertical-align: middle;
    margin-right: 0.09rem;
  }
  .bList .goodRight{
    display: flex;
    flex-direction: column;
    height:1.5rem;
    margin-top: 0.06rem;
    -webkit-justify-content: space-between;
  }
  .goodRight h3 img{
    width:0.3rem;
    height:0.16rem;
    margin-right: 0.06rem;
  }
  .goodRight h3{
    font-size: 0.14rem;
    color:#060606;
    font-weight: 100;
  }
  .goodRight .goodRightBottom{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .goodRight .goodRightBottom .tag{
    display: inline-block;
    /*width: 0.45rem;*/
    /*height: 0.15rem;*/
    padding:0.04rem 0.05rem;
    background: #f5f9ec;
    border-radius: 0.04rem;
    text-align: center;
    font-size: 0.1rem;
    color: #ff4a00;
    margin-bottom: 0.1rem;
    line-height: 0.15rem;
  }
  .goodRight .goodRightBottom p{
    font-size:0.14rem ;
    color:#e72623 ;
  }
  .goodRightBottom p span{
    font-size:0.12rem ;
    color:#909090 ;
    margin-left: 0.04rem;
    margin-right: 0.25rem;
  }
  .goodRightBottom p img{
    width:0.4rem;
    height:0.23rem;
    vertical-align: middle;
    margin-bottom: 0.05rem;
  }
</style>
