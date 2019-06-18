/**
 * URL module.
 * @module core/URL
 * @see module:core/URL
 */

/**
 * 判断一个字符串是否为URL，默认只匹配http协议和https协议的URL。
 *
 * @param {string} url - 目标字符串
 * @param {Object} query - 可选参数，目前只支持要匹配的协议列表
 * @return {boolean} - 是否为url
 */
function isUrl(url, query = { protocols: ["http", "https"] }) {
  if (typeof url === "string") {
    const lurl = new LURL(url);
    return query.protocols.includes(lurl.protocol);
  }
  return false;
}

/**
 * JAVA 风格的 URL 对象 ，为了与 JavaScript 原生 URL 对象区分，所以以 LURL 名命。
 * 功能几乎与原生 URL 对象相似，但更单纯，主要区别在于将 query 属性（原生 URL 对象的 search 属性）对象化，更易操作参数。
 * ! 但是并未处理以 , 分割的参数
 * 一个标准的 url 应该是如下格式：
 * protocol://hostname:port/path/?param#fragment
 * param 的格式有2种,一种是参数字符串，以 , 分割。另一种是 参数名 = 参数值，以 & 分割
 */
class LURL {
  /**
   * 创建 url 对象
   * @param {string} url - url字符串
   */
  constructor(url) {
    this.href = url;
    this.protocol = "";
    this.hostname = "";
    this.port = "";
    this.path = "";
    this.query = {};
    this.fragment = "";

    if (typeof url === "string") {
      const protocolArr = url.split("://");
      if (protocolArr.length === 2) {
        this.protocol = protocolArr[0];
        const hostnameArr = protocolArr[1].split("/");
        const portArr = hostnameArr[0].split(":");
        this.hostname = portArr[0];
        this.port = portArr.length > 1 ? portArr[1] : "";
        let existQueryOrFragment = false;
        if (hostnameArr[hostnameArr.length - 1].match(/(\?|\#)/)) {
          // 存在query和fragment
          existQueryOrFragment = true;
          if (hostnameArr[hostnameArr.length - 1].match(/\?/)) {
            // 具有query
            const queryStr = hostnameArr[hostnameArr.length - 1]
              .split("#")[0]
              .substr(1);
            const queryArr = queryStr.split("&");
            queryArr.forEach(q => {
              const qArr = q.split("=");
              this.query[qArr[0]] = qArr[1];
            });
            if (queryArr.length === 2) {
              this.fragment = hostnameArr[hostnameArr.length - 1].split("#")[1];
            }
          } else if (hostnameArr[hostnameArr.length - 1].match(/\#/)) {
            // 不具有query，具有fragument
            this.fragment = hostnameArr[hostnameArr.length - 1].split("#")[0];
          }
        }
        if (hostnameArr.length > 1) {
          hostnameArr.forEach((str, index) => {
            if (index > 0) {
              if (existQueryOrFragment) {
                if (index !== hostnameArr.length - 1) {
                  this.path += `/${str}`;
                }
              } else {
                this.path += `/${str}`;
              }
            }
          });
        }
      } else {
        return;
      }
    } else {
      return;
    }
  }
}

export { isUrl, LURL };
