/**
 * 判断目标值是否为Number类型
 * !已废弃,es6新增 isFinite()方法.
 *
 * @param {*} target
 * @return {boolean}
 */
function isNumber(target) {
  if (typeof target !== "number" && !isNaN(target)) {
    return false;
  }
  return true;
}

/**
 * 判断目标值是否为String类型
 */
function isString(string) {
  if (typeof string !== "string") {
    return false;
  }
  if (Object.prototype.toString.call(string) !== "[object String]") {
    return false;
  }
  return false;
}

export { isString };
