/**
 * 获取用户设备、浏览器的型号、版本等代理信息
 * 应用场景: 匹配用户代理信息
 *
 * @return {Object}
 */
const userAgent = (function userAgent() {
  const ua = window.navigator.userAgent;
  //  浏览器
  //  opera
  //  firefox
  //  safari
  //  chrome
  //  360
  //  淘宝
  //  猎豹
  //  QQ
  //  sougou
  //  uc
  const isWeixin = Boolean(ua.match(/MicroMessenger\/([^\s]+)/i)),
    isWebkit = Boolean(ua.match(/WebKit\/([\d.]+)/i)),
    isAndroid = Boolean(ua.match(/(Android)\s+([\d.]+)/i)),
    isIpad = Boolean(ua.match(/(iPad).*OS\s([\d_]+)/i)),
    isIpod = Boolean(ua.match(/(iPod).*OS\s([\d_]+)/i)),
    isIphone = Boolean(
      !isIpod && !isIpad && ua.match(/(iPhone\sOS)\s([\d_]+)/i)
    ),
    isWebos = Boolean(ua.match(/(webOS|hpwOS)[\s\/]([\d.]+)/i)),
    isTouchpad = Boolean(!isWebos && ua.match(/TouchPad/i)),
    isKindle = Boolean(ua.match(/Kindle\/([\d.]+)/i)),
    isSilk = Boolean(ua.match(/Silk\/([\d._]+)/i)),
    isBlackberry = Boolean(ua.match(/(BlackBerry).*Version\/([\d.]+)/i)),
    isMqqbrowser = Boolean(ua.match(/MQQBrowser\/([\d.]+)/i)),
    isChrome = Boolean(ua.match(/CriOS\/([\d.]+)/i)),
    isOpera = Boolean(ua.match(/Opera\/([\d.]+)/i)),
    isSafari = Boolean(ua.match(/Safari\/([\d.]+)/i)),
    isFirefox = Boolean(ua.match(/Firefox\/([\d.]+)/i));
  return {
    isWeixin,
    isWebkit,
    isAndroid,
    isIpad,
    isIpod,
    isIphone,
    isWebos,
    isTouchpad,
    isKindle,
    isSilk,
    isBlackberry,
    isMqqbrowser,
    isChrome,
    isOpera,
    isSafari,
    isFirefox
  };
})();

/**
 * 匹配用户设备、浏览器的型号、版本等代理信息
 *
 * @return {Array}
 */
const matchUserAgent = (() =>
  Object.keys(userAgent).filter(item => userAgent[item]))();

export { userAgent, matchUserAgent };
