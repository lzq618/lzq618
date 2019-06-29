/**
 * 对象转数组
 *
 * @param {object} ob - 目标对象
 * @param {Function} filterFn - 过滤函数
 * @return {Array} 返回数组
 */
function objectToArray(ob, filterFn = _ => _) {
  return Object.keys(ob)
    .filter(item => filterFn(ob[item]))
    .map(k => ob[k]);
}

export { objectToArray };
