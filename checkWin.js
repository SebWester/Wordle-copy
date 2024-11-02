/*
    Compare randomWordArr (main.js) with charArray (playerFunc.js)
    If letter in random word but not correct index --> Orange flip animation
    If letter in random word and correct index --> Green flip animation
    If letter not in random word --> Grey flip animation 
    If guessed word not in wordle.json --> Alert box "Word not in list" 
*/

export function compareWordArrs(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log("index: " + i);
      console.log("Letter in random word AND right index \n");
    } else {
      if (arr1.includes(arr2[i])) {
        console.log("index: " + i);
        console.log("Letter in random word BUT not right index\n");
      } else {
        console.log("index: " + i);
        console.log("Letter not in random word\n");
        continue;
      }
    }
  }
}
