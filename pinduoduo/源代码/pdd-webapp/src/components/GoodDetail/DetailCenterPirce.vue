<template>
    <div>
      <div class="gTitImg">
        <img src="/static/images/good2.jpg" alt="" class="gImg"/>
      </div>
      <div class="goodPrice">
        <div class="goodPriceLeft">
          <p>￥<span class="currPrice">8699</span><span class="through">￥109999</span>仅剩648件</p>
          <span class="sums">累计已拼4.1万件</span>
        </div>
        <div class="goodPriceRight">
          <div class="argle"></div>
          <p><img src="/static/images/time.jpg" alt=""/>限时秒杀</p>
          <div class="time">
            <div class="timebox hours_num"></div><span>:</span>
            <div class="timebox minutes_num" ></div><span>:</span>
            <div class="timebox seconds_num"></div>
          </div>
        </div>
      </div>
      <div class="gDel">
        <h3>【国行正品带票】iphone ceewfewffc</h3>
        <span class="shun">顺丰包邮</span>
        <p><img src="/static/images/del.jpg" alt=""/>商品售完是未能拼单者视为抢购失败，将发起退款</p>
        <div class="med">
          <p>
            正品发票<span>·</span>全国联保<span>·</span>全场包邮<span>·</span>7天退换
            <i class="iconfont icon-xiangyoujiantou"></i>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailCenterPirce",
      props:["goinfo"],
      methods:{
          _times(){
            setInterval(function(){
              var  endTime = new Date('2018-11-28 00:00:00');
              var startTime = new Date();
                //获取时间戳
                var c = endTime.getTime() - startTime.getTime();//毫秒
                c = c/1000;
                var sec = parseInt(c%60);
                var min = parseInt(c/60)%60;
                var hour = parseInt(c/3600)%24;
                document.querySelector(".hours_num").innerHTML=hour;
                document.querySelector(".minutes_num").innerHTML=min;
                document.querySelector(".seconds_num").innerHTML=sec;
          },1000);
          }
      },
      created() {
        this._times();
      }
    }
</script>

<style scoped>
  .gTitImg{
    display: flex;
    width:100%;
    height:4rem;
  }
  .gTitImg .gImg{
    width:100%;
    height:4rem;
  }

  .center .goodPrice{
    width:100%;
    display: flex;
    height:1rem;
    background: lightblue;
  }
  .goodPrice .goodPriceLeft{
    width:70%;
    /*height:0.96rem;*/
    background: #e02e24;
    display: flex;
    flex-direction: column;

  }
  .goodPriceLeft p{
    font-size:0.14rem ;
    color: #ffffff ;
    margin-left: 0.17rem;
    margin-top: 0.15rem;
  }
  .goodPriceLeft p .currPrice{
    font-size: 0.3rem;
  }
  .goodPriceLeft p .through{
    text-decoration: line-through;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
  }
  .goodPriceLeft .sums{
    font-size:0.15rem ;
    color: #ffd4dd;
    margin-left: 0.17rem;
    margin-top: 0.09rem;
    padding-bottom: 0.2rem;
  }
  .goodPrice .goodPriceRight{
    width:30%;
    /*height:0.96rem;*/
    background: #ffc42a;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .goodPriceRight p{
    font-size: 0.15rem;
    color:#922602 ;
    margin-left: 0.14rem;
    margin-top: 0.19rem;
  }
  .goodPriceRight p img{
    width:0.16rem;
    height:0.2rem;
    margin-right: 0.05rem;
    vertical-align: middle;
    margin-bottom:0.05rem ;
  }
  .goodPriceRight .time{
    display: flex ;
    margin-left: 0.1rem;
    margin-top: 0.12rem;
  }
  .goodPriceRight .time .timebox{
    width:0.24rem;
    height:0.24rem;
    background: #f69c24;
    font-size:0.13rem;
    color:#ffffff;
    text-align: center;
    line-height: 0.24rem;
  }
  .goodPriceRight .time span{
    font-size:0.003rem;
    color:#ffffff;
    margin-left: 0.04rem;
    margin-right:0.04rem ;
  }

  .goodPriceRight .argle{
    border:0.08rem solid transparent;
    position: absolute;
    top:0.4rem;
    left:-0.16rem;
    width:0;
    height:0;
    border-right-color: #ffc42a;
  }

  .center .gDel{
    width:100%;
    height: 1.7rem;
    background: #ffffff;
    display: flex;
    flex-direction: column;
  }
  .gDel h3{
    font-size:0.18rem ;
    color:#000000 ;
    margin-left: 0.2rem;
    margin-top: 0.15rem;
    margin-bottom: 0.11rem;
  }
  .gDel .shun{
    width:0.8rem;
    height:0.23rem;
    background: #23b31e;
    font-size:0.15rem;
    text-align: center;
    line-height: 0.23rem;
    color: #ffffff;
    margin-left: 0.1rem;
    margin-bottom: 0.1rem;
  }
  .gDel p{
    font-size: 0.15rem;
    color: #979797;
    margin-left: 0.1rem;
    margin-bottom: 0.12rem;
  }
  .gDel p img{
    width:0.2rem;
    height:0.2rem;
    margin-right: 0.06rem;
    vertical-align: middle;
  }
  .gDel .med{
    margin-left:0.15rem ;
    margin-right:0.15rem ;
    border-top: 1px solid #f2f2f2;
    display: flex;
  }
  .gDel .med p{
    font-size:0.15rem ;
    color:#585858 ;
    margin-top: .15rem;
    margin-bottom: 0.15rem;
  }
  .gDel .med p span{
    margin-left:0.11rem ;
    margin-right:0.11rem ;

  }
  .gDel .med p i{
    color: #d6d6d6;
    font-size:0.13rem ;
    margin-left: 0.05rem;
  }

</style>
