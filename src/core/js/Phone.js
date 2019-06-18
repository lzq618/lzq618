/**
 * 从文本中提取手机号和电话号
 *
 * @param {string} text - 要提取的源文本
 * @return {Array} 提取到的手机号和电话号
 */
function extractPhone(text) {
  if (typeof text !== "string") {
    console.error("传入参数类型错误.");
    return [];
  }
  if (!text.match) {
    console.error("传入参数不存在match方法.");
    return [];
  }
  const checkRule = /((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}))?/g;
  // const checkRule2 = /^1[34578]\d{9}$/;
  return text.match(checkRule).filter(item => item !== "");
}

export { extractPhone };
