<template>
   <div>
     <div class="storename">
       <div class="storenameL">
         <img src="/static/images/store1.jpg" alt=""/>
         <div class="sp">
           <h6>壹号卖家旗舰店</h6>
           <p> <span>商品数量:78</span><span>已拼:23243件</span></p>
         </div>
       </div>
       <div class="storenameR">
         <span>进店逛逛</span>
       </div>
     </div>
     <div class="discr">
       <p>描述相符<span>高</span></p>
       <p>描述相符<span>高</span></p>
       <p>描述相符<span>高</span></p>
     </div>
   </div>
</template>

<script>
    export default {
        name: "DetailCenterStore"
    }
</script>

<style scoped>
  .center .storename{
    display: flex;
    margin-top: 0.12rem;
    background: #ffffff;
    -webkit-justify-content: space-between;
    padding-top: 0.13rem;
    padding-bottom: 0.19rem;
  }
  .storename .storenameL{
    display: flex;
  }
  .storenameL img{
    width:0.6rem;
    height:0.6rem;
    margin-right:0.15rem;
    margin-left: 0.18rem;
  }
  .storenameL .sp{
    display: flex;
    flex-direction: column;
  }
  .sp h6{
    font-size: 0.2rem;
    color: #171717;
    font-weight: 100;
  }
  .sp p{
    display: flex;
    margin-top: 0.1rem;
  }
  .sp p span{
    font-size:0.1rem ;
    color: #9c9c9c;
    /*margin-right:0.18rem ;*/
  }

  .storename .storenameR{
    display: flex;

  }
  .storenameR span{
    border: 2px solid #a1a1a1;
    font-size:0.16rem ;
    color: #5b5b5b;
    width:1rem;
    height:0.44rem;
    text-align: center;
    line-height: 0.44rem;
    /*padding:0.1rem ;*/
    border-radius: 0.04rem;
    margin-right: 0.18rem;
    margin-top: 0.05rem;
  }
  .center .discr{
    display: flex;
    -webkit-justify-content: space-around;
    background: #ffffff;
    padding-bottom: 0.21rem;
  }
  .discr p{
    font-size:0.15rem ;
    color:#9a9a9a ;
  }
  .discr p span{
    padding:0.04rem;
    font-size:0.16rem ;
    color:#d03847 ;
    background: #fff0f1;
    margin-left: 0.03rem;
  }

</style>
