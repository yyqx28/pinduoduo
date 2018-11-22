<template>
  <div>
    <div class="header">
      <div class="headerTop">
        <img src="/static/images/br1.jpg" alt="" @click="toIndex"/>
        <h3>品牌馆</h3>
        <img src="/static/images/br2.jpg" alt=""/>
      </div>
      <div class="swiper-container advant">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/static/images/dd.jpg" alt=""/></div>
          <div class="swiper-slide"><img src="/static/images/dd.jpg" alt=""/></div>
          <div class="swiper-slide"><img src="/static/images/dd.jpg" alt=""/></div>
          <div class="swiper-slide"><img src="/static/images/dd.jpg" alt=""/></div>
        </div>
        <!-- 增加分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="brandsgood">
        <div class="brandsgoodTiT">
            <p>发现品牌<span>共345个品牌</span></p>
        </div>
       <brands-goods :item="p" v-for="(p,i) in blists" :key="i"></brands-goods>
    </div>
  </div>
</template>
<script>
    import Swiper from 'swiper';
    import BrandsGoods from "../components/Brands/BrandsGoods";
    export default {
      name: "Brands",
      components: {BrandsGoods},
      data(){
        return{
          blists:[
            {"title":"加绒加厚打底网纱打底衫女长袖2018秋冬新款修身洋气","price":19.9,"goodsPic":"static/images/good1.jpg","tag":"爱逛街","qal":2.9,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"【国行正品带票】iPhone XS Max 全网通 苹果","price":8699,"goodsPic":"static/images/good2.jpg","tag":"顺丰包邮","qal":4.5,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"【PLOVER正品男鞋】啄木鸟授权品牌假一赔十","price":19.9,"goodsPic":"static/images/good3.jpg","tag":"限时秒杀","qal":2.9,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"【800万家庭的选择】香约原木抽纸餐巾纸卫生纸","price":19.9,"goodsPic":"static/images/good4.jpg","tag":"每日清仓","qal":10,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"官方超快冲-全国三网100手机话费充值","price":89.9,"goodsPic":"static/images/good5.jpg","tag":"","qal":2.9,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"加绒加厚打底网纱打底衫女长袖2018秋冬新款修身洋气","price":19.9,"goodsPic":"static/images/good1.jpg","tag":"爱逛街","qal":2.9,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"【国行正品带票】iPhone XS Max 全网通 苹果","price":8699,"goodsPic":"static/images/good2.jpg","tag":"顺丰包邮","qal":4.5,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"【PLOVER正品男鞋】啄木鸟授权品牌假一赔十","price":19.9,"goodsPic":"static/images/good3.jpg","tag":"限时秒杀","qal":2.9,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"},
            {"title":"【800万家庭的选择】香约原木抽纸餐巾纸卫生纸","price":19.9,"goodsPic":"static/images/good4.jpg","tag":"每日清仓","qal":10,"personPic":"static/images/p1.jpg","activePic":"static/images/a1.jpg"}
          ]
        }
      },
      mounted(){
        var mySwiper = new Swiper('.advant', {
          loop: true,
          speed: 300,
          autoplay: {
            delay: 1000,
            // 用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
          }

        });
      },
      methods:{
        toIndex:function(){
          this.$router.push({ path: '/' });
        }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .header .headerTop{
    display: flex;
    -webkit-justify-content: space-between;
    /*height:0.7rem;*/
    background: #bf6bb6;
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

  .advant{
    width:100%;
    height: 1.4rem;
  }
  .advant .swiper-slide{
    display: flex;
  }
  .advant .swiper-slide img{
    width:3.75rem;
    height:1.4rem;
  }

  .brandsgood{
    width:100%;
    display: flex;
    flex-direction: column;
    -webkit-justify-content: space-around;
  }
  .brandsgood .brandsgoodTiT{
    width:100%;
    height:0.6rem;
    background: #ffffff;
    border-bottom: 1px solid #f4f4f4;
  }
  .brandsgoodTiT p{
    font-size:0.2rem ;
    color:#131313 ;
    line-height: 0.6rem;
    margin-left: 0.15rem;
  }
  .brandsgoodTiT p span{
    font-size:0.18rem ;
    color:#9c9c9c ;
    line-height: 0.6rem;
    margin-left: 0.1rem;
  }
</style>
