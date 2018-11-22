<template>
  <div >
    <search-header></search-header>
    <search-center :clothList="searchgoods"></search-center>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import GoodsApis from "../apis/GoodsApis";
    import Public from "../assets/css/public.css";
    import SearchHeader from "../components/Search/SearchHeader";
    import SearchCenter from "../components/Search/SearchCenter";
    import IndexFooter from  "../components/IndexFooter";
    export default {
      name: "Search",
      data(){
          return{
            searchgoods:[],
          }
      },
      methods:{
        /**
         * 加载搜索页面数据
         * @private
         */
        _getSearchgoodsData() {
          //获取数据
          GoodsApis.getSearchgoodsData(data=>{
            this.searchgoods = data;
            console.log(this.searchgoods);
          });
        },
      },
      created() {
        this._getSearchgoodsData();
      },
      components:{SearchHeader,SearchCenter,Public,IndexFooter,GoodsApis}
    }
</script>

<style scoped>

</style>
