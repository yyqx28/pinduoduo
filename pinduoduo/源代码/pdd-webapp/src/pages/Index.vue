<template>
    <div id="app1">
      <index-header></index-header>
      <index-center :glists="goods"></index-center>
      <index-footer></index-footer>
    </div>
</template>
<script>
    import GoodsApis from "../apis/GoodsApis";
    import Public from "../assets/css/public.css";
    import IndexHeader from "../components/Index/IndexHeader";
    import IndexCenter from "../components/Index/IndexCenter";
    import IndexFooter from "../components/IndexFooter";
    export default {
      name: "Index",
      data(){
        return {
          /**
           * 商品列表
           */
          goods:[]
        }
      },
      methods:{
        /**
         * 加载页面数据
         * @private
         */
        _getData() {
          //获取数据
          GoodsApis.getGoodsData(data=>{
            this.goods = data;
            console.log(this.goods);
          });
        },
      },
      created() {
        this._getData();
      },
      components:{IndexHeader,IndexCenter,IndexFooter,Public,GoodsApis}

    }
</script>

<style scoped>
  #app1{
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
  }
</style>
