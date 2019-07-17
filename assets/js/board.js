class Board {
    constructor() {
        this.board = [];
        this.rows = 9;
        this.columns = 9;
        this.removedFrogs = {"red": null, "blue": null, "yellow": null, "brown": null};
        this.playerArray = [];
        this.currentPlayer = null;
        this.tile = null;

        
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
                var indexes = {'data-row': row, 'data-col': col};
                var tile = $('<div>').addClass('tile');
                var leaf = $('<div>').addClass('leaf').attr(indexes);
                var colorIndex = Math.floor(Math.random() * 4);
                var frog = $('<div>').addClass('frog').addClass(colors[colorIndex]).attr(indexes);

                tile.append(leaf);
                tile.append(frog);
                
                this.board[row][col] = new Frog(colors[colorIndex], tile);
                
                $('.gameBoard').append(tile);
            }
        }
        var board = this.board;
        $('.tile').on('click', '.leaf', board, this.handleCellClick);
        $('.tile').on('click', '.frog', board, this.handleCellClick);
        console.log(this.board)

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

    handleCellClick(board) {
        console.log(this);
        var col = $(this).attr('data-col');
        var row = $(this).attr('data-row');
        console.log(col, row)

        // var f = this.board[row][col];
        this.board = board['data'];
        if (this.board[row][col].color !== null) {
            
        }
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
