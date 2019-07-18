class Board {
    constructor() {
        this.board = [];
        this.rows = 9;
        this.columns = 9;
        this.removedFrogs = {"red": null, "blue": null, "yellow": null, "brown": null};
        this.playerArray = [];
        this.currentPlayer = null;
        this.possibleActions = [];
    }

    intializeBoard() {
        //clear old board
        $('.gameBoard').empty()

        //populates board by creating a 2d array representind the board on the DOM
        for(var col = 0; col < this.columns; col++) {
            this.board.push(new Array(this.row))
        }

        // var tileContainer = $('<div>').addClass('tileContainer')
        var colors = ['red', 'blue', 'yellow', 'brown'];
        for(var row = 0; row < this.rows; row++) {
            for(var col = 0; col < this.columns; col++) {
                var indexes = { 'data-row': row, 'data-col': col };
                var tile = $('<div>').addClass('tile').attr(indexes);
                var leaf = $('<div>').addClass('leaf');
                if(row === 4 && col === 4){
                    leaf.css('background-color', 'orange');
                    tile.append(leaf);
                    this.board[row][col] = null;
                } else{
                    var colorIndex = Math.floor(Math.random() * 4);
                    var frog = $('<div>').addClass('frog').addClass(colors[colorIndex]);

                    tile.append(leaf);
                    tile.append(frog);
                    
                    var newFrog = new Frog(colors[colorIndex], tile)
                    newFrog.setPosition(row, col);
                    this.board[row][col] = newFrog;
                    
                }
                $('.gameBoard').append(tile);

            }

        }
        
        this.handleCellClick = this.handleCellClick.bind(this);        
        $('.tile').on('click', '.leaf', this.handleCellClick);
        $('.tile').on('click', '.frog', this.handleCellClick);
        
        
    }


    addPlayer(player) {
        this.playerArray.push(new Player(player));
        //adds player to the beginning of game
        //change the names of the players
        //returns nothing

    }

    alternatePlayer() {
        //gets the next player and sets it as current player
        //returns nothing

    }

    handleCellClick() {
        var tile = event.currentTarget
        var col = $(tile).attr('data-col');
        var row = $(tile).attr('data-row');

        var clickedFrog = this.board[row][col];
        if (this.board[row][col].color !== null) {
            //check valid moves
            this.findValidMoves(clickedFrog);
        }
    }

    findValidMoves(frog) {
        let currentPosition = frog.getPosition(); // {x: this.x, y: this.y}; {x: 1, y: 1}
        
        
            
        var up = this.checkInDirection(currentPosition.row, currentPosition.col, "up"); // {row: 1, col:2}
        var down = this.checkInDirection(currentPosition.row, currentPosition.col, "down"); // {row:1, col:0}
        var left = this.checkInDirection(currentPosition.row, currentPosition.col, "left"); // {row:-1, col:0}
        var right = this.checkInDirection(currentPosition.row, currentPosition.col, "right");

        var directions = [up, down, left, right];
        var stringDir = ["up", "down", "left", "right"];
        for(var i = 0; i < directions.length; i++) {
            if(this.isInbound(directions[i].row, directions[i].col) && this.isFrog(this.board[directions[i].row][directions[i].col])) {  
                directions[i] = this.checkInDirection(directions[i].row, directions[i].col, stringDir[i]);
                if(this.isInbound(directions[i].row, directions[i].col) && this.board[directions[i].row][directions[i].col] === null) {
                    this.possibleActions.push([directions[i].row, directions[i].col]);
                }
            }
        }
        
        console.log(this.possibleActions);

        // if relative direction.x < 0 || relativeDirection.x > 9 || relativeDirection.y < 0 || relativeDirection.y > 9 { relativeDirection = false;} 
        // if relativeDirection is undefined (empty tile) => false
        // if relativeDirection of frog at relativePosition is another frog => false
    }
    checkInDirection(row, col, direction) {
        //used by find valid moves for the current player
        const up = {row: 0, col: 1};
        const down = {row: 0, col: -1};
        const left = {row: -1, col: 0};
        const right = {row: 1, col:0};

        if(direction === 'up') {
            return {row: row + up.row, col: col + up.col};
        }
        else if(direction === 'down') {
            return {row: row + down.row, col: col + down.col};
        }
        else if(direction === 'left') {
            return {row: row + left.row, col: col + left.col};
        }
        else if(direction === 'right'){
            return {row: row + right.row, col: col + right.col};
        }
        
    }


    
    isInbound(row, col) {
        return (row < this.rows && row >= 0  && col >= 0 && col < this.columns) 
    }

    isFrog(frog) {
        if(frog && frog.constructor === Frog){
            return true;
        }
        else {
            return false;
        }
    }
    
}
