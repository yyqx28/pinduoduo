<template>
  <div class="footer">
    <div class="footerSel">
      <div class="slist"><img src="/static/images/fs1.jpg" alt=""/><span>更多</span></div>
      <div class="slist"><img src="/static/images/fs2.jpg" alt=""/><span>收藏</span></div>
      <div class="slist"><img src="/static/images/fs3.jpg" alt=""/><span>客服</span></div>
    </div>
    <div class="footerOnly">
      <div class="onlyList">
        <p>￥9856</p>
        <p>单独购买</p>
      </div>
    </div>
    <div class="footerMany">
      <div class="onlyList">
        <p>￥9856</p>
        <p>发起拼单</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodDetailFooter"
    }
</script>

<style scoped>
  .footer{
    width:100%;
    display: flex;
    padding:0.05rem 0;
    border-top: 1px solid #f4f4f4;
    position: fixed;
    bottom: 0.25rem;
  }
  .footer .footerSel{
    width:40%;
    height:0.8rem;
    background: #ffffff;
    display: flex;
    -webkit-justify-content: space-around;
  }
  .footerSel .slist{
    display: flex;
    flex-direction: column;
    margin-top: 0.15rem;
  }
  .slist img{
    width:0.27rem;
    height:0.27rem;
    margin-bottom: 0.09rem;
  }
  .slist span{
    font-size: 0.15rem;
    color: #5c5c5c;
  }
  .footer .footerOnly{
    width:30%;
    height:0.8rem;
    background: #f4aaa7;
    display: flex;
    -webkit-justify-content: center;
  }
  .footerOnly .onlyList{
    display: flex;
    flex-direction: column;
  }
  .onlyList p{
    font-size:0.2rem ;
    color:#ffffff ;
    margin-top: 0.1rem;
  }
  .footer .footerMany {
    width:30%;
    height:0.8rem;
    background: #e02e24;
    display: flex;
    -webkit-justify-content: center;
  }

</style>
