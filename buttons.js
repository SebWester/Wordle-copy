const body = document.getElementById("docBody");
const mainContainer = document.getElementById("mainContainer");
const headerTxt = document.querySelector("h1");
const icons = document.querySelectorAll(".fa-xl");

// All buttons
const howToPlay = document.getElementById("howToPlay");
const darkTheme = document.getElementById("darkTheme");
const colorMode = document.getElementById("colorMode");

export function changeTheme(sum) {
  if (sum % 2 === 0) {
    // bkg color
    body.style.backgroundColor = "whitesmoke";
    mainContainer.style.backgroundColor = "white";
    // font/icon color
    headerTxt.style.color = "black";
    icons.forEach((icon) => {
      icon.style.color = "black";
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
  }
}
