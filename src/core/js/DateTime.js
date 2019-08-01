import Reactive from "./Reactive";

class DateTime {
  /**
   * @param {number|string} timestamp 10位或13位时间戳，不合规的参数会返回 undefined
   */
  constructor(timestamp = new Date().getTime()) {
    const reactive = new Reactive();
    reactive.defineReactive(
      this,
      "template",
      "yyyy-MM-dd HH:mm:ss",
      this.parse
    );
    reactive.defineReactive(this, "timestamp", timestamp, this.parse);
    this.template = "yyyy-MM-dd HH:mm:ss";
    if (timestamp.toString().length === 10) {
      this.timestamp = `${timestamp}000`;
    } else if (timestamp.toString().length === 13) {
      this.timestamp = timestamp;
    } else {
      return;
    }
    this.template = "yyyy-MM-dd HH:mm:ss";
  }
  /**
   * 改变时间
   * @param {object} param0 配置对象
   */
  add({ year = 0, month = 0, day = 0, hours = 0, minutes = 0, seconds = 0 }) {
    let currentYear = new Date(this.timestamp).getFullYear();
    let currentMonth = new Date(this.timestamp).getMonth();
    let currentDay = new Date(this.timestamp).getDate();
    let currentHours = new Date(this.timestamp).getHours();
    let currentMinutes = new Date(this.timestamp).getMinutes();
    let currentSeconds = new Date(this.timestamp).getSeconds();

    let newDate = new Date(
      new Date(this.timestamp).setFullYear(currentYear + year)
    ).getTime();
    newDate = new Date(
      new Date(newDate).setMonth(currentMonth + month)
    ).getTime();
    newDate = new Date(new Date(newDate).setDate(currentDay + day)).getTime();
    newDate = new Date(
      new Date(newDate).setHours(currentHours + hours)
    ).getTime();
    newDate = new Date(
      new Date(newDate).setMinutes(currentMinutes + minutes)
    ).getTime();
    newDate = new Date(
      new Date(newDate).setSeconds(currentSeconds + seconds)
    ).getTime();
    this.timestamp = newDate;
    return this.now;
  }
  /**
   * @param {string} template 序列化格式 默认：yyyy-MM-dd HH:mm:ss
   * @return {String} 返回序列化的时间字符串
   */
  format(template = this.template) {
    if (template === this.template) {
      return this.now;
    }
    this.template = template;
    this.parse();
    return this.now;
  }
  // 转换函数，主要是 月日时分秒拼接0
  parse() {
    const date = new Date(this.timestamp);
    const year = date.getFullYear(),
      _month = date.getMonth() + 1,
      month = _month < 10 ? `0${_month}` : _month,
      _day = date.getDate(),
      day = _day < 10 ? `0${_day}` : _day,
      _hours = date.getHours(),
      hours = _hours < 10 ? `0${_hours}` : _hours,
      _minutes = date.getMinutes(),
      minutes = _minutes < 10 ? `0${_minutes}` : _minutes,
      _seconds = date.getSeconds(),
      seconds = _seconds < 10 ? `0${_seconds}` : _seconds;
    this.now = this.template
      .replace("yyyy", year.toString())
      .replace("MM", month.toString())
      .replace("dd", day.toString())
      .replace("HH", hours.toString())
      .replace("mm", minutes.toString())
      .replace("ss", seconds.toString());
  }
  toString() {
    return this.now;
  }
}
export { DateTime };
