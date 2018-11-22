<template>
  <!--广告轮播图-->
  <div class="swiper-container advant">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="/static/images/list1.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="/static/images/list1.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="/static/images/list1.jpg" alt=""/></div>
      <div class="swiper-slide"><img src="/static/images/list1.jpg" alt=""/></div>
    </div>
    <!-- 增加分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
    export default {
      name: "IndexAdvert",
      mounted(){
        var mySwiper1 = new Swiper('.advant', {
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
      }
    }
</script>

<style scoped>
  /*广告轮播图*/
  .center .advant{
    width:100%;
    height: 1.4rem;
    margin-top: 0.35rem;
  }
  .advant .swiper-slide{
    display: flex;
  }
  .advant .swiper-slide img{
    width:3.75rem;
    height:1.4rem;
  }
</style>
