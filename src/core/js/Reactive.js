export default class Reactive {
  constructor() {
    this.callBackList = [];
  }
  /**
   * 数据劫持，响应式执行回调函数
   * @param {Object} data 劫持对象
   * @param {symbol|string|number} key 属性
   * @param {*} val 属性值
   * @param {Array<Function>} callBack 回调函数
   */
  defineReactive(data, key, val, ...callBack) {
    this.callBackList.push(...callBack);
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: () => {
        return val;
      },
      set: newVal => {
        val = newVal;
        this.callBackList.forEach(fn => {
          typeof fn === "function" ? fn.call(data) : {};
        });
      }
    });
  }
  /**
   * 添加回掉函数
   * @param {Function} callBack 回掉函数
   * @return {boolean} 是否添加成功
   */
  addCallBack(callBack) {
    if (typeof callBack === "function") {
      this.callBackList.push(callBack);
      return true;
    } else {
      return false;
    }
  }
}
