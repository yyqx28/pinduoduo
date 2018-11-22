
import {AJAXURL} from "../commons/URLSchema"
import {AJAXURL2} from "../commons/URLSchema"
import {AJAXURL3} from "../commons/URLSchema"
import {AJAXURL4} from "../commons/URLSchema"
export default {

  /**
   * 获取goods的信息
   * @param cb
   */
  getGoodsData(cb) {
    fetch(AJAXURL).then(res => {
      res.json().then(data => {
        cb(data);
      });
    });
  },


  /**
   * 获取recomgoods的信息
   * @param cb
   */
  getRecomgoodsData(cb) {
    fetch(AJAXURL2).then(res => {
      res.json().then(data => {
        cb(data);
      });
    });
  },



  /**
   * 获取recomgoods的信息
   * @param cb
   */
  getSearchgoodsData(cb) {
    fetch(AJAXURL3).then(res => {
      res.json().then(data => {
        cb(data);
      });
    });
  },


  /**
   * 获取order的信息
   * @param cb
   */
  getOrderData(cb) {
    fetch(AJAXURL4).then(res => {
      res.json().then(data => {
        cb(data);
      });
    });
  }

}
