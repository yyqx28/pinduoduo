<template>
  <!--商品-->
  <ul class="goods">
    <router-link to="/GoodDetail">
      <!--<router-link :to="{path:'GoodDetail',query:{id:key}}">-->
        <index-good :item="p" :key="i" v-for="(p,i) in list" >
        </index-good>
    <!--</router-link>-->
    </router-link>
  </ul>
</template>

<script>
    import IndexGood from "./IndexGood";
    export default {
      name: "IndexGoods",
      //定义接口
      props:["list"],
      components:{IndexGood}
    }
</script>

<style scoped>
  /*商品*/
  .goods{
    display: flex;
    flex-direction: column;
    -webkit-justify-content: space-around;
    margin-left: 0.06rem;
    margin-top: 0.1rem;
    /*background: lightcoral;*/
  }
</style>
