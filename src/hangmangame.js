import { PokemonAPI } from "./api/pokemon-api.js";

class HangmanGame {
  constructor() {
    /*this.phrases = [
      "javascript",
      "programming",
      "hangman",
      // Add more words or phrases here
    ];*/
    this.attempts = 7;
    this.wordToGuess = "";
    this.displayedWord = [];
    this.guessedLetters = []; //Save letters already selected
    this.pokemonAPI = new PokemonAPI();
  }

  // Method to start the game
  async startGame() {
    this.wordToGuess = await this.getRandomPhrase();
    this.displayedWord = this.initializeDisplayedWord();
    this.guessedLetters = [];
    this.attempts = 7;
  }

  // Method to get a random phrase from the phrases array
  getRandomPhrase() {
    return this.pokemonAPI.getRandomPokemon()
      .then((data) => {
        if (data) {
          console.log("Random Pokemon:", data.name);
          //console.log('Image URL:', data.sprites.front_default);
          return data.name;
        } else {
          console.log("Failed to fetch random Pokemon.");
          return "";
        }
      });
    /* const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];*/
  }

  // Method to initialize the displayed word with underscores
  initializeDisplayedWord() {
    return this.wordToGuess.split("").map(() => "_");
  }

  // Method to check if the letter has already been guessed
  isLetterGuessed(letter) {
    return this.guessedLetters.includes(letter);
  }

  // Method to check the guessed letter against the word
  checkLetter(letter) {
    console.log("Letra" + letter + " " + this.wordToGuess);
    this.guessedLetters.push(letter);
    if (this.wordToGuess.includes(letter)) {
      this.setWordStatus(letter);
      return true;
    } else {
      this.attempts--;
      return false;
    }
  }

  setWordStatus(letter) {
    for (let i = 0; i < this.wordToGuess.length; i++) {
      if (this.wordToGuess[i] === letter) {
        this.displayedWord[i] = letter;
      }
    }
  }

  // Method to get the current state of the word with guessed letters and underscores
  getWordStatus() {
    return this.displayedWord.join(" ");
  }

  // Method to check if the player has won
  checkIfPlayerWon() {
    return !this.displayedWord.includes("_");
  }

  // Method to check if the player has lost
  checkIfPlayerLost() {
    return this.attempts === 0;
  }

  getAttempts() {
    return this.attempts;
  }
}
export { HangmanGame };
