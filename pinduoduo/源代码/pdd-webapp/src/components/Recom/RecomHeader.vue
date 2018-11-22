<template>
  <div class="header">
    <h3>推荐</h3>
  </div>
</template>

<script>
    export default {
      name: "RecomHeader",
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height:0.5rem;
    display: flex;
    -webkit-justify-content: center;
    background: #ffffff;
    border-bottom: 1px solid #e4e0e1;
    position: fixed;
    top:0;
  }
  .header h3{
    font-weight: 100;
    font-size: 0.18rem;
    line-height: 0.5rem;
  }
</style>
