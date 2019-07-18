class Village {
    constructor() {
        this.frogs = [];
    }

    getFrogs() {
        return this.frogs;
    }

    setFrog(frog) {
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
        
    }
}