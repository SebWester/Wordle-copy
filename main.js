const guessContainer = document.getElementById("guessContainer");

// Variable and array for random word
let randomWord;
export let randWordArr = [];

/* All imports */
import { handleGuessInput, createKeyboard } from "./playerFunc.js";

// Getting random word
async function getRandomWord() {
  const response = await fetch("wordle.json");
  const data = await response.json();
  let randNum = Math.floor(Math.random() * data.length);

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

    /*
        ALL CODE GOES HERE
    */

    // TESTING CODE
    console.log(randomWord); // <--- REMOVE WHEN DONE
    console.log("randomWordArr:"); // <--- REMOVE WHEN DONE
    console.log(randWordArr); // <--- REMOVE WHEN DONE

    createRows(randomWord);
    createKeyboard(randomWord);
    handleGuessInput(randomWord);
  } catch (err) {
    console.log("Something went wrong: " + err);
  }
}

main();
