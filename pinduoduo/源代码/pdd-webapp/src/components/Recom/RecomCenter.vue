<template>
  <div class="center">
    <recom-good :key="index" :inx="p" v-for="(p,index) in rlists" ></recom-good>
  </div>
</template>
<script>
    import RecomGood from './RecomGood'
    export default {
      name: "RecomCenter",
      //定义接口
      props:["rlists"],
      components:{RecomGood}
    }
</script>

<style scoped>
  .center{
    width:100%;
    -webkit-flex:1;
    overflow-y:auto;
    overflow-x: hidden;
    background: #f4f4f4;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top:0.5rem;
    margin-bottom:0.51rem;
  }
</style>
