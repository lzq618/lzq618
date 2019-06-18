/**
 * 判断对象是否是DOM元素。
 * ! 不包含document对象,因为document对象不是HTMLElement的实例。
 *
 * @param {*} target - 要判断的对象
 * @return {boolean} - 是否为DOM元素
 */
function isDOM(target) {
  if (!target) {
    return false;
  }
  if (typeof HTMLElement === "object") {
    return target instanceof HTMLElement;
  } else {
    return (
      typeof target === "object" &&
      target.nodeType === 1 &&
      typeof target.nodeName === "string"
    );
  }
}

/**
 * 销毁元素
 *
 * @param {Element} el - 要销毁的元素
 * @return {boolean} 是否销毁成功
 */
function destroyElement(el) {
  let _isDestroy = false;
  if (isDOM(el)) {
    const rel = el.parentNode.removeChild(el);
    _isDestroy = isDOM(rel);
  } else {
    console.warn("传入的不是元素");
  }
  return _isDestroy;
}

export { isDOM, destroyElement };
