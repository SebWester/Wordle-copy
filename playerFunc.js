// Fill this array with players guesses
export let charArray = [];
// export let totalChars = 0;
export let currentRow = 0; // <-- Max 6 rows

import { rowId, randWordArr } from "./main.js";
import { compareWordArrs } from "./checkWin.js";

let totalChars = 0;

// Ignore these keys
const ignoreNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ignoreChars = [
  "<",
  ">",
  ",",
  ";",
  ".",
  ":",
  "-",
  "_",
  "'",
  "*",
  "§",
  " ",
];

// Fill charArray with players guesses
export function handleGuessInput(word) {
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    let fillRow = document.getElementById(rowId[currentRow]);
    // let fillTile = document.getElementById(`${totalChars}`);
    let fillTile = fillRow
      ? fillRow.querySelectorAll(".tile")[totalChars]
      : null;

    // If key = forbidden key, try again!
    if (ignoreNums.includes(key) || ignoreChars.includes(key)) {
      return;
    }

    // Remove characters
    if (key === "Backspace") {
      if (totalChars > 0) {
        totalChars--;
        fillTile = fillRow.querySelectorAll(".tile")[totalChars];
        fillTile.textContent = "";
        charArray.pop();
      }
    } else if (key === "Enter" && totalChars === word.length) {
      // Check if word is correct when user presses enter
      console.log("Check if players guess = random word"); // <--- REMOVE WHEN DONE
      // TESTING checkWin func!
      compareWordArrs(randWordArr, charArray);

      charArray = [];
      totalChars = 0;
      // Increment row for a new round
      currentRow++;
      console.log(currentRow); // <--- REMOVE WHEN DONE
    } else if (key.length === 1 && totalChars < word.length) {
      fillTile.innerText = key;

      charArray.push(key);
      totalChars++;
      console.log(charArray); // <--- REMOVE WHEN DONE
    }
  });
}

// key.length === 1 making sure that only alphabetical keys are pressed

/*
  VIRTUAL KEYBOARD HERE 
*/

let alphaKey;
const keyboardTopRow = document.getElementById("keyboardTopRow");
const keyboardMidRow = document.getElementById("keyboardMidRow");
const keyboardBottomRow = document.getElementById("keyboardBottomRow");
const allKeys = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "z"],
  ["return", "x", "c", "v", "b", "n", "m", "enter"],
];

export function createKeyboard(word) {
  // Top row of keyboard
  for (let i = 0; i < allKeys[0].length; i++) {
    alphaKey = document.createElement("div");
    alphaKey.classList.add("alphaKey");
    alphaKey.textContent = allKeys[0][i];

    // Pretty much same code as in playerFunc.js
    alphaKey.addEventListener("click", () => {
      let fillRow = document.getElementById(rowId[currentRow]);

      let fillTile = fillRow
        ? fillRow.querySelectorAll(".tile")[totalChars]
        : null;

      fillTile.textContent = allKeys[0][i];
      charArray.push(allKeys[0][i]);
      totalChars++;
      console.log(charArray); // <--- REMOVE WHEN DONE
    });

    keyboardTopRow.appendChild(alphaKey);
  }

  // Mid row of keyboard
  for (let i = 0; i < allKeys[1].length; i++) {
    alphaKey = document.createElement("div");
    alphaKey.classList.add("alphaKey");
    alphaKey.textContent = allKeys[1][i];

    alphaKey.addEventListener("click", () => {
      if (totalChars < word.length) {
        let fillRow = document.getElementById(rowId[currentRow]);

        let fillTile = fillRow
          ? fillRow.querySelectorAll(".tile")[totalChars]
          : null;

        fillTile.textContent = allKeys[1][i];
        charArray.push(allKeys[1][i]);
        totalChars++;
        console.log(charArray); // <--- REMOVE WHEN DONE
      } else {
        return;
      }
    });

    keyboardMidRow.appendChild(alphaKey);
  }

  // Bottom row of keyboard
  // Return key
  let returnKey = document.createElement("div");
  returnKey.setAttribute("id", "returnKey");
  returnKey.textContent = allKeys[2][0];

  returnKey.addEventListener("click", () => {
    if (totalChars > 0) {
      let fillRow = document.getElementById(rowId[currentRow]);

      let fillTile = fillRow
        ? fillRow.querySelectorAll(".tile")[totalChars]
        : null;

      totalChars--;
      fillTile = fillRow.querySelectorAll(".tile")[totalChars];
      fillTile.textContent = "";
      charArray.pop();
    }
  });

  keyboardBottomRow.appendChild(returnKey);

  // alphaKeys
  for (let i = 1; i < allKeys[2].length - 1; i++) {
    alphaKey = document.createElement("div");
    alphaKey.classList.add("alphaKey");
    alphaKey.textContent = allKeys[1][i];

    alphaKey.addEventListener("click", () => {
      if (totalChars < word.length) {
        let fillRow = document.getElementById(rowId[currentRow]);

        let fillTile = fillRow
          ? fillRow.querySelectorAll(".tile")[totalChars]
          : null;

        fillTile.textContent = allKeys[1][i];
        charArray.push(allKeys[2][i]);
        totalChars++;
        console.log(charArray); // <--- REMOVE WHEN DONE
      } else {
        return;
      }
    });

    keyboardBottomRow.appendChild(alphaKey);
  }

  // Enter key
  let enterKey = document.createElement("div");
  enterKey.setAttribute("id", "enterKey");
  enterKey.textContent = allKeys[2][7];

  enterKey.addEventListener("click", () => {
    if (totalChars === word.length) {
      let fillRow = document.getElementById(rowId[currentRow]);

      // Check all letters
      compareWordArrs(randWordArr, charArray);

      // Check if word is correct when user presses enter
      console.log("Check if players guess = random word"); // <--- REMOVE WHEN DONE
      charArray = [];
      totalChars = 0;
      // Increment row for a new round
      currentRow++;
      console.log(currentRow); // <--- REMOVE WHEN DONE
    }
  });

  keyboardBottomRow.appendChild(enterKey);
}
