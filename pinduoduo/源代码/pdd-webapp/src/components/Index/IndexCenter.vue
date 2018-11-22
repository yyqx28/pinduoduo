<template>
  <div class="center">
    <index-advert></index-advert>
    <index-select></index-select>
    <index-active></index-active>
    <index-goods :list="glists"></index-goods>
  </div>
</template>

<script>
    import IndexAdvert from "./IndexAdvert";
    import IndexSelect from "./IndexSelect";
    import IndexActive from "./IndexActive";
    import IndexGoods from "./IndexGoods";
    export default {
        name: "IndexCenter",
      // 输入接口
        props:["glists"],
        components:{IndexAdvert,IndexSelect,IndexActive,IndexGoods}
    }
</script>

<style scoped>
  .center{
    width:100%;
    flex:1;
    overflow-y:auto;
    overflow-x: hidden;
    flex-direction: column;
    display: flex;
    background: #f4f4f4;
  }
</style>
