class Village {
    constructor() {
        this.frogs = [];
        this.availableCards = [];

    }

    getFrogs() {
        return this.frogs;
    }

    setFrog(player, frog) {
        //if red, roll again
        if(frog.color === "red") {
            this.redFrogAction();
        }
        //if blue get cards
        else if(frog.color === "blue"){
            this.blueFrogAction();
        }
        //if yellow trade frogs
        else if(frog.color === "yellow"){
            this.yellowFrogAction();
        }
        else if(frog.color === "brown") {
            //if brown, send error
            this.brownFrogAction();
        }
        else {
            console.log("Village: not a frog");
            return null;
        }
    }

    redFrogAction() {
        //roll again
        return "go back a player";
    }

    blueFrogAction() {
        //get cards
        //have player choose card, click handler on card
        
        this.chooseCard();
    }

    yellowFrogAction() {

    }

    brownFrogAction() {

    }

    chooseCard() {
        return card;
    }
}