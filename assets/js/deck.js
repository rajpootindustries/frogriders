class Deck {
    constructor() {
        this.stack = [];
    }

    shuffle() {
        for (var i = 0; i < this.stack.length - 1; i++) {
            var randIndex = Math.floor(Math.random() * (this.stack.length - i));
            var temp = this.stack[randIndex];
            this.stack[randIndex] = this.stack[i];
            this.stack[i] = temp;
        }
    }
}