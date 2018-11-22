<template>
  <div class="header">
    <div class="headerTop">
      <h3>搜索</h3>
      <i class="iconfont icon-fenxiang"></i>
    </div>
    <div class="headerBottom">
      <a href="javascript:;">
        <i class="iconfont icon-iconset0157"></i>男童鞋子秋冬
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchHeader"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height:1.2rem;
    display: flex;
    flex-direction: column;
    -webkit-justify-content: center;
    background: #ffffff;
    border-bottom: 1px solid #e4e0e1;

  }
  .header .headerTop{
    width:100%;
    height:0.5rem;
    display: flex;
    -webkit-justify-content: flex-end;
    align-items: center;
  }
  .headerTop h3{
    font-weight: 100;
    font-size: 0.24rem;
    line-height: 0.6rem;
  }
  .headerTop i{
    font-size:0.3rem ;
    color:#696969 ;
    line-height: 0.6rem;
    margin-left: 1.1rem;
    margin-right: 0.16rem;
  }
  .header .headerBottom{
    display: flex;
    align-items: center;
    -webkit-justify-content: center;
    text-align: center;
  }
  .headerBottom a{
    width:4rem;
    height:0.5rem;
    background: #ededed;
    border-radius: 0.15rem;
    font-size:0.2rem;
    color: #9c9c9c;
    line-height: 0.5rem;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
  }
  .headerBottom a i{
    font-size:0.2rem;
    color: #9c9c9c;
    line-height: 0.5rem;
    margin-right: 0.15rem;
  }
</style>
