<template>
  <div class="center">
      <order-center-list v-for="(i,inx) in info" :p="i" :index="inx" :key="inx" @watch="del" ></order-center-list>
    <!--<order-center-list v-for="(i,inx) in info" :p="i" :index="inx" :s="del" :key="inx"  ></order-center-list>-->
  </div>
</template>

<script>
    import OrderCenterList from "./OrderCenterList";
    export default {
      name: "OrderCenter",
      props:["info"],
      methods:{
        del(i){
          this.info.splice(i,1);
          // alert(i);
        }
      },
      components: {OrderCenterList},

    }
</script>

<style scoped>
  .center{
    width:100%;
    height:100%;
    overflow-y:auto;
    overflow-x: hidden;
    background: #f4f4f4;
    display: flex;
    margin-top: 0.84rem;
    flex-direction: column;
  }

</style>
