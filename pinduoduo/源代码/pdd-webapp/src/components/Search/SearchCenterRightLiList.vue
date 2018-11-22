<template>
  <div class="clothesList" >
    <img :src="pi.clothPic" alt=""/>
    <h4>{{pi.clothTit}}</h4>
  </div>
</template>
<script>
    export default {
        name: "SearchCenterRightLiList",
        props:["pi"]
    }
</script>

<style scoped>
  .clothes .clothesList{
    display: flex;
    flex-direction: column;
    width:0.7rem;
    /*height:1.15rem;*/
    flex-shrink: 0;
    text-align: center;
    /*background: lavenderblush;*/
    margin-top:0.2rem ;
  }
  .clothesList img{
    width:0.6rem;
    height:0.75rem;
  }
  .clothesList h4{
    font-size: 0.16rem;
    color: #171717;
    /*margin-left: 0.1rem;*/
  }
</style>
