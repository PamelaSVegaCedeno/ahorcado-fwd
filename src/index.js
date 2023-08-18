import { BodyParts } from "./bodyparts.js";
import { HangmanGame } from "./hangmangame.js";
import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { Result } from "./result.js";

const hangmanGame = new HangmanGame();
const keyboard = new Keyboard(hangmanGame);
const panel = new Panel();
const bodyParts = new BodyParts();
const loadingOverlay = document.getElementById('loading');
const container = document.getElementById('container');


async function initializeGame() {
  showLoading();
  await hangmanGame.startGame();
  var status = hangmanGame.getWordStatus();
  keyboard.createKeyboard();
  updatePanel(status);
  
  // Agrega event listeners para el teclado (usando el método createKeyboard de Keyboard)
const letterButtons = document.querySelectorAll(".letter-button");
letterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleLetterClick(button);
  });
});
 setTimeout(hideLoading, 3000);
}



function updatePanel(status) {
  panel.updateDisplay(status);
}

function handleLetterClick(button) {
  const letter = button.getAttribute("data-letter");
  const isLetterCorrect = hangmanGame.checkLetter(letter);
  changeLetterColor(isLetterCorrect,letter);
  const newStatus = hangmanGame.getWordStatus();
  updatePanel(newStatus);
  if (!isLetterCorrect){
    printHangmanBody()
  }
  checkIfPlayerWon();
}

function changeLetterColor(isLetterCorrect, letter) {
  if (isLetterCorrect) {
    keyboard.showCorrectFeedback(letter);
  } else {
    keyboard.showIncorrectFeedback(letter);
  }
}

function checkIfPlayerWon () {
    console.log("Ganó? "+hangmanGame.checkIfPlayerWon());
    if (hangmanGame.checkIfPlayerWon()) {
        const result = new Result ();
        result.showResult(true, hangmanGame.wordToGuess );
      } else if (hangmanGame.checkIfPlayerLost()) {
        const result = new Result ();
        result.showResult(false, hangmanGame.wordToGuess );
      }
}

function printHangmanBody(){
    const attempts = hangmanGame.getAttempts();
    bodyParts.setProgressiveHangmanImage(attempts);
}

function showLoading() {
  container.classList.add('container-hidden'); 
}

function hideLoading() {
  loadingOverlay.style.display = 'none'; 
  container.classList.remove('container-hidden'); 
}

initializeGame()