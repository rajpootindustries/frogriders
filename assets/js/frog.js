class Frog {
    constructor(color, domElement) {
        this.color = color;
        this.position = null;
        this.x = null;
        this.y = null;
        this.domElement = $(domElement);
        this.handleClick = this.handleClick.bind(this);
        $('.tile').on('click', '.frog', this.handleClick );
    }
    getColor(){
        return this.color;
    }
    setPosition(x, y){
        this.x = x;
        this.y = y;
    }
    getPosition(){
        return {x: this.x, y: this.y};
    }
    handleClick(){
        console.log(this)
        
    }
}