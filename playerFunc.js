// Fill this array with players guesses
export let charArray = [];
export let totalChars = 0;
export let currentRow = 0; // <-- Max 6 rows

import { rowId } from "./main.js";

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
