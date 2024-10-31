// Fill this array with players guesses
export let charArray = [];
export let totalChars = 0;

// Ignore these keys
const ignoreNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ignoreChars = ["<", ">", ",", ";", ".", ":", "-", "_", "'", "*", "§"];

// Fill charArray with players guesses
export function handleGuessInput(word) {
  document.addEventListener("keydown", (event) => {
    const key = event.key;

    // If key = forbidden key, try again!
    if (ignoreNums.includes(key) || ignoreChars.includes(key)) {
      return;
    }

    if (key === "Backspace") {
      charArray.pop();
      totalChars = Math.max(0, totalChars - 1);
    } else if (key === "Enter" && totalChars === word.length) {
      console.log("Check if players guess = random word"); // <--- REMOVE LATER
      charArray = [];
      totalChars = 0;
    } else if (key.length === 1 && totalChars < word.length) {
      charArray.push(key);
      totalChars++;
      console.log(charArray); // <--- REMOVE LATER
    }
  });
}

// key.length === 1 making sure that only alphabetical keys are pressed
