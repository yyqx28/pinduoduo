<template>
  <div class="center">
    <mine-center-my></mine-center-my>
    <mine-center-order></mine-center-order>
    <mine-center-ticket></mine-center-ticket>
    <mine-center-more></mine-center-more>
    <img src="/static/images/mineImg.jpg" alt="" class="mineAct"/>
    <mine-center-choice :c="mineList"></mine-center-choice>
  </div>
</template>

<script>
    import MineCenterMy from "./MineCenterMy";
    import MineCenterOrder from "./MineCenterOrder";
    import MineCenterTicket from "./MineCenterTicket";
    import MineCenterMore from "./MineCenterMore";
    import MineCenterChoice from "./MineCenterChoice";
    export default {
        name: "MineCenter",
      props:["mineList"],
      components: {MineCenterChoice, MineCenterMore, MineCenterTicket, MineCenterOrder, MineCenterMy}
    }
</script>

<style scoped>
  .center{
    width:100%;
    -webkit-flex:1;
    overflow-y:auto;
    overflow-x: hidden;
    background: #f4f4f4;
    margin-bottom: 0.51rem;
    /*display: flex;*/
    /*flex-direction: column;*/
  }
  .center .mineAct{
    width:100%;
    height:0.97rem;
    margin-top: 0.11rem;
  }
</style>
