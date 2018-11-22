<template>
    <div class="center">
      <div class="cTit">
        <p><img src="/static/images/cleanTit.jpg" alt=""/>清仓好货</p>
      </div>
      <div class="styles">
        <a href="javascript;:" v-for="n in lists">{{n.title}}</a>
      </div>
      <div class="stylesel">
        <select>
          <option value="">尺码</option>
          <option>X</option>
          <option>XX</option>
          <option>XXL</option>
        </select>
        <select>
          <option value="">价格</option>
          <option>50-100</option>
          <option>100-500</option>
          <option>500-1000</option>
        </select>
        <select>
          <option value="">折扣</option>
          <option>满500减50</option>
          <option>满200减100</option>
          <option>优惠券</option>
        </select>
        <select>
          <option value="">筛选</option>
          <option>夏装</option>
          <option>春装</option>
          <option>冬装</option>
          <option>秋装</option>
        </select>
      </div>
      <div class="cleangood">
        <clean-good v-for="p in clist" :inx="p"></clean-good>
      </div>
    </div>
</template>
<script>
    import CleanGood from "./CleanGood";
    export default {
      name: "CleanCenter",
      components: {CleanGood},
      props:["lists","clist"]
    }
</script>

<style scoped>
  .center {
    background: #f4f4f4;
    display: flex;
    flex-direction: column;
  }
  .center .cTit{
    width:100%;
    margin-top: 0.12rem;
    height:0.6rem;
    background: #ffffff;
    border-bottom:1px solid #f4f4f4;
  }
  .cTit p{
    font-size: 0.2rem;
    color: #161616;
    line-height: 0.5rem;
    text-align: center;
  }
  p img{
    width:0.26rem;
    height:0.24rem;
    vertical-align: middle;
    margin-right: 0.15rem;
  }
  .styles{
    width:100%;
    height:0.6rem;
    display: flex;
    overflow-x:auto ;
    background: #ffffff;
    border-top:1px solid #f1f1f1
  }
  .styles::-webkit-scrollbar{
    display: none;
  }
  .styles a{
    font-size: 0.2rem;
    color: #0a0a0a;
    line-height: 0.6rem;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    white-space: nowrap;
  }
  .stylesel{
    width:100%;
    height:0.47rem;
    background: #ffffff;
    display: flex;
    -webkit-justify-content: space-around;
  }
  .stylesel select{
    width:0.6rem;
    height:0.35rem;
    background: #f8f8f8;
    margin-left: 0.2rem;
  }
  select option{
    font-size:0.16rem ;
    color:#5d5f5e ;
    text-align: center;
  }
  .cleangood{
    width:100%;
    border-top:1px solid #f1f1f1;
    display: flex;
    /*flex-direction: column;*/
    align-items: flex-start;
    -webkit-justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
