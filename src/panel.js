class Panel {
    constructor() {
      this.answerContainer = document.getElementById('answer');
    }
  
    // Method to update the displayed word on the HTML page
    updateDisplay(word) { // ----- // -e--o
      this.answerContainer.textContent = word;
    }
  }
  export { Panel };
  