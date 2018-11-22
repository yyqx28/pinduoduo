<template>
    <div class="center">
      <div class="header">
        <img src="/static/images/d1.jpg" alt="" class="hImg" @click="goIndex"/>
        <img src="/static/images/d2.jpg" alt="" class="hImg"/>
      </div>
      <detail-center-pirce ></detail-center-pirce>
      <detail-center-orders></detail-center-orders>
      <detail-center-assess></detail-center-assess>
      <detail-center-store></detail-center-store>
      <detail-center-info></detail-center-info>
    </div>
</template>

<script>
    import DetailCenterPirce from "./DetailCenterPirce";
    import DetailCenterOrders from "./DetailCenterOrders";
    import DetailCenterAssess from "./DetailCenterAssess";
    import DetailCenterStore from "./DetailCenterStore";
    import DetailCenterInfo from "./DetailCenterInfo";
    export default {
      name: "GoodDetailCenter",
      components: {DetailCenterInfo, DetailCenterStore, DetailCenterAssess, DetailCenterOrders, DetailCenterPirce},
      methods:{
        goIndex:function(){
          this.$router.push({ path: '/Index' });
        }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height:0.5rem;
    display: flex;
    -webkit-justify-content: space-between;
    padding-top: 0.3rem;
    position: absolute;
    top:0;
  }
  .header .hImg{
    width:0.4rem;
    height:0.4rem;
  }
  .header .hImg:nth-child(1){
    margin-left: 0.1rem;
  }
  .header .hImg:nth-child(2){
    margin-right: 0.1rem;
  }

  .center{
    width:100%;
    overflow-y:auto;
    overflow-x: hidden;
    background: #f4f4f4;
    position: relative;
    margin-bottom: 0.8rem;
    /*display: flex;*/
    /*flex-direction: column;*/
  }


</style>
