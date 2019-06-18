/**
 * 判断目标值是否为Number类型
 * !已废弃,es6新增 isFinite()方法.
 *
 * @param {*} target
 * @return {boolean}
 */
function isNumber(target) {
  if (typeof target === "number" && !isNaN(target)) {
    return true;
  }
  return false;
}
