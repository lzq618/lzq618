/**
 * @copyright lzq 2019(lzq618js@gmail.com)
 * @version 0.0.9
 */

import "./core/style/index.css";

export * from "./core/js/BOM";
export * from "./core/js/DOM";
export * from "./core/js/Phone";
export * from "./core/js/Copy";
export * from "./core/js/Event";
// export * from "./core/js/Random";
export * from "./core/js/Object";
// export * from "./core/js/Date"
export * from "./core/js/URL";
export * from "./core/js/MD5";
export * from "./core/js/Location";
export * from "./core/js/DateTime";

import * as BOM from "./core/js/BOM";
import * as DOM from "./core/js/DOM";
import * as Phone from "./core/js/Phone";
import * as Copy from "./core/js/Copy";
import * as Event from "./core/js/Event";
// import * as Random from "./core/js/Random";
import * as Object from "./core/js/Object";
// import * as Date from "./core/js/Date"
import * as URL from "./core/js/URL";
import * as MD5 from "./core/js/MD5";
import * as DateTime from "./core/js/DateTime";
export default {
  BOM,
  Copy,
  DOM,
  Event,
  MD5,
  Object,
  Phone,
  URL,
  Location,
  DateTime
};
