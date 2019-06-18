/**
 * 计算相对剩余时间
 * 按照每分钟60秒，每小时60分，每天24小时，每月30天，每年365天的精度来计算，不考虑闰秒等问题。
 * ! 此函数存在BUG。
 *
 * @param {number} time - 计算时间戳
 * @return {Object} 包含计算后的相对时间
 */
function restTime(time) {
  let seconds, minutes, hours, day, months, year;
  if (
    typeof time === "number" &&
    Number.isFinite(time) &&
    (time.toString().length === 10 || time.toString().length === 13) &&
    time > 0
  ) {
    const currentTimeStamp = Date.now();
    const _time = time.toString().length === 13 ? time : time * 1000;
    const timeDiff = currentTimeStamp - _time;
    seconds = Number.parseInt(timeDiff / 1000) % 60;
    minutes = Number.parseInt(seconds / 60);
    hours = Number.parseInt(minutes / 60);
    day = Number.parseInt(hours / 24);
    months = Number.parseInt(day / 30);
    year = Number.parseInt(day / 365);
  } else {
    console.warn("传入的不是一个正确的时间戳");
  }
  return {
    year,
    months,
    day,
    hours,
    minutes,
    seconds
  };
}

/**
 * 获取时间字符串
 * 暂时不发布此函数
 *
 * @param {string} fmt
 */
function dateFormat(fmt) {
  const date = new Date();
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      date
        .getFullYear()
        .toString()
        .substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
}

export { restTime, dateFormat };
