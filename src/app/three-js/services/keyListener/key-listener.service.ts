import { Injectable } from '@angular/core';

let keyCode = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE_BREAK: 19,
  CAPS_LOCK: 20,
  ESCAPE: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
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
  LEFT_WINDOW: 91,
  RIGHT_WINDOW: 92,
  SELECT: 93,
  NUMPAD_0: 96,
  NUMPAD_1: 97,
  NUMPAD_2: 98,
  NUMPAD_3: 99,
  NUMPAD_4: 100,
  NUMPAD_5: 101,
  NUMPAD_6: 102,
  NUMPAD_7: 103,
  NUMPAD_8: 104,
  NUMPAD_9: 105,
  MULTIPLY: 106,
  ADD: 107,
  SEPARATOR: 108,
  SUBTRACT: 109,
  DECIMAL: 110,
  DIVIDE: 111,
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
  NUM_LOCK: 144,
  SCROLL_LOCK: 145,
  SEMICOLON: 186,
  EQUALS: 187,
  COMMA: 188,
  DASH: 189,
  PERIOD: 190,
  FORWARD_SLASH: 191,
  GRAVE_ACCENT: 192,
  OPEN_BRACKET: 219,
  BACK_SLASH: 220,
  CLOSE_BRACKET: 221,
  QUOTE: 222,
  COMMAND: 224,
  ALTGR: 225,
  WIN_IME: 229,
  KEY_0: 48,
  KEY_1: 49,
  KEY_2: 50,
  KEY_3: 51,
  KEY_4: 52,
  KEY_5: 53,
  KEY_6: 54,
  KEY_7: 55,
  KEY_8: 56,
  KEY_9: 57,
  KEY_A: 65,
  KEY_B: 66,
  KEY_C: 67,
  KEY_D: 68,
  KEY_E: 69,
  KEY_F: 70,
  KEY_G: 71,
  KEY_H: 72,
  KEY_I: 73,
  KEY_J: 74,
  KEY_K: 75,
  KEY_L: 76,
  KEY_M: 77,
  KEY_N: 78,
  KEY_O: 79,
  KEY_P: 80,
  KEY_Q: 81,
  KEY_R: 82,
  KEY_S: 83,
  KEY_T: 84,
  KEY_U: 85,
  KEY_V: 86,
  KEY_W: 87,
  KEY_X: 88,
  KEY_Y: 89,
  KEY_Z: 90,
  KEY_NUMPAD_0: 96,
  KEY_NUMPAD_1: 97,
  KEY_NUMPAD_2: 98,
  KEY_NUMPAD_3: 99,
  KEY_NUMPAD_4: 100,
  KEY_NUMPAD_5: 101,
  KEY_NUMPAD_6: 102,
  KEY_NUMPAD_7: 103,
  KEY_NUMPAD_8: 104,
  KEY_NUMPAD_9: 105,
  LEFT_META: 91,
  RIGHT_META: 92,
  NUMPAD_ASTERISK: 106,
  NUMPAD_PLUS: 107,
  NUMPAD_HYPHEN: 109,
  NUMPAD_PERIOD: 110,
  NUMPAD_FORWARD_SLASH: 111,
  NUMPAD_NUMLOCK: 144,
}


export default keyCode;
@Injectable({
  providedIn: 'root'
})
export class KeyListenerService {

  keys: { [key: number]: boolean } = {};
  caster: (args: any[]) => void;

  constructor() {
    this.caster = console.log;
  }

  setCaster(caster: (args: any[]) => void) {
    this.caster = caster;
  }

  down = (e: KeyboardEvent) => {
    if (this.keys[e.keyCode]) return;
    this.keys[e.keyCode] = true;
    this.caster([e.keyCode, true, this.keys]);
  };

  up = (e: KeyboardEvent) => {
    this.keys[e.keyCode] = false;
    this.caster([e.keyCode, false, this.keys]);
  };

  isPressed(keyCode: number): boolean {
    return this.keys[keyCode] ?? false;
  }

  start() {
    this.stop();
    window.addEventListener('keydown', this.down);
    window.addEventListener('keyup', this.up);
  }

  stop() {
    window.removeEventListener('keydown', this.down);
    window.removeEventListener('keyup', this.up);
  }

}
