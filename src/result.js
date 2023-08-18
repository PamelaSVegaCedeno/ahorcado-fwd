class Result {
    constructor() {
      this.resultContainer = document.getElementById('result');
      this.winMessage = "¡Felicidades! Ganaste con la palabra:";
      this.loseMessage = "¡Perdiste! La palabra era:";
      this.playAgainMessage = "JUGAR DE NUEVO";
    }
  
    showResult(isWin, word) {
      if (isWin) {
        this.resultContainer.innerHTML = `${this.winMessage} ${word}<br /><br /><span class="reset" onclick="window.location.reload(true);">${this.playAgainMessage}</span>`;
      } else {
        this.resultContainer.innerHTML = `${this.loseMessage} ${word}<br /><br /><span class="reset" onclick="window.location.reload(true);">${this.playAgainMessage}</span>`;
      }
    }
  }
  
  export { Result };
  