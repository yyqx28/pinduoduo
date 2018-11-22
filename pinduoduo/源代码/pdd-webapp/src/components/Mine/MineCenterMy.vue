<template>
  <div class="my">
    <div class="myin">
      <img src="/static/images/dOrder1.jpg" alt=""/> <span>一只烊</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineCenterMy"
    }
</script>

<style scoped>
  .center .my{
    display:flex;
    width:100%;
    background: #ffffff;
    /*padding-top: 0.25rem;*/
    /*height:1.25rem;*/
  }
  .my .myin{
    display:flex;
    width:100%;
    background: #ffffff;
    border-bottom: 1px solid #ededed;
    padding-top: 0.25rem;
    height:1.25rem;
    margin-right: 0.17rem;
    margin-left: 0.17rem;
  }
  .myin img{
    width:1.12rem;
    height:1.02rem;
    margin-right: 0.17rem;
    margin-bottom: 0.1rem;
  }
  .myin span{
    font-size: 0.2rem;
    color: #131313;
    line-height: 1.02rem;
  }
</style>
