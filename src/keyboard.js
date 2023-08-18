class Keyboard {
    constructor() {
      this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      this.alphabetContainer = document.getElementById('alphabet');
    }
  
    // Method to create the keyboard with letters and attach event listeners
    createKeyboard() {
      this.alphabet.forEach((letter) => {
        const letterButton = document.createElement("button");
        letterButton.textContent = letter.toUpperCase();
        letterButton.classList.add("letter-button");
        letterButton.setAttribute("data-letter", letter);
         this.alphabetContainer.appendChild(letterButton);
      });
    }

    // Method to apply the "correct" visual feedback to the letter button
    showCorrectFeedback(letter) {
      const letterButton = this.getLetterButton(letter);
      letterButton.classList.add("correct");
    }
  
    // Method to apply the "incorrect" visual feedback to the letter button
    showIncorrectFeedback(letter) {
      const letterButton = this.getLetterButton(letter);
      letterButton.classList.add("incorrect");
    }
  
    // Helper method to find the letter button based on the letter
    getLetterButton(letter) {
      return this.alphabetContainer.querySelector(`.letter-button[data-letter="${letter}"]`);
    }
  }
  export {Keyboard}



/*class Keyboard {
    constructor(hangmanGame) {
      this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      this.hangmanGame = hangmanGame;
      this.alphabetContainer = document.getElementById('alphabet');
    }
  
    // Method to create the keyboard with letters and attach event listeners
    createKeyboard() {
      this.alphabet.forEach((letter) => {
        const letterButton = document.createElement("button");
        letterButton.textContent = letter.toUpperCase();
        letterButton.classList.add("letter-button");
        letterButton.setAttribute("data-letter", letter);
        letterButton.addEventListener("click", () => this.handleLetterClick(letter));
        this.alphabetContainer.appendChild(letterButton);
      });
    }
  
    // Method to handle letter button click and communicate with HangmanGame
    handleLetterClick(letter) {
      if (!this.hangmanGame.isLetterGuessed(letter)) {
        if (this.hangmanGame.checkIfPlayerWon()) {
          console.log("¡Ganaste! Has adivinado la palabra.");
        } else if (this.hangmanGame.checkIfPlayerLost()) {
          console.log(`¡Perdiste! La palabra era "${this.hangmanGame.wordToGuess}".`);
        } else {
          if (this.hangmanGame.checkLetter(letter)) {
            this.showCorrectFeedback(letter);
          } else {
            this.showIncorrectFeedback(letter);
          }
        }
      }
    }
  
    // Method to apply the "correct" visual feedback to the letter button
    showCorrectFeedback(letter) {
      const letterButton = this.getLetterButton(letter);
      letterButton.classList.add("correct");
    }
  
    // Method to apply the "incorrect" visual feedback to the letter button
    showIncorrectFeedback(letter) {
      const letterButton = this.getLetterButton(letter);
      letterButton.classList.add("incorrect");
    }
  
    // Helper method to find the letter button based on the letter
    getLetterButton(letter) {
      return this.alphabetContainer.querySelector(`.letter-button[data-letter="${letter}"]`);
    }
  }
  export {Keyboard}
  
 */
  