const playersGuesses = document.getElementById("playersGuesses");

// Variable and array for random word
let randomWord;
let randWordArr = [];

/* All imports */
import { charArray, totalChars, handleGuessInput } from "./playerFunc.js";

async function getRandomWord() {
  const response = await fetch("wordle.json");
  const data = await response.json();
  let randNum = Math.floor(Math.random() * data.length);

  randomWord = data[randNum];
  for (let i = 0; i < randomWord.length; i++) {
    randWordArr.push(randomWord[i]);
  }
}

async function main() {
  try {
    await getRandomWord();

    /*
        ALL CODE GOES HERE
    */

    // TESTING CODE
    console.log(randomWord);
    console.log("randomWordArr:");
    console.log(randWordArr);

    handleGuessInput(randomWord, charArray);
  } catch (err) {
    console.log("Something went wrong: " + err);
  }
}

main();
