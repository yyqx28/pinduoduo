<template>
  <div>
    <good-detail-center></good-detail-center>
    <good-detail-footer></good-detail-footer>
  </div>
</template>

<script>
    import GoodDetailCenter from "../components/GoodDetail/GoodDetailCenter";
    import GoodDetailFooter from "../components/GoodDetail/GoodDetailFooter";
    export default {
      name: "GoodDetail",
      components: {GoodDetailFooter, GoodDetailCenter}
    }
</script>

<style scoped>

</style>
