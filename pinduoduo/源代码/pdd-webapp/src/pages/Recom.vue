<template>
  <div>
    <recom-header></recom-header>
    <recom-center :rlists="recomgoods"></recom-center>
    <index-footer></index-footer>
  </div>
</template>
<script>
    import GoodsApis from "../apis/GoodsApis";
    import Public from "../assets/css/public.css";
    import RecomHeader from "../components/Recom/RecomHeader";
    import RecomCenter from "../components/Recom/RecomCenter";
    import IndexFooter from  "../components/IndexFooter";
    export default {
      name: "Recom",
      data(){
        return {
          /**
           * 推荐商品列表
           */
          recomgoods:[]
        }
      },
      methods:{
        /**
         * 加载推荐页面数据
         * @private
         */
        _getRecomgooodsData() {
           GoodsApis.getRecomgoodsData(data=>{
              this.recomgoods = data;
              console.log(this.recomgoods);
           });
        },
      },
      created() {
        this._getRecomgooodsData();
      },
      components:{Public,RecomHeader,RecomCenter,IndexFooter,GoodsApis}
    }
</script>

<style scoped>

</style>
