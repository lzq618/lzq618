/**
 * @copyright 卢振千 2019(lzq618js@gmail.com)
 * @version 0.0.4
 */

import "./core/style/index.css";

export * from "./core/js/BOM";
export * from "./core/js/DOM";
export * from "./core/js/Phone";
export * from "./core/js/Copy";
// export * from "./core/js/Random";
export * from "./core/js/Object";
// export * from "./core/js/Date"
export * from "./core/js/URL";

import * as BOM from "./core/js/BOM";
import * as DOM from "./core/js/DOM";
import * as Phone from "./core/js/Phone";
import * as Copy from "./core/js/Copy";
// import * as Random from "./core/js/Random";
import * as Object from "./core/js/Object";
// import * as Date from "./core/js/Date"
import * as URL from "./core/js/URL";
export default {
  BOM,
  DOM,
  Phone,
  Copy,
  Object,
  URL
};
