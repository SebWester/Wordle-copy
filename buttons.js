const body = document.getElementById("docBody");
const infoDiv = document.getElementById("infoDiv");
const mainContainer = document.getElementById("mainContainer");
const headerTxt = document.querySelector("h1");
const icons = document.querySelectorAll(".fa-xl");

// All buttons
const howToPlay = document.getElementById("howToPlay");
const darkTheme = document.getElementById("darkTheme");
const colorMode = document.getElementById("colorMode");
const returnToGame = document.getElementById("returnBtn");

/*
  Function for displaying info
*/

export function showHowToPlay() {
  howToPlay.addEventListener("click", () => {
    infoDiv.style.display = "block";
  });

  returnToGame.addEventListener("click", () => {
    infoDiv.style.display = "none";
  });
}

/*
  Function for changing theme
*/
export function changeTheme(sum) {
  const rows = document.querySelectorAll(".row");

  if (sum % 2 === 0) {
    // bkg color
    body.style.backgroundColor = "whitesmoke";
    mainContainer.style.backgroundColor = "white";
    // font/icon color
    headerTxt.style.color = "black";
    icons.forEach((icon) => {
      icon.style.color = "black";
    });

    // Tile font color
    rows.forEach((row) => {
      const tiles = row ? row.querySelectorAll(".tile") : null;

      // Tile font color
      tiles.forEach((tile) => {
        tile.style.color = "black";
      });
    });
  } else if (sum % 2 !== 0) {
    // bkg color
    body.style.backgroundColor = "#222831";
    mainContainer.style.backgroundColor = "#222831";
    // font/icon color
    headerTxt.style.color = "white";
    icons.forEach((icon) => {
      icon.style.color = "white";
    });

    rows.forEach((row) => {
      const tiles = row ? row.querySelectorAll(".tile") : null;

      // Tile font color
      tiles.forEach((tile) => {
        tile.style.color = "white";
      });
    });
  }
}
