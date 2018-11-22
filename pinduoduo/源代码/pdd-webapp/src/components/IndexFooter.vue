<template>
  <div class="footer">
    <router-link to="/">
      <a href="">
        <div class="bottom_list">
          <i class="iconfont icon-home-full"></i>
            <span>首页</span>
        </div>
      </a>
    </router-link>
    <router-link to="/Recom">
      <a href="">
        <div class="bottom_list" >
          <i class="iconfont icon-tuijian"></i>
            <span>推荐</span>
        </div>
      </a>
    </router-link>
    <router-link to="/Search">
      <a href="">
      <div class="bottom_list">
        <i class="iconfont icon-iconset0157"></i>
        <span>搜索</span>
      </div>
    </a>
    </router-link>
    <router-link to="/Recom">
      <a href="">
      <div class="bottom_list" >
        <i class="iconfont icon-liaotianjilu"></i>
        <span>聊天</span>
      </div>
    </a>
    </router-link>
    <router-link to="/Mine">
      <a href="">
      <div class="bottom_list" >
        <i class="iconfont icon-gerenzhongxin"></i>
        <span>个人中心</span>
      </div>
    </a>
    </router-link>
  </div>
</template>

<script>
    export default {
      name: "IndexFooter"

    }
</script>

<style scoped>

</style>
