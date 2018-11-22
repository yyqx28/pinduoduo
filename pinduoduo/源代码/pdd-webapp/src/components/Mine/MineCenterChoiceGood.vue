<template>
  <div class="choiceGood">
    <img :src="clist.choiceImg" class="choiceImgTop"/>
    <div class="choiceButtom">
      <div class="choiceButtomTit">
        <h3><img :src="clist.activePic"/>{{clist.title}}</h3>
      </div>
      <div class="choicegood">
        <div class="choicegoodLeft">
          ￥{{clist.price}}<span class="count">已拼{{clist.qal}}万+件</span>
        </div>
        <img :src="clist.personPic"  class="choiceP"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MineCenterChoiceGood",
        props:["clist"]
    }
</script>

<style scoped>
  .choiceCloth .choiceGood{
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    width:1.85rem;
    margin-bottom: 0.06rem;
  }
  .choiceGood .choiceImgTop{
    width:1.85rem;
    height:1.85rem;
  }
  .choiceGood .choiceButtom{
    display: flex;
    flex-direction: column;
    width: 1.85rem;
    background: #ffffff;
  }
  .choiceButtom .choiceButtomTit{
    display: flex;
    width:100%;
    margin-top: 0.11rem;
  }
  .choiceButtomTit h3{
    width:100%;
    font-size: 0.18rem;
    color: #131313;
    text-indent: 0.2rem;
  }
  .choiceButtomTit h3 img{
    width:0.44rem;
    height:0.2rem;
    vertical-align: middle;
  }
  .choiceButtom .choicegood{
    width:1.85rem;
    display: flex;
    margin-top: 0.17rem;
    margin-bottom: 0.21rem;
    -webkit-justify-content: space-around;
    /*background: lightcoral;*/
  }
  .choicegood .choicegoodLeft{
    display: flex;
    color:#e13531 ;
    font-size:0.18rem ;
  }
  .choicegoodLeft span{
    font-size:0.13rem ;
    color:#9b9b9b ;
    margin-top: 0.04rem;
    margin-left: 0.05rem;
  }
  .choicegood .choiceP{
    width:0.35rem;
    height:0.2rem;
  }
</style>
