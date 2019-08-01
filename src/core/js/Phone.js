import { isString } from "./Types.js";
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
  const phoneTestRule = /((((13[0-9])|(15[^4])|(18[0,1,2,3,5-9])|(17[0-8])|(147))\d{8})|((\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}))?/g;
  // const checkRule2 = /^1[34578]\d{9}$/;
  return text.match(phoneTestRule).filter(item => item !== "");
}

/**
 * 检测字符串是否为合法手机号
 * @param {string} text - 要检测的手机号
 * @return {boolean} - 检测结果
 */
function isPhone(text) {
  if (isString(text)) {
    console.error("传入参数类型错误.");
    return false;
  }
  const phoneTestRule = /^[1][3,4,5,6,7,8,9][0-9]{9}$/g;
  return phoneTestRule.test(text);
}

export { extractPhone, isPhone };
