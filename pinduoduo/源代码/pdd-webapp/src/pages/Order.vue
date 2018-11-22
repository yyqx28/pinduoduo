<template>
    <div>
      <order-header :list="orderTit"></order-header>
      <order-center :info="orders"></order-center>
    </div>
</template>

<script>
    import GoodsApis from "../apis/GoodsApis";
    import OrderHeader from "../components/Order/OrderHeader";
    import OrderCenter from "../components/Order/OrderCenter";
    export default {
      name: "Order",
      data(){
        return {
          /**
           * 头部列表
           */
          orderTit:[],
          /**
           * 订单列表
           */
          orders:[]
        }
      },
      methods:{
        /**
         * 加载页面数据
         * @private
         */
        _getOrderData() {
          //获取数据
          GoodsApis.getOrderData(data=>{
            this.orderTit = data.orderTit;
            this.orders = data.orders;
            console.log(this.orderTit);
            console.log(this.orders);
          });
        },
      },
      created() {
        this._getOrderData();
      },
      components: {OrderCenter, OrderHeader}
    }
</script>

<style scoped>

</style>
