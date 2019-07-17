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
                
                this.board[row][col] = new Frog(colors[colorIndex], tile);
                $('.gameBoard').append(tile);
            }
        }
    }

        // this.handleCellClick = this.handleCellClick.bind();
        this.handleCellClick = this.handleCellClick.bind(this)
        $('.tile').on('click', '.leaf', this.handleCellClick );

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

            console.log(this);
    }

    findValidMoves(frog) {
        //returns array of valid objects
            //checks in all directions using checkInDirection to find valid moves;
    }

    checkInDirection() {
        //used by find valid moves for the current player
            //up
            //down
            //left
            //right
        //returns:
    }
}
