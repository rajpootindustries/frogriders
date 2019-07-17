class Board {
    constructor() {
        this.board = [];
        this.rows = 9;
        this.columns = 9;
        this.removedFrogs = {"red": null, "blue": null, "yellow": null, "brown": null};
        this.playerArray = [];
        this.currentPlayer = null;

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
                if(row === 4 && col === 4){
                    var tile = $('<div>').addClass('tile');
                    var leaf = $('<div>').addClass('leaf');
                    leaf.css('background-color', 'orange');
                    var indexes = { 'data-row': row, 'data-col': col };
                    tile.append(leaf.attr(indexes));
                    $('.gameBoard').append(tile);
                } else{
                var tile = $('<div>').addClass('tile');
                var leaf = $('<div>').addClass('leaf');
                var colorIndex = Math.floor(Math.random() * 4);
                var frog = $('<div>').addClass('frog').addClass(colors[colorIndex]);
                var indexes = {'data-row': row, 'data-col': col};

                tile.append(leaf.attr(indexes));
                tile.append(frog.attr(indexes));
                
                this.board[row][col] = new Frog(colors[colorIndex], tile).setPosition(col, row);
                console.log(this.board[row][col] = new Frog(colors[colorIndex], tile).setPosition(col, row));
                $('.gameBoard').append(tile);
            }
        }
    }

        this.handleCellClick = this.handleCellClick.bind(this)
        $('.tile').on('click', '.leaf', this.handleCellClick );
        $('.tile').on('click', '.frog', this.handleCellClick );


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

        //create click handlers valid tiles
        //removes all previous click handlers
        //gets clickedElement and generates click handler for valid tiles
        //calls findValidMoves and gets array of valid objects
        var tile = event.currentTarget
        var col = $(tile).attr('data-col');
        var row = $(tile).attr('data-row');

        var clickedFrog = this.board[row][col];
        if (this.board[row][col].color !== null) {
            //check valid moves
            findValidMoves(clickedFrog);
        }
    }

    findValidMoves(frog) {
        let currentPosition = frog.getPosition(); // {x: this.x, y: this.y};
        for(let dir of this.checkInDirection()){
            var relativeUp = {x: currentPosition.x + dir.x, y: currentPosition.y + dir.y};
            var relativeDown = {x: currentPosition.x + dir.x, y: currentPosition.y + dir.y};
            var relativeLeft = {x: currentPosition.x + dir.x, y: currentPosition.y + dir.y};
            var relativeRight = {x: currentPosition.x + dir.x, y: currentPosition.y + dir.y};
        }
    }



    checkInDirection() {
        //used by find valid moves for the current player
            const up = {x: 0, y: 1}
            const down = {x: 0, y: -1}
            const left = {x: -1, y: 0}
            const right = {x: 1, y:0}
        return [up, down, left, right];
    }
}
