class BodyParts{
    constructor() {
        this.images = [
            '../assets/images/7.png',
            '../assets/images/6.png',
            '../assets/images/5.png',
            '../assets/images/4.png',
            '../assets/images/3.png',
            '../assets/images/2.png',
            '../assets/images/1.png',
          ];
          this.progressiveHangman = document.getElementById('progressiveHangman');
    }

    setProgressiveHangmanImage(attempts) {
        console.log(attempts);
        this.progressiveHangman.src = this.images[attempts];
    }
} export{BodyParts}