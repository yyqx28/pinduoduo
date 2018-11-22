<template>
  <div class="header">
    <div class="headerList">
      <a href="javascript:;">热门</a>
      <a href="javascript:;">女装</a>
      <a href="javascript:;">百货</a>
      <a href="javascript:;">鞋包</a>
      <a href="javascript:;">食品</a>
      <a href="javascript:;">母婴</a>
      <a href="javascript:;">内衣</a>
      <a href="javascript:;">电器</a>
      <a href="javascript:;">男装</a>
      <a href="javascript:;">家具</a>
      <a href="javascript:;">水果</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "IndexHeader",

    }
</script>

<style scoped>
  .header{
    width: 100%;
    height:0.35rem;
    display: flex;
    position: fixed;
    top:0rem;
    z-index: 2;
    background: #ffffff;
    /*background: lightpink;*/
  }
  .header .headerList{
    width:3.5rem;
    height:0.35rem;
    display: flex;
    overflow-x:auto ;
    margin-left: 0.13rem;
  }
  .headerList::-webkit-scrollbar{
    display: none;
  }
  .headerList a{
    font-size:0.15rem;
    color:#454545;
    line-height: 0.35rem;
    margin-right:0.2rem;
    white-space:nowrap;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }
</style>
