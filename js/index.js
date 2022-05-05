const textarea = document.createElement("textarea");
document.body.appendChild(textarea);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
document.body.appendChild(keyboard);

let ifRuLang = false;

textarea.innerText = "some text inner";

let keyboardArrKey = [
  {
    code: "Backquote",
    letter: "`",
    shiftLetter: "~",
    letterRu: "ё",
    shiftLetterRu: "Ё",
  },
  {
    code: "Digit1",
    letter: "1",
    shiftLetter: "!",
    letterRu: "1",
    shiftLetterRu: "!",
  },
  {
    code: "Digit2",
    letter: "2",
    shiftLetter: "@",
    letterRu: "2",
    shiftLetterRu: '"',
  },
  {
    code: "Digit3",
    letter: "3",
    shiftLetter: "#",
    letterRu: "3",
    shiftLetterRu: "№",
  },
  {
    code: "Digit4",
    letter: "4",
    shiftLetter: "$",
    letterRu: "4",
    shiftLetterRu: ";",
  },
  {
    code: "Digit5",
    letter: "5",
    shiftLetter: "%",
    letterRu: "5",
    shiftLetterRu: "%",
  },
  {
    code: "Digit6",
    letter: "6",
    shiftLetter: "^",
    letterRu: "6",
    shiftLetterRu: ":",
  },
  {
    code: "Digit7",
    letter: "7",
    shiftLetter: "&",
    letterRu: "7",
    shiftLetterRu: "?",
  },
  {
    code: "Digit8",
    letter: "8",
    shiftLetter: "*",
    letterRu: "8",
    shiftLetterRu: "*",
  },
  {
    code: "Digit9",
    letter: "9",
    shiftLetter: "(",
    letterRu: "9",
    shiftLetterRu: "(",
  },
  {
    code: "Digit0",
    letter: "0",
    shiftLetter: ")",
    letterRu: "0",
    shiftLetterRu: ")",
  },
  {
    code: "Minus",
    letter: "-",
    shiftLetter: "_",
    letterRu: "-",
    shiftLetterRu: "_",
  },
  {
    code: "Equal",
    letter: "=",
    shiftLetter: "+",
    letterRu: "=",
    shiftLetterRu: "+",
  },
  {
    code: "Backspace",
    letter: "Backspace",
    shiftLetter: "Backspace",
    letterRu: "Backspace",
    shiftLetterRu: "Backspace",
  },
  {
    code: "Tab",
    letter: "Tab",
    shiftLetter: "Tab",
    letterRu: "Tab",
    shiftLetterRu: "Tab",
  },
  {
    code: "KeyQ",
    letter: "q",
    shiftLetter: "Q",
    letterRu: "й",
    shiftLetterRu: "Й",
  },
  {
    code: "KeyW",
    letter: "w",
    shiftLetter: "W",
    letterRu: "ц",
    shiftLetterRu: "Ц",
  },
  {
    code: "KeyE",
    letter: "e",
    shiftLetter: "E",
    letterRu: "у",
    shiftLetterRu: "У",
  },
  {
    code: "KeyR",
    letter: "r",
    shiftLetter: "R",
    letterRu: "к",
    shiftLetterRu: "К",
  },
  {
    code: "KeyT",
    letter: "t",
    shiftLetter: "T",
    letterRu: "е",
    shiftLetterRu: "Е",
  },
  {
    code: "KeyY",
    letter: "y",
    shiftLetter: "Y",
    letterRu: "н",
    shiftLetterRu: "Н",
  },
  {
    code: "KeyU",
    letter: "u",
    shiftLetter: "U",
    letterRu: "г",
    shiftLetterRu: "Г",
  },
  {
    code: "KeyI",
    letter: "i",
    shiftLetter: "I",
    letterRu: "ш",
    shiftLetterRu: "Ш",
  },
  {
    code: "KeyO",
    letter: "o",
    shiftLetter: "O",
    letterRu: "щ",
    shiftLetterRu: "Щ",
  },
  {
    code: "KeyP",
    letter: "p",
    shiftLetter: "P",
    letterRu: "з",
    shiftLetterRu: "З",
  },
  {
    code: "BracketLeft",
    letter: "[",
    shiftLetter: "{",
    letterRu: "х",
    shiftLetterRu: "Х",
  },
  {
    code: "BracketRight",
    letter: "]",
    shiftLetter: "}",
    letterRu: "ъ",
    shiftLetterRu: "Ъ",
  },
  {
    code: "Backslash",
    letter: "\\",
    shiftLetter: "|",
    letterRu: "\\",
    shiftLetterRu: "/",
  },
  {
    code: "Delete",
    letter: "Del",
    shiftLetter: "Del",
    letterRu: "Del",
    shiftLetterRu: "Del",
  },
  {
    code: "CapsLock",
    letter: "CapsLock",
    shiftLetter: "CapsLock",
    letterRu: "CapsLock",
    shiftLetterRu: "CapsLock",
  },
  {
    code: "KeyA",
    letter: "a",
    shiftLetter: "A",
    letterRu: "ф",
    shiftLetterRu: "Ф",
  },
  {
    code: "KeyS",
    letter: "s",
    shiftLetter: "S",
    letterRu: "ы",
    shiftLetterRu: "Ы",
  },
  {
    code: "KeyD",
    letter: "d",
    shiftLetter: "D",
    letterRu: "в",
    shiftLetterRu: "В",
  },
  {
    code: "KeyF",
    letter: "f",
    shiftLetter: "F",
    letterRu: "а",
    shiftLetterRu: "А",
  },
  {
    code: "KeyG",
    letter: "g",
    shiftLetter: "G",
    letterRu: "п",
    shiftLetterRu: "П",
  },
  {
    code: "KeyH",
    letter: "h",
    shiftLetter: "H",
    letterRu: "р",
    shiftLetterRu: "Р",
  },
  {
    code: "KeyJ",
    letter: "j",
    shiftLetter: "J",
    letterRu: "о",
    shiftLetterRu: "О",
  },
  {
    code: "KeyK",
    letter: "k",
    shiftLetter: "K",
    letterRu: "л",
    shiftLetterRu: "Л",
  },
  {
    code: "KeyL",
    letter: "l",
    shiftLetter: "L",
    letterRu: "д",
    shiftLetterRu: "Д",
  },
  {
    code: "Semicolon",
    letter: ";",
    shiftLetter: ":",
    letterRu: "ж",
    shiftLetterRu: "Ж",
  },
  {
    code: "Quote",
    letter: "'",
    shiftLetter: '"',
    letterRu: "э",
    shiftLetterRu: "Э",
  },
  {
    code: "Enter",
    letter: "Enter",
    shiftLetter: "Enter",
    letterRu: "Enter",
    shiftLetterRu: "Enter",
  },
  {
    code: "ShiftLeft",
    letter: "Shift",
    shiftLetter: "Shift",
    letterRu: "Shift",
    shiftLetterRu: "Shift",
  },
  {
    code: "KeyZ",
    letter: "z",
    shiftLetter: "Z",
    letterRu: "я",
    shiftLetterRu: "Я",
  },
  {
    code: "KeyX",
    letter: "x",
    shiftLetter: "X",
    letterRu: "ч",
    shiftLetterRu: "Ч",
  },
  {
    code: "KeyC",
    letter: "c",
    shiftLetter: "C",
    letterRu: "с",
    shiftLetterRu: "С",
  },
  {
    code: "KeyV",
    letter: "v",
    shiftLetter: "V",
    letterRu: "м",
    shiftLetterRu: "М",
  },
  {
    code: "KeyB",
    letter: "b",
    shiftLetter: "B",
    letterRu: "и",
    shiftLetterRu: "И",
  },
  {
    code: "KeyN",
    letter: "n",
    shiftLetter: "N",
    letterRu: "т",
    shiftLetterRu: "Т",
  },
  {
    code: "KeyM",
    letter: "m",
    shiftLetter: "M",
    letterRu: "ь",
    shiftLetterRu: "Ь",
  },
  {
    code: "Comma",
    letter: ",",
    shiftLetter: "<",
    letterRu: "б",
    shiftLetterRu: "Б",
  },
  {
    code: "Period",
    letter: ".",
    shiftLetter: ">",
    letterRu: "ю",
    shiftLetterRu: "Ю",
  },
  {
    code: "Slash",
    letter: "/",
    shiftLetter: "?",
    letterRu: ".",
    shiftLetterRu: ",",
  },
  {
    code: "ArrowUp",
    letter: "&#8593;",
    shiftLetter: "&#8593;",
    letterRu: "&#8593",
    shiftLetterRu: "&#8593",
  },
  {
    code: "ShiftRight",
    letter: "Shift",
    shiftLetter: "Shift",
    letterRu: "Shift",
    shiftLetterRu: "Shift",
  },
  {
    code: "ControlLeft",
    letter: "Ctrl",
    shiftLetter: "Ctrl",
    letterRu: "Ctrl",
    shiftLetterRu: "Ctrl",
  },
  {
    code: "MetaLeft",
    letter: "Win",
    shiftLetter: "Win",
    letterRu: "Win",
    shiftLetterRu: "Win",
  },
  {
    code: "AltLeft",
    letter: "Alt",
    shiftLetter: "Alt",
    letterRu: "Alt",
    shiftLetterRu: "Alt",
  },
  {
    code: "Space",
    letter: "Space",
    shiftLetter: "Space",
    letterRu: "Space",
    shiftLetterRu: "Space",
  },
  {
    code: "AltRight",
    letter: "Alt",
    shiftLetter: "Alt",
    letterRu: "Alt",
    shiftLetterRu: "Alt",
  },
  {
    code: "ArrowLeft",
    letter: "&#8592;	",
    shiftLetter: "&#8592;	",
    letterRu: "&#8592;",
    shiftLetterRu: "&#8592;",
  },
  {
    code: "ArrowDown",
    letter: "&#8595;	",
    shiftLetter: "&#8595;	",
    letterRu: "&#8595;",
    shiftLetterRu: "&#8595;",
  },
  {
    code: "ArrowRight",
    letter: "&#8594;	",
    shiftLetter: "&#8594;	",
    letterRu: "&#8594;",
    shiftLetterRu: "&#8594;",
  },
  {
    code: "ControlRight",
    letter: "Ctrl",
    shiftLetter: "Ctrl",
    letterRu: "Ctrl",
    shiftLetterRu: "Ctrl",
  },
];

function init() {
  let out = "";
  for (let i = 0; i < keyboardArrKey.length; i++) {
    out += `<div class="k-key" data-code="${keyboardArrKey[i].code}">${keyboardArrKey[i].letter}</div> `;
  }
  document.querySelector(".keyboard").innerHTML = out;
}
init();

function keyClicked(code) {
  document
    .querySelector(`.keyboard .k-key[data-code="${code}"]`)
    .classList.add("clicked");
}

document.addEventListener("keydown", function (e) {
  keyClicked(e.code);
});

document.addEventListener("keyup", function (e) {
  document
    .querySelector(`.keyboard .k-key[data-code="${e.code}"]`)
    .classList.remove("clicked");
});

document.querySelectorAll(".keyboard .k-key").forEach(function (el) {
  el.addEventListener("mousedown", function () {
    this.classList.add("clicked");
  });
  el.addEventListener("mouseup", function () {
    this.classList.remove("clicked");
  });
});

//  ------------ drawing letters when shift on ------------

function drawEn() {
  // console.log("drawEnShift");
  for (let i = 0; i < keyboardArrKey.length; i++) {
    document.querySelector(
      `[data-code='${keyboardArrKey[i].code}']`
    ).innerHTML = keyboardArrKey[i].letter;
  }
}

function drawEnRuShift() {
  if (!ifRuLang) {
    for (let i = 0; i < keyboardArrKey.length; i++) {
      document.querySelector(
        `[data-code='${keyboardArrKey[i].code}']`
      ).innerHTML = keyboardArrKey[i].shiftLetter;
    }
  } else {
    for (let i = 0; i < keyboardArrKey.length; i++) {
      document.querySelector(
        `[data-code='${keyboardArrKey[i].code}']`
      ).innerHTML = keyboardArrKey[i].shiftLetterRu;
    }
  }
}

const leftShift = document.querySelector("[data-code='ShiftLeft']");
leftShift.addEventListener("mousedown", drawEnRuShift);
leftShift.addEventListener("mouseup", function () {
  console.log("check func start");
  if (!ifRuLang) {
    drawEn();
  } else {
    drawRu();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    drawEnRuShift();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.code == "ShiftLeft" || e.code == "ShiftRight") {
    if (!ifRuLang) {
      drawEn();
    } else {
      drawRu();
    }
  }
});

// ------------ drawing letters when capsOn on ----------------

let ifCapsLockOn = false;

const capslockDraw = function () {
  if (!ifCapsLockOn) {
    drawEnRuShift();
    ifCapsLockOn = true;
    document
      .querySelector("[data-code='CapsLock']")
      .classList.add("border-colored");
  } else {
    drawEn();
    ifCapsLockOn = false;
    document
      .querySelector("[data-code='CapsLock']")
      .classList.remove("border-colored");
  }
};

const capsLock = document.querySelector("[data-code='CapsLock']");
capsLock.addEventListener("click", function () {
  capslockDraw();
});

document.addEventListener("keydown", function (e) {
  if (e.code == "CapsLock") {
    capslockDraw();
  }
});

// drawing letters when RuOn on

function drawRu() {
  // console.log("drawEnShift");
  for (let i = 0; i < keyboardArrKey.length; i++) {
    document.querySelector(
      `[data-code='${keyboardArrKey[i].code}']`
    ).innerHTML = keyboardArrKey[i].letterRu;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code == "AltLeft" && e.ctrlKey == true) {
    if (!ifRuLang) {
      drawRu();
      ifRuLang = true;
    } else {
      drawEn();
      ifRuLang = false;
    }
  }
});

// leftShift.addEventListener("mouseup", initEn);

// class BUTTON {
//   constructor(mainData, secondaryData) {
//     if (!mainData) throw new Error("Dont have data");
//     this._mainData = mainData;
//     this._secondaryData = secondaryData;
//   }

//   _mainData;
//   _secondaryData;

//   _initButton() {
//     const btn = document.createElement("button");
//     btn.classList.add("btn");

//     const keyboard = document.querySelector("keyboard");
//     keyboard.appendChild(btn);
//   }
// }

// document.addEventListener("keyup", function (e) {
//   document.querySelectorAll(".keyboard .k-key").forEach(function (el) {
//     el.classList.remove("active");
//   });
