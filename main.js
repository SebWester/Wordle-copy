const themeButton = document.getElementById("darkTheme");
const guessContainer = document.getElementById("guessContainer");

// Variable and array for random word
let randomWord;
let allWords;
export let randWordArr = [];

/* All imports */
import { handleGuessInput, createKeyboard } from "./playerFunc.js";
import { showHowToPlay, changeTheme } from "./buttons.js";
// Sum for tracking dark theme
let themeSum = 0;

// Getting random word
async function getRandomWord() {
  const response = await fetch("wordle.json");
  const data = await response.json();
  let randNum = Math.floor(Math.random() * data.length);

  allWords = data;
  randomWord = data[randNum];
  for (let i = 0; i < randomWord.length; i++) {
    randWordArr.push(randomWord[i]);
  }
}

// Creating 6 rows for each round with tiles based on random word length
let totalRows = 0;

export const rowId = ["a", "b", "c", "d", "e", "f"];

function createRows(word) {
  for (let i = totalRows; i < 6; i++) {
    const row = document.createElement("div");
    row.setAttribute("id", rowId[i]);
    row.classList.add("row");

    // Creating tiles for each letter
    for (let j = 0; j < word.length; j++) {
      const tile = document.createElement("div");
      tile.setAttribute("id", j);
      tile.classList.add("tile");

      row.appendChild(tile);
    }
    guessContainer.appendChild(row);
  }
}

// Main function
async function main() {
  try {
    await getRandomWord();

    createRows(randomWord);
    createKeyboard(randomWord, allWords);
    handleGuessInput(randomWord, allWords);

    showHowToPlay();
    // Change theme
    themeButton.addEventListener("click", () => {
      themeSum++;
      changeTheme(themeSum);
    });
  } catch (err) {
    console.log("Something went wrong: " + err);
  }
}

main();
