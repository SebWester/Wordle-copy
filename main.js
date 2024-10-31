const playersGuesses = document.getElementById("playersGuesses");

// Variable and array for random word
let randomWord;
let randWordArr = [];

/* All imports */
import { charArray, totalChars, row, handleGuessInput } from "./playerFunc.js";

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

    handleGuessInput(randomWord, charArray);
  } catch (err) {
    console.log("Something went wrong: " + err);
  }
}

main();
