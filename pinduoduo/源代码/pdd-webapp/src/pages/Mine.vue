<template>
  <div>
    <mine-top id="gotoTop"></mine-top>
    <mine-center :mineList="minegoods"></mine-center>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import MineTop from "../components/Mine/MineTop";
    import MineCenter from "../components/Mine/MineCenter";
    import IndexFooter from  "../components/IndexFooter";
    export default {
      name: "Mine",
      data(){
        return {
          /**
           * 商品列表
           */
          minegoods:[
            {"choiceImg":"/static/images/choiceImg1.jpg","activePic":"/static/images/a1.jpg","title":"【四季毛毯多尺寸速暖】","price":19.9,"qal":2.9,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg2.jpg","activePic":"/static/images/a1.jpg","title":"【四季毛毯多尺寸速暖】","price":19.9,"qal":2.9,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg3.jpg","activePic":"/static/images/a1.jpg","title":"蚕丝加绒加厚打底裤女","price":60.9,"qal":10,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg4.jpg","activePic":"/static/images/a1.jpg","title":"【唯品尊】2018春秋款短靴","price":19.9,"qal":2.9,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg1.jpg","activePic":"/static/images/a1.jpg","title":"【四季毛毯多尺寸速暖】","price":19.9,"qal":2.9,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg2.jpg","activePic":"/static/images/a1.jpg","title":"【四季毛毯多尺寸速暖】","price":19.9,"qal":2.9,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg3.jpg","activePic":"/static/images/a1.jpg","title":"蚕丝加绒加厚打底裤女","price":60.9,"qal":10,"personPic":"/static/images/p1.jpg"},
            {"choiceImg":"/static/images/choiceImg4.jpg","activePic":"/static/images/a1.jpg","title":"【唯品尊】2018春秋款短靴","price":19.9,"qal":2.9,"personPic":"/static/images/p1.jpg"},
          ]
        }
      },
      mounted(){
        // 滚动滚动监听事件
        window.addEventListener('scroll', this.handleScroll);
      },
      methods:{
        /**
         * 加载页面数据
         * @private
         */
        _getData() {
          //获取数据
          // GoodsApis.getGoodsData(data=>{
          //   this.minegoods = data;
          //   console.log(this.minegoods);
          // });
        },

        /**
         * 滚动到特定位置显示顶部
         */
        handleScroll () {
          // pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 100) {
            $("#gotoTop").show();
          } else {
            $("#gotoTop").hide();
          }
        }
      },
      created() {
        this._getData();
      },
      components: {MineCenter, MineTop,IndexFooter}
    }
</script>

<style scoped>

</style>
