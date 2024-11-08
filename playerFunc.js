const gameBoard = document.getElementById("gameBoard");
const winnerDiv = document.getElementById("gameOver");
const winOrLoose = document.getElementById("msg");
const displayWord = document.getElementById("rightWord");
const restartGame = document.getElementById("restart");

// Fill this array with players guesses
export let charArray = [];
export let currentRow = 0; // <-- Max 6 rows

import { rowId, randWordArr } from "./main.js";

let totalChars = 0;
let gameWon = false;

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
  "å",
  "Å",
  "ä",
  "Ä",
  "ö",
  "Ö",
];

// Fill charArray with players guesses
export function handleGuessInput(word, wordList) {
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    let fillRow = document.getElementById(rowId[currentRow]);
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

      // TESTING checkWin func!  // <--- REMOVE WHEN DONE
      compareWordArrs(randWordArr, charArray, wordList);

      // IF WINNING GAME
      if (randWordArr.join("") === charArray.join("")) {
        winnerDiv.style.display = "flex";
        winnerDiv.style.backgroundColor = "rgba(20, 240, 20, 0.5)";
        console.log("You win");
        winOrLoose.textContent = "You win!";
        displayWord.textContent = `${randWordArr.join("")}`;
        restartGame.addEventListener("click", () => {
          winnerDiv.style.display = "none";
          gameWon = !gameWon;

          // Reseting rows and character Array
          currentRow = 0;
          totalChars = 0;

          if (gameWon) {
            location.reload();
          }
        });
        return;
      }

      charArray = [];
      totalChars = 0;

      // Increment row for a new round
      currentRow++;
      totalChars = 0;
      charArray = [];

      // IF LOOSING GAME
      if (currentRow === 6) {
        winnerDiv.style.display = "flex";
        winnerDiv.style.backgroundColor = "rgba(240, 20, 20, 0.8)";

        winOrLoose.textContent = "You loose!";
        displayWord.textContent = `${randWordArr.join("")}`;
        restartGame.addEventListener("click", () => {
          winnerDiv.style.display = "none";
          gameWon = !gameWon;

          // Reseting rows and character Array
          currentRow = 0;
          totalChars = 0;

          if (gameWon) {
            location.reload();
          }
        });

        return;
      }
    } else if (key.length === 1 && totalChars < word.length) {
      fillTile.innerText = key;
      fillTile.classList.add("charJump");

      charArray.push(key.toLowerCase()); // Making sure is lowercase before pushed
      totalChars++;
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
  ["return", "z", "x", "c", "v", "b", "n", "m", "enter"],
];

export function createKeyboard(word, wordList) {
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

      if (totalChars < word.length) {
        fillTile.textContent = allKeys[0][i];
        fillTile.classList.add("charJump");
        charArray.push(allKeys[0][i]);
        totalChars++;
      }
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
        fillTile.classList.add("charJump");
        charArray.push(allKeys[1][i]);
        totalChars++;
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
    alphaKey.textContent = allKeys[2][i];

    alphaKey.addEventListener("click", () => {
      if (totalChars < word.length) {
        let fillRow = document.getElementById(rowId[currentRow]);
        let fillTile = fillRow
          ? fillRow.querySelectorAll(".tile")[totalChars]
          : null;

        fillTile.textContent = allKeys[2][i];
        fillTile.classList.add("charJump");
        charArray.push(allKeys[2][i]);
        totalChars++;
      } else {
        return;
      }
    });

    keyboardBottomRow.appendChild(alphaKey);
  }

  // Enter key
  let enterKey = document.createElement("div");
  enterKey.setAttribute("id", "enterKey");
  enterKey.textContent = allKeys[2][8];

  enterKey.addEventListener("click", () => {
    if (totalChars === word.length) {
      // Check all letters
      compareWordArrs(randWordArr, charArray, wordList);

      if (randWordArr.join("") === charArray.join("")) {
        winnerDiv.style.display = "flex";
        winnerDiv.style.backgroundColor = "rgba(20, 240, 20, 0.5)";
        console.log("You win");
        winOrLoose.textContent = "You win!";
        displayWord.textContent = `${randWordArr.join("")}`;
        restartGame.addEventListener("click", () => {
          winnerDiv.style.display = "none";
          gameWon = !gameWon;

          // Reseting rows and character Array
          currentRow = 0;
          totalChars = 0;

          if (gameWon) {
            location.reload();
          }
        });
        return;
      }

      // Check if word is correct when user presses enter
      charArray = [];
      totalChars = 0;
      // Increment row for a new round
      currentRow++;

      if (currentRow === 6) {
        winnerDiv.style.display = "flex";
        winnerDiv.style.backgroundColor = "rgba(240, 20, 20, 0.8)";

        console.log("You win");
        winOrLoose.textContent = "You loose!";
        displayWord.textContent = `${randWordArr.join("")}`;
        restartGame.addEventListener("click", () => {
          winnerDiv.style.display = "none";
          gameWon = !gameWon;

          // Reseting rows and character Array
          currentRow = 0;
          totalChars = 0;

          if (gameWon) {
            location.reload();
          }
        });
        console.log("You loose");
        return;
      }
    }
  });

  keyboardBottomRow.appendChild(enterKey);
}

/*
    CHECK IF GUESS IS CORRECT 
*/

// Button for colorblind mode on/off
const colorButton = document.getElementById("colorMode");
let colormodeOn = false;

colorButton.addEventListener("click", () => {
  colormodeOn = !colormodeOn;
  console.log(colormodeOn);
});

function compareWordArrs(arr1, arr2, words) {
  /*
    arr1 = randomWarArr
    arr2 = charArr
    words = allWords (main.js)
  */

  let checkThisWord = charArray.join("");
  if (!words.includes(checkThisWord)) {
    let notRight = document.createElement("div");
    notRight.classList.add("tryAgain");
    notRight.textContent = "Word not found. Try again";

    gameBoard.appendChild(notRight);

    let rows = document.getElementById(rowId[currentRow]);
    let tiles = rows.querySelectorAll(".tile");

    tiles.forEach((tile) => {
      tile.textContent = "";
    });
    totalChars = 0;
    currentRow--;

    return;
  }

  for (let i = 0; i < arr1.length; i++) {
    let fillRow = document.getElementById(rowId[currentRow]);
    let fillTile = fillRow ? fillRow.querySelectorAll(".tile")[i] : null;

    if (arr1[i] === arr2[i]) {
      if (!colormodeOn) {
        fillTile.classList.add("tileFlipGreen");
      } else if (colormodeOn) {
        fillTile.classList.add("tileFlipBlue");
      }
    } else {
      if (arr1.includes(arr2[i])) {
        if (!colormodeOn) {
          fillTile.classList.add("tileFlipOrange");
        } else if (colormodeOn) {
          fillTile.classList.add("tileFlipYellow");
        }
      } else {
        fillTile.classList.add("tileFlipGray");
        continue;
      }
    }
  }
}
