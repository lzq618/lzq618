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
  startListening() {
    if (this.checkParamsType()) {
      this.target.addEventListener(this.type, this.fn);
    }
  }

  /**
   * 移除事件
   */
  stopListening() {
    if (this.checkParamsType()) {
      this.target.removeEventListener(this.type, this.fn);
    }
  }
}

/**
 * 监听键盘事件
 */
class LKeyboard extends EventsRegister {
  /**
   * create keyboardControl object.
   * @param {EventTarget} target - 监听目标
   * @param {Function} fn - 监听回调函数
   * @param {string|Array} keyName - 监听键位
   * @param {boolean} defaultEvent - 可选参数，是否执行默认事件
   * @param {string} mode - 可选参数，键盘事件模式，可选项 keydown, keypress, keyup
   */
  constructor(target, fn, keyName, defaultEvent = true, mode = "keydown") {
    const mapKeyCode = {
      // 英文字母键
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70,
      g: 71,
      h: 72,
      i: 73,
      j: 74,
      k: 75,
      l: 76,
      m: 77,
      n: 78,
      o: 79,
      p: 80,
      q: 81,
      r: 82,
      s: 83,
      t: 84,
      u: 85,
      v: 86,
      w: 87,
      x: 88,
      y: 89,
      z: 90,
      //  非英文的字母键
      zA: 97,
      zB: 98,
      zC: 99,
      zD: 100,
      zE: 101,
      zF: 102,
      zG: 103,
      zH: 104,
      zI: 105,
      zJ: 106,
      zK: 107,
      zL: 108,
      zM: 109,
      zN: 110,
      zO: 111,
      zP: 112,
      zQ: 113,
      zR: 114,
      zS: 115,
      zT: 116,
      zU: 117,
      zV: 118,
      zW: 119,
      zX: 120,
      zY: 121,
      zZ: 122,
      // 上方数字和数字键区数字
      // 0: [48, 96],
      // 1: [49, 97],
      // 2: [50, 98],
      // 3: [51, 99],
      // 4: [52, 100],
      // 5: [53, 101],
      // 6: [54, 102],
      // 7: [55, 103],
      // 8: [56, 104],
      // 9: [57, 105],
      0: 48,
      1: 49,
      2: 50,
      3: 51,
      4: 52,
      5: 53,
      6: 54,
      7: 55,
      8: 56,
      9: 57,
      // 数字键区
      "*": 106,
      "+": 107,
      "-": 109,
      ".": 110,
      "/": 111,
      enter: [13, 108], // 大回车，小键盘区回车
      "-": 109,
      ".": 110,
      "/": 111,
      // 功能键区
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      // 控制键区
      backSpace: 8, //  空格,
      tab: 9, // 制表
      clear: 12,
      shift: 16,
      ctrl: 17,
      alt: 18,
      capeLock: 20,
      esc: 27,
      spaceBar: 32,
      up: 33, // PageUp
      down: 34, // PageDown
      end: 35,
      home: 36,
      left: 37,
      Up: 38,
      right: 39,
      dw: 40,
      insert: 45,
      delete: 46, // 删除
      numLock: 144,
      ";": 186,
      ":": 186,
      "=": 187,
      "+": 187,
      ",": 188,
      "<": 188,
      "-": 189,
      _: 189,
      ".": 190,
      ">": 190,
      "/": 191,
      "?": 191,
      "`": 192,
      "~": 192,
      "`": 193,
      "~": 193,
      "[": 219,
      "{": 219,
      "\\": 220,
      "|": 220,
      "]": 221,
      "}": 221,
      "'": 222,
      '"': 222,
      "volume+": 175,
      "volume-": 174,
      volumeStop: 179, // 停止
      mute: 173, // 静音
      browser: 172, // 浏览器
      email: 180, // 邮件
      search: 179, // 搜索
      collection: 171 // 收藏
    };
    let _fn;
    if (typeof keyName === "string") {
      if (!Object.keys(mapKeyCode).includes(keyName)) {
        return;
      }
      _fn = event => {
        if (event.keyCode === mapKeyCode[keyName]) {
          fn();
        }
      };
    } else if (typeof (keyName === "object") || Array.isArray(keyName)) {
      const ctrlKeys = ["ctrl", "shift", "alt"];
      // 下面需要重构
      if (keyName.length > 3) {
        console.log("监听的组合键大于3个。");
        return;
      } else if (keyName.length < 2) {
        console.log(
          "监听的组合键小于2个。如果只监听单个按钮，请使用string参数"
        );
        return;
      } else if (keyName.length === 2) {
        if (!ctrlKeys.includes(keyName[0])) {
          console.log(`组合键只能使用${ctrlKeys.toString()}中的其中一个`);
          return;
        }
        _fn = event => {
          if (
            event[`${keyName[0]}Key`] &&
            event.keyCode === mapKeyCode[keyName[1]]
          ) {
            event.returnValue = defaultEvent;
            fn();
          }
        };
      } else if (keyName.length === 3) {
        if (!ctrlKeys.includes(keyName[0]) || !ctrlKeys.includes(keyName[1])) {
          console.log(`组合键只能使用${ctrlKeys.toString()}中的其中一个`);
          return;
        }
        _fn = event => {
          if (
            event[`${keyName[0]}Key`] &&
            event[`${keyName[1]}Key`] &&
            event.keyCode === mapKeyCode[keyName[2]]
          ) {
            event.returnValue = defaultEvent;
            fn();
          }
        };
      }
    }
    super(target, mode, _fn);
  }
}

export { LKeyboard };
