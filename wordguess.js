"use strict";

const words = ["Love", "Happy", "Angry", "Excited", "Tired"]; // Array of Random Words
var currentWord; // Store current word

// Various elements
var wordDiv = document.getElementById("word");
var inputBox = document.getElementById("letter");
var startButton = document.getElementById("startGame");
var msgBox = document.getElementById("msgBox");

var correctLetters = 0; // Track how many correct letters there are
var num = 0;
var guess_chars = [];


function startGame() {
  inputBox.style.display = "block"; // Show Inputbox
  wordDiv.innerHTML = ""; // Clear the word
  msgBox.innerHTML = ""; // Clear the message box
  inputBox.disabled = false; // Enable inputbox
  inputBox.focus(); // Focus input box
  currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Set current word to guess
  correctLetters = 0; // Reset correctLetters

  // Create elements for each letter and placing a * in it
  for (let i = 0; i < currentWord.length; i++) {
    var letterDiv = document.createElement("div");
    var starDiv = document.createElement("div");
    var lineDiv = document.createElement("div");
    letterDiv.className = "wordBox";
    starDiv.className = "wordBox-letter";
    starDiv.innerText = "*";
    lineDiv.className = "wordBox-line";
    letterDiv.appendChild(starDiv);
    letterDiv.appendChild(lineDiv);
    wordDiv.appendChild(letterDiv);
    wordDiv.appendChild(letterDiv);
  }
  // console.log(currentWord);

  //getvalue();
}

function getvalue() {
  const val = inputBox.value.toUpperCase();
  inputBox.innerText = val;

  setTimeout(function () {
    inputBox.value = ""
  }, 300)

  var indexes = [];
  for (let index = 0; index < currentWord.length; index++) {
    if (currentWord[index] === val && !guess_chars.includes(val)) {
      indexes.push(index);
      num++;
    }
  }

  indexes.forEach(function (item) {
    document.querySelectorAll('.wordBox-letter')[item].innerText = val;
  })

  if (num === currentWord.length) {
    inputBox.disabled = true;
    console.log("You guessed Correctly")
    guess_chars = [];
    num = 0;
    msgBox.innerText = "You guessed the word " + currentWord + " correctly!";
  } else {
    guess_chars.push(val);

  }

  // console.log("Guess chars: " + guess_chars);
  // console.log("Num is ", num)
}


startButton.addEventListener("click", startGame); // Starting game by clicking the start button
inputBox.addEventListener("input", getvalue);

