<template>
  <div class="choice" >
    <div class="choiceTit">
      <h3><img src="/static/images/choice.jpg"/>精选推荐</h3>
    </div>
    <div class="choiceCloth" >
      <mine-center-choice-good  v-for="(i,index) in c" :key="index" :clist="i">

      </mine-center-choice-good>
    </div>
  </div>
</template>
<script>
    import MineCenterChoiceGood from "./MineCenterChoiceGood";
    export default {
        name: "MineCenterChoice",
      components: {MineCenterChoiceGood},
      props:["c"]
    }
</script>

<style scoped>
  .center .choice{
    width:100%;
    display: flex;
    flex-direction: column;
  }
  .choice .choiceTit{
    display: flex;
    width:100%;
    -webkit-justify-content: center;
    height:0.69rem;
    background: #ffffff;
  }
  .choiceTit h3{
    font-size: 0.23rem;
    color: #db3026;
    font-weight: 100;
    line-height: 0.69rem;
  }
  .choiceTit h3 img{
    width:0.27rem;
    height:0.27rem;
    margin-right: 0.12rem;
    vertical-align: middle;
  }
  .choice .choiceCloth{
    display: flex;
    -webkit-justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
