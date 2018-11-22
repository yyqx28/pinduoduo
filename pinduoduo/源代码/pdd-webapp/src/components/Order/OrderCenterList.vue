<template>
  <div class="orders">
    <div class="orderStore">
      <div class="orderStoreL">
        <p>
          <img src="/static/images/orderstore.jpg" alt=""/>
          {{p.storename}}
          <img src="/static/images/orderstore2.jpg" alt=""/>
        </p>
      </div>
      <div class="orderStoreR">
        拼单中...
      </div>
    </div>
    <div class="orderGood">
      <div class="orderGoodL">
        <img :src="p.pic" alt=""/>
      </div>
      <div class="orderGoodC">
        <p>{{p.tit}}</p>
        <span>{{p.type}}</span>
      </div>
      <div class="orderGoodR">
        <P>￥{{p.price}}</P>
        <span>x{{p.sum}}</span>
      </div>
    </div>
    <div class="pay">
      <p>实付：￥{{p.pay}}(免运费)</p>
    </div>
    <div class="delorder">
      <span @click="dele">{{p.del}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "OrderCenterList",
      props:["p","index"],
      // props:{
      //   p:{
      //     type:Object,
      //     default:''
      //   },
      //   index:{
      //     type:Number,
      //     default: ''
      //   },
      //   s:{
      //     type:Function
      //   }
      // },
      methods:{
        close(){
          this.p={};
        },
        dele(){
          this.$emit("watch",this.index);
          // this.close();
          // if(this.dele){
          //   this.dele(this.index);
          // }
        }
      }
    }
</script>

<style scoped>
  .center .orders{
    margin-top: 0.12rem;
    background: #ffffff;
    width:100%;
    height:2.2rem;
  }
  .orders .orderStore{
    display: flex;
    -webkit-justify-content: space-between;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }
  .orderStore .orderStoreL{
    display: flex;
  }
  .orderStoreL p{
    font-size:0.15rem ;
    color: #0e1211;
  }
  .orderStoreL p img:nth-child(1){
    width:0.2rem;
    height:0.2rem;
    margin-left:0.1rem ;
    margin-right:0.13rem ;
    vertical-align: middle;

  }
  .orderStoreL p img:nth-child(2){
    width:0.1rem;
    height:0.1rem;
    margin-left:0.1rem ;
  }
  .orderStore .orderStoreR{
    display: flex;
    font-size: 0.15rem;
    color: #c7322b;
    margin-right: 0.1rem;
  }
  .orders .orderGood{
    width:100%;
    height:0.83rem;
    background: #f5f5f5;
    display: flex;
    padding-top: 0.06rem;
  }
  .orderGood .orderGoodL{
    width:26%;
    height:0.83rem;
    /*background: lightcyan;*/
    display: flex;
  }
  .orderGoodL img{
    width:0.78rem;
    height:0.78rem;
    margin-left: 0.1rem;
  }
  .orderGood .orderGoodC{
    width:64%;
    height:0.83rem;
    /*background: lightcoral;*/
    display: flex;
    flex-direction: column;
  }
  .orderGoodC p{
    font-size: 0.145rem;
    color: #0e100f;
  }
  .orderGoodC span{
    font-size: 0.14rem;
    color: #989898;
    margin-top: 0.09rem;
  }
  .orderGood .orderGoodR{
    width:10%;
    height:0.83rem;
    /*background: lightgrey;*/
    display: flex;
    flex-direction: column;
  }
  .orderGoodR p{
    font-size: 0.145rem;
    color: #0e100f;
  }
  .orderGoodR span{
    font-size: 0.14rem;
    color: #989898;
    margin-top: 0.09rem;
    margin-left: 0.06rem;
  }
  .orders .pay{
    display: flex;
    -webkit-justify-content: flex-end;
    height:0.39rem;
    border:1px solid #f4f4f4;
  }
  .pay p{
    font-size: 0.13rem ;
    color:#1c1e1d ;
    line-height: 0.39rem;
    margin-right: 0.11rem;
  }
  .orders .delorder{
    display: flex;
    -webkit-justify-content: flex-end;
    padding-top: 0.07rem;
    padding-bottom:0.07rem ;
    border:1px solid #f4f4f4;
  }
  .delorder span{
    font-size: 0.13rem ;
    color:#1c1e1d ;
    line-height: 0.29rem;
    margin-right: 0.11rem;
    padding:0 0.08rem;
    border-radius: 0.05rem;
    border: 1px solid #989898;
  }
</style>
