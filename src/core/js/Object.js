/**
 * 对象转数组
 *
 * @param {object} ob - 目标对象
 * @param {Function} filter - 过滤函数
 * @return {Array} 返回数组
 */
function objectToArray(ob, filter) {
  return Object.keys(ob)
    .filter(item => filter(ob[item]))
    .map(k => ob[k]);
}

export { objectToArray };
