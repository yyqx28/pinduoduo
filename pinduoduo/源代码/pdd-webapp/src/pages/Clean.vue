<template>
  <div>
    <div class="header">
      <div class="headerTop">
        <img src="/static/images/clean1.jpg" alt="" @click="toIndex"/>
        <h3>每日清仓</h3>
        <img src="/static/images/clean2.jpg" alt=""/>
      </div>
      <div class="headerList" >
        <a href="javascript:;" v-for="p in list.cleanlist">{{p.title}}</a>
      </div>
    </div>
    <index-advert></index-advert>
    <div class="brands">
        <div class="brandlist" v-for="i in list.brandlist">
          <img :src="i.pic"/>
          <span>{{i.title}}</span>
        </div>
    </div>
    <clean-center :lists="list.stylelist" :clist="list.cleargoods"></clean-center>
  </div>

</template>

<script>
    import OrderHeader from "../components/Order/OrderHeader";
    import IndexAdvert from "../components/Index/IndexAdvert";
    import CleanCenter from "../components/Clean/CleanCenter";
    export default {
        name: "clean",
      components: {CleanCenter, IndexAdvert, OrderHeader},
      data(){
          return{
            list:{
              "cleanlist":[
                {"title":"断码清仓"},
                {"title":"今日清仓"},
                {"title":"品牌墙"},
                {"title":"男装"},
                {"title":"生鲜"},
                {"title":"家具"},
                {"title":"女装"}
              ],
              "brandlist":[
                {"title":"七匹狼","pic":"/static/images/brand1.jpg"},
                {"title":"卓诗尼","pic":"/static/images/brand2.jpg"},
                {"title":"耐克","pic":"/static/images/brand3.jpg"},
                {"title":"马克华菲","pic":"/static/images/brand4.jpg"},
                {"title":"艾莱依","pic":"/static/images/brand5.jpg"},
                {"title":"七匹狼","pic":"/static/images/brand1.jpg"},
                {"title":"卓诗尼","pic":"/static/images/brand2.jpg"},
                {"title":"耐克","pic":"/static/images/brand3.jpg"},
                {"title":"马克华菲","pic":"/static/images/brand4.jpg"},
                {"title":"艾莱依","pic":"/static/images/brand5.jpg"}
              ],
              "stylelist":[
                {"title":"运动鞋"},
                {"title":"女装"},
                {"title":"运动服"},
                {"title":"男装"},
                {"title":"生鲜"},
                {"title":"家具"},
                {"title":"女装"}
              ],
              "cleargoods":[
                {"title":"花花公子贵宾中年皮衣","price":38.9,"goodsPic":"static/images/r1.jpg","tag":"每日清仓","qal":10,"activePic":"static/images/a1.jpg"},
                {"title":"花花公子贵宾中年皮衣","price":38.9,"goodsPic":"static/images/r2.jpg","tag":"每日清仓","qal":10,"activePic":"static/images/a1.jpg"},
                {"title":"花花公子贵宾中年皮衣","price":38.9,"goodsPic":"static/images/r3.jpg","tag":"每日清仓","qal":10,"activePic":"static/images/a1.jpg"},
                {"title":"花花公子贵宾中年皮衣","price":38.9,"goodsPic":"static/images/r4.jpg","tag":"每日清仓","qal":10,"activePic":"static/images/a1.jpg"},
                {"title":"花花公子贵宾中年皮衣","price":38.9,"goodsPic":"static/images/r1.jpg","tag":"每日清仓","qal":10,"activePic":"static/images/a1.jpg"},
                {"title":"花花公子贵宾中年皮衣","price":38.9,"goodsPic":"static/images/r2.jpg","tag":"每日清仓","qal":10,"activePic":"static/images/a1.jpg"}
              ]
            }
          }
      },
      methods:{
        toIndex:function(){
          this.$router.push({ path: '/Index' });
        }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    background: #ff722b;
  }
  .header .headerTop{
    margin-left: 0.13rem;
    margin-right: 0.13rem;
    display: flex;
    -webkit-justify-content: space-between;
    height:0.7rem;
    /*margin-top: 0.2rem;*/
  }
  .headerTop img{
    width:0.21rem;
    height:0.21rem;
    margin-top: 0.2rem;
  }

  .headerTop h3{
    font-size: 0.2rem;
    color: #ffffff;
    line-height: 0.6rem;
  }
  .header .headerList{
    width:100%;
    height:0.39rem;
    display: flex;
    overflow-x:auto ;
    /*margin-left: 0.13rem;*/
    /*border-bottom: 1px solid #cfcfcf;*/
    /*border-top: 1px solid #cfcfcf;*/
  }
  .headerList::-webkit-scrollbar{
    display: none;
  }
  .headerList a{
    font-size:0.15rem;
    color: #ffffff;
    line-height: 0.39rem;
    white-space:nowrap;
    cursor: pointer;
    margin:0 0.16rem;
  }
  .brands{
    width:100%;
    height:1.2rem;
    background: #ffffff;
    display: flex;
    overflow-x:auto ;
  }
  .brands .brandlist{
    display: flex;
    flex-direction: column;
    margin-left: 0.2rem;
    margin-top: 0.22rem;
  }
  .brandlist::-webkit-scrollbar{
    display: none;
  }
  .brandlist img{
     width:0.62rem;
    height:0.62rem;
  }
  .brandlist span{
    font-size:0.15rem ;
    color: #5a5a5a;
  }
</style>
