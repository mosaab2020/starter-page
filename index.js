// TODOs: add whatsapp link support and make url open in one key press

const clockDiv = document.getElementById("clockDiv");
let hiCharY = document.getElementsByClassName("hiCharY");
let hiCharT = document.getElementsByClassName("hiCharT");
let hiCharG = document.getElementsByClassName("hiCharG");
let hiCharE = document.getElementsByClassName("hiCharE");
let hiCharW = document.getElementsByClassName("hiCharW");
let hiCharO = document.getElementsByClassName("hiCharO");
let lastKey;
let lastKeyTime;

function startTime() {
  const today = new Date();
  let H = today.getHours();
  let M = today.getMinutes();
  let S = today.getSeconds();
  M = checkTime(M);
  S = checkTime(S);
  clockDiv.innerHTML = H + ":" + M + ":" + S;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

function handleShortcut(event) {
  //switch (lastKey && firstKey) {
  //  case "y":
  //    event.preventDefault();
  //    window.open("https://www.youtube.com");
  //    break;
  //  case "g":
  //    event.preventDefault();
  //    window.open("https://www.github.com");
  //    break;
  //  case "t":
  //    event.preventDefault();
  //    window.open("https://play.typeracer.com");
  //    break;
  //  case "p":
  //    event.preventDefault();
  //    window.open("https://www.phind.com/search?home=true")
  //    break;
  //  case "h" && :
  //    event.preventDefault();
  //    window.open("https://www.phind.com/search?home=true")
  //    break;
  //  default:
  //    lastKey = "h";
  //    break;
  //}

  // Get the current Time
  const currentTime = new Date().getTime();

  // if a key is pressed (the "y" key)
  if (event.key === "y") {
    changeColor(hiCharY);
    if (lastKey === "y" && currentTime - lastKeyTime <= 500) {
      openWebsiteAndResetKey("https://www.youtube.com/");
    }
    else {
      lastKey = "y";
      lastKeyTime = currentTime;
    }
  }
  else if (event.key === "g") {
    changeColor(hiCharG);
    if (lastKey === "g" && currentTime - lastKeyTime <= 500) {
      openWebsiteAndResetKey("https://www.github.com/");
    }
    else {
      lastKey = "g";
      lastKeyTime = currentTime;
    }
  }
  else if (event.key === "o") {
    if (lastKey === "g" && currentTime - lastKeyTime <= 500) {
      changeColor(hiCharO);
      openWebsiteAndResetKey("https://www.google.com/");
    }
    else {
      lastKey = "o";
      lastKeyTime = currentTime;
    }
  }
  else if (event.key === "t") {
    changeColor(hiCharT);
    if (lastKey === "t" && currentTime - lastKeyTime <= 500) {
      openWebsiteAndResetKey("https://play.typeracer.com/");
    }
    else {
      lastKey = "t";
      lastKeyTime = currentTime;
    }
  }
  else if (event.key === "w") {
    changeColor(hiCharW);
    if (lastKey === "w" && currentTime - lastKeyTime <= 500) {
      openWebsiteAndResetKey("https://web.whatsapp.com/");
    }
    else {
      lastKey = "w";
      lastKeyTime = currentTime;
    }
  }
  else if (event.key === "e") {
    if (lastKey === "t" && currentTime - lastKeyTime <= 500) {
      changeColor(hiCharE);
      openWebsiteAndResetKey("https://web.telegram.org/a/");
    }
    else {
      lastKey = "e";
      lastKeyTime = currentTime;
    }
  }
  else {
    lastKey = null;
    lastKeyTime = null;
  }

}

document.addEventListener("keydown", handleShortcut);

function changeColor(element) {
  try {
    for (let item of element) {
      item.style.color = "#708090";
    }
  } catch (Error) {
    throw Error;
  }
  setTimeout(resetColor, 500, element);
}

function resetColor(element) {
  try {
    for (let item of element) {
      item.style.color = "";
    }
  } catch (Error) {
    throw Error;
  }
}

function openWebsiteAndResetKey(url) {
  console.log("Hello");
  event.preventDefault();
  window.open(url);
  lastKey = null;
  lastKeyTime = null;
}

function openUrl(url) {
  event.preventDefault();
  window.open(url);
}
