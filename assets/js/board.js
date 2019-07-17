class Board {
    constructor() {
        this.board = null;
        this.removedFrogs = {"red": null, "blue": null, "yellow": null, "brown": null};
        this.playerArray = [];
        this.currentPlayer = null;

        $('.frog').click( this.handleCellClick );
    }

    intializeBoard() {
        //clear old board
        $('.gameBoard').empty()
        //populates board by creating a 2d array representind the board on the DOM
        
        // var tileContainer = $('<div>').addClass('tileContainer')
        
        for(var row = 0; row < 9; row++) {
            for(var col = 0; col < 9; col++) {
                var tile = $('<div>').addClass('tile');
                var leaf = $('<div>').addClass('leaf');
                var frog = $('<div>').addClass('frog');
                var indexes = {'data-row': row, 'data-col': col};
                tile.append(leaf.attr(indexes));
                tile.append(frog.attr(indexes));
                $('.gameBoard').append(tile);
            }
        }

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