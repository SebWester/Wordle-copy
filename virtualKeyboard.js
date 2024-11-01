let alphaKey;
const keyboardTopRow = document.getElementById("keyboardTopRow");
const keyboardMidRow = document.getElementById("keyboardMidRow");
const keyboardBottomRow = document.getElementById("keyboardBottomRow");
const allKeys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z"],
  ["return", "x", "c", "v", "b", "n", "m", "enter"],
];

export function createKeyboard() {
  // Top row of keyboard
  for (let i = 0; i < allKeys[0].length; i++) {
    alphaKey = document.createElement("div");
    alphaKey.classList.add("alphaKey");
    alphaKey.textContent = allKeys[0][i];

    keyboardTopRow.appendChild(alphaKey);
  }
  // Mid row of keyboard
  for (let i = 0; i < allKeys[1].length; i++) {
    alphaKey = document.createElement("div");
    alphaKey.classList.add("alphaKey");
    alphaKey.textContent = allKeys[1][i];

    keyboardMidRow.appendChild(alphaKey);
  }

  // Bottom row of keyboard
  // Return key
  let returnKey = document.createElement("div");
  returnKey.setAttribute("id", "returnKey");
  returnKey.textContent = allKeys[2][0];

  keyboardBottomRow.appendChild(returnKey);

  for (let i = 1; i < allKeys[2].length - 1; i++) {
    alphaKey = document.createElement("div");
    alphaKey.classList.add("alphaKey");
    alphaKey.textContent = allKeys[2][i];

    keyboardBottomRow.appendChild(alphaKey);
  }

  // Enter key
  let enterKey = document.createElement("div");
  enterKey.setAttribute("id", "enterKey");
  enterKey.textContent = allKeys[2][7];

  keyboardBottomRow.appendChild(enterKey);
}
