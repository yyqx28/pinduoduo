<template>
  <div class="center">
    <search-center-left></search-center-left>
    <search-center-right :sea="clothList"></search-center-right>
  </div>
</template>
<script>
    import SearchCenterLeft from "./SearchCenterLeft";
    import SearchCenterRight from "./SearchCenterRight";
    export default {
      name: "SearchCenter",
      props:["clothList"],
      components:{SearchCenterLeft,SearchCenterRight}

    }
</script>

<style scoped>
  .center{
    width:100%;
    height:4.8rem;
    display: flex;
  }
</style>
