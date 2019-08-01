class DateTime {
  /**
   * @param {number|string} timestamp 10位或13位时间戳，不合规的参数会返回 undefined
   */
  constructor(timestamp = new Date().getTime()) {
    if (timestamp.toString().length === 10) {
      this.timestamp = `${timestamp}000`;
    } else if (timestamp.toString().length === 13) {
      this.timestamp = timestamp;
    } else {
      return;
    }
    this.template = "yyyy-MM-dd HH:mm:ss";
    this.parse();
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
