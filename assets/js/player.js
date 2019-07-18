class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.frogBag = {}; // stores number of frogs belonging to player {'red': 4, 'blue': 3}
    }
    setScore(score){
        this.score += score;
    }
    getScore(){
        return this.score;
    }
    calculateScore(){ // simplified rules
        return Object.values(this.frogBag).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    setfrogBag(color){
        if(color === 'red'){
            this.frogBag.red += 1;
        }
        else if(color === 'brown'){
            this.frogBag.brown += 1;
        }
        else if(color === 'yellow'){
            this.frogBag.yellow += 1;
        }
        else if (color === 'blue'){
            this.frogBag.blue += 1;
        }
        else{
            console.log("error: incorrect color specified");
        }
    }
    getfrogBag(){
        return this.frogBag;
    }

}
