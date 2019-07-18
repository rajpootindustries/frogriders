$(document).ready( initializeApp );

function initializeApp() {
    // debugger;
    var gameBoard = new Board();
    gameBoard.addPlayer('Warren');
    gameBoard.addPlayer('Elon');

    gameBoard.intializeBoard();

}
