<template>
  <div class="centerRight">
    <ul>
      <search-center-right-li v-for="(i,index) in sea" :item="index" :si="i"></search-center-right-li>
    </ul>
  </div>
</template>
<script>
    import SearchCenterRightLi from "./SearchCenterRightLi";
    export default {
      name: "SearchCenterRight.vue",
      components: {SearchCenterRightLi},
      props:["sea"]
    }
</script>

<style scoped>
  .centerRight{
    width:66%;
    height:4.8rem;
    /*background:lavender;*/
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    margin-top: 0.05rem;
    padding:0 0.12rem 0 0.18rem;
  }

</style>
