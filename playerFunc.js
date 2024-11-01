// Fill this array with players guesses
export let charArray = [];
export let totalChars = 0;
export let row = 0; // <-- Max 6 rows

// Ignore these keys
const ignoreNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ignoreChars = ["<", ">", ",", ";", ".", ":", "-", "_", "'", "*", "§"];

// Fill charArray with players guesses
export function handleGuessInput(word) {
  document.addEventListener("keydown", (event) => {
    const key = event.key;
    let fillTile = document.getElementById(`${totalChars}`);

    // If key = forbidden key, try again!
    if (ignoreNums.includes(key) || ignoreChars.includes(key)) {
      return;
    }

    if (key === "Backspace") {
      charArray.pop();
      fillTile.textContent = ""; // FIX THIS
      totalChars = Math.max(0, totalChars - 1);
      console.log(charArray); // <--- REMOVE WHEN DONE
    } else if (key === "Enter" && totalChars === word.length) {
      console.log("Check if players guess = random word"); // <--- REMOVE WHEN DONE
      charArray = [];
      totalChars = 0;
      // Increment row for a new round
      row++;
      console.log(row); // <--- REMOVE WHEN DONE
    } else if (key.length === 1 && totalChars < word.length) {
      fillTile.innerText = key;

      charArray.push(key);
      totalChars++;
      console.log(charArray); // <--- REMOVE WHEN DONE
    }
  });
}

// key.length === 1 making sure that only alphabetical keys are pressed
