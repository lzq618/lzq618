/**
 * 事件注册
 * 
 * @return {Object} target\type\fn\checkParamsType\addEvent\removeEvent
 */
class EventsRegister {
  /**
   * @param {EventTarget} target - 监听目标
   * @param {string} type - 事件类型
   * @param {Function} fn - 监听回调函数
   */
  constructor(target, type, fn) {
    this.target = target;
    this.type = type;
    this.fn = fn;
  }

  /**
   * 检测参数类型
   */
  checkParamsType() {
    if (
      this.target instanceof EventTarget &&
      typeof this.type === "string" &&
      this.fn instanceof Function
    ) {
      return true;
    }
    return false;
  }

  /**
   * 添加事件
   */
  addEvent() {
    if (this.checkParamsType()) {
      this.target.addEventListener(this.type, this.fn);
    }
  }

  /**
   * 移除事件
   */
  removeEvent() {
    if (this.checkParamsType()) {
      this.target.removeEventListener(this.type, this.fn);
    }
  }
}

/**
 * 监听回车键
 */
class PressEnter extends EventsRegister {
  /**
   * create pressEnterControl object.
   * @param {EventTarget} target - 监听目标
   * @param {Function} fn - 监听回调函数
   */
  constructor(target, fn) {
    const _fn = event => {
      if (event.keyCode === 13) {
        fn();
      }
    };
    super(target, "keypress", _fn);
  }
}

export { PressEnter };
