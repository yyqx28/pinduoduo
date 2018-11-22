<template>
  <!--功能分类轮播图-->
  <div class="swiper-container select">
    <div class="swiper-wrapper selectList">
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s2.jpg" alt=""/>
          <span>限时秒杀</span>
        </div>
        <router-link to="/Clean">
        <div class="list">
          <img src="static/images/s1.jpg" alt=""/>
          <span>每日清仓</span>
        </div>
        </router-link>
      </div>
      <div class="swiper-slide lists ">
        <router-link to="/Brands">
        <div class="list">
          <img src="/static/images/s3.jpg" alt=""/>
          <span>品牌馆</span>
        </div>
        </router-link>
        <div class="list">
          <img src="/static/images/s4.jpg" alt=""/>
          <span>多多果园</span>
        </div>
      </div>
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s5.jpg" alt=""/>
          <span>9块9特卖</span>
        </div>
        <div class="list">
          <img src="static/images/s6.jpg" alt=""/>
          <span>充值中心</span>
        </div>
      </div>
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s7.jpg" alt=""/>
          <span>爱逛街</span>
        </div>
        <div class="list">
          <img src="static/images/s8.jpg" alt=""/>
          <span>现金签到</span>
        </div>
      </div>
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s9.jpg" alt=""/>
          <span>食品超市</span>
        </div>
        <div class="list">
          <img src="static/images/s10.jpg" alt=""/>
          <span>电器城</span>
        </div>
      </div>
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s5.jpg" alt=""/>
          <span>9块9特卖</span>
        </div>
        <div class="list">
          <img src="static/images/s6.jpg" alt=""/>
          <span>充值中心</span>
        </div>
      </div>
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s7.jpg" alt=""/>
          <span>爱逛街</span>
        </div>
        <div class="list">
          <img src="static/images/s8.jpg" alt=""/>
          <span>现金签到</span>
        </div>
      </div>
      <div class="swiper-slide lists ">
        <div class="list">
          <img src="static/images/s9.jpg" alt=""/>
          <span>食品超市</span>
        </div>
        <div class="list">
          <img src="static/images/s10.jpg" alt=""/>
          <span>电器城</span>
        </div>
      </div>
    </div>
    <!-- 增加滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "IndexSelect",
        mounted(){
          var mySwiper2 = new Swiper('.select', {
            // slidesPerView :设置slider容器能够同时显示的slides数量(carousel模式)
            slidesPerView: 5,
            autoplay: false,
            scrollbar: {
              el: '.swiper-scrollbar',
            }
          })
        }
    }
</script>

<style scoped>
  /*功能分类*/
  .center .select{
    width: 100%;
    height: 1.6rem;
    background: #ffffff;
  }
  .selectList::-webkit-scrollbar{
    display: none;
  }
  .selectList .lists{
    width:1.6rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .lists .list{
    display: flex;
    flex-direction: column;
    margin-top: 0.15rem;
  }
  .lists .list img{
    width:0.43rem;
    height:0.4rem;
    margin-left: 0.15rem;
  }
  .lists .list span{
    font-size: 0.11rem;
    color: #595959;
    white-space: nowrap;
  }
  .select swiper-scrollbar{
    width:1.04rem;
    background: #fb5f5a;
  }
</style>
