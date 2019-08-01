/**
 * 经纬度转换成三角函数中度分表形式
 *
 * @param {number} 经/纬度
 * @return {number} 度分表形式
 */
function rad(d) {
  return (d * Math.PI) / 180.0;
}

/**
 * 通过两对经纬度计算距离
 * @param {number} lat1 第一点维度
 * @param {number} lng1 第一点经度
 * @param {number} lat2 第二点维度
 * @param {number} lng2 第二点经度
 * @return {number} 单位公里数
 */
function getDistance(lat1, lng1, lat2, lng2) {
  var radLat1 = rad(lat1);
  var radLat2 = rad(lat2);
  var a = rad(lat1) - rad(lat2);
  var b = rad(lng1) - rad(lng2);
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
  s = s * 6378.137; // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000;
  return s;
}

export { getDistance };
