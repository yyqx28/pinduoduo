<template>
  <li>
    <div class="session">
      <div class="sessionLeft">{{si.title}}<img :src="si.titAct"/></div>
      <div class="sessionRight">
        查看全部<i class="iconfont icon-xiangyoujiantou"></i>
      </div>
    </div>
    <img :src="si.titPic" class="Img"/>
    <div class="clothes">
        <search-center-right-li-list v-for="(p,inx) in si.searchClothes" :key="inx" :pi="p">

        </search-center-right-li-list>
    </div>
  </li>
</template>

<script>
    import SearchCenterRightLiList from "./SearchCenterRightLiList";
    export default {
        name: "SearchCenterRightLi",
      components: {SearchCenterRightLiList},
      props:["si","item"],
      mounted(){
          console.info('sss'+this.item)
          console.info(this.si)
      }
    }
</script>

<style scoped>
  .centerRight ul li{
    display: flex;
    flex-direction: column;
    margin-bottom: 0.28rem;
  }
  .centerRight ul li .session{
    display: flex;
    -webkit-justify-content: space-between;
    align-items: center;
    margin-top: 0.1rem;
  }
  li .Img{
    width:2.2rem;
    height:0.75rem;
    margin-top: 0.25rem;
  }
  .session .sessionLeft{
    font-size:0.16rem ;
    color:#5a5a5a ;
    line-height: 0.17rem;
  }
  .sessionLeft img{
    width:0.5rem;
    height:0.17rem;
    vertical-align: middle;
    margin-left:0.05rem;
  }
  .session .sessionRight{
    font-size:0.16rem ;
    color:#8f8f8f ;
  }
  .sessionRight i{
    font-size:0.14rem ;
    color:#8f8f8f ;
    margin-left: 0.09rem;
  }
  li .clothes{
    display: flex;
    -webkit-justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
