class Board {
    constructor() {
        this.board = null;
        this.removedFrogs = {"red": null, "blue": null, "yellow": null, "brown": null};
        this.playerArray = [];
        this.currentPlayer = null;

        $('.frog').click( this.handleCellClick );
    }

    intializeBoard() {
        //populates board
        //returns nothing
        var imageArray = ['yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown', 'brown'];
        for (var images = 0; images < 34; images++) {
            imageIndex = Math.floor(Math.random() * imageArray.length)
            var image = imageArray[imageIndex];
            imageArray.splice(imageIndex, 1)
            var card = $('<div>', { 'class': 'card' });
            var front = $('<div>', { 'class': image });
            var back = $('<div>', { 'class': 'lfz' });
            card.append(front);
            card.append(back);
            $("#container").append(card);
        }

    }
    
    addPlayer() {
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