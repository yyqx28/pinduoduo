
/**
 * 获取商品数据 api
 * @type {string}
 */
const ALAXURL = "http://localhost:8080/data/goods.json";
new Vue({
    el:'#app',
    data:{
        /**
         * 商品列表
         */
        goods:[]
    },
    mounted:{
        /**
         * 加载页面数据
         * @private
         */
        _initPageData(){
            //获取数据
            fetch(ALAXURL).then(res=>{
                res.json().then(data=>{
                    this.goods = data;
                    console.log(this.goods);
                });
            });
        }
    },
    created(){
        this._initPageData();
    }
});