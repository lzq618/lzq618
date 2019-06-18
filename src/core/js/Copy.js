import { isDOM, destroyElement } from "./DOM";

/**
 * 拷贝内容到剪切板
 * ! 此函数在页面初始化时不可用.
 *
 * @param {string|number|Object|Array|Element} target - 要复制的内容
 * @param {string} separator - 分离符,作用于Object和Array类型的target
 * @return {boolean} 是否复制成功
 */
function copyToClipboard(target, separator) {
  let _target = null;
  if (!target) {
    console.warn("请传入要复制的内容.");
    return false;
  }
  if (typeof target === "string" || isFinite(target)) {
    _target = target;
  } else if (typeof target === "object") {
    if (Array.isArray(target)) {
      // ! 此处没有对英文逗号","做处理。如果原本的array中就包含英文逗号","，那么也会被替换掉
      _target = separator
        ? target.toString().replace(/,/g, separator)
        : target.toString();
    } else if (isDOM(target)) {
      target.select();
      return execCopy();
    } else {
      _target = JSON.stringify(target);
    }
  } else {
    console.warn("传入类型异常.");
    return false;
  }

  //  此处使用textarea而不使用input的原因在于input无法换行
  let _textarea = document.createElement("textarea");
  _textarea.value = _target;
  document.body.appendChild(_textarea);
  _textarea.select();
  return execCopy(_textarea);
}

/**
 * 执行copy
 *
 * @param {object} el - 要销毁的元素
 * @return {boolean} 是否copy成功
 */
function execCopy(el) {
  try {
    const successful = document.execCommand("copy");
    return successful;
  } catch (err) {
    console.error("该浏览器不兼容copyToClipboard方法.");
    return false;
  } finally {
    if (el) {
      destroyElement(el);
    }
  }
}

export { copyToClipboard };
