$(document).ready( initializeApp );

function initializeApp() {
    
    var gameBoard = new Board();
    gameBoard.addPlayer('Warren');
    gameBoard.addPlayer('Elon');

    gameBoard.intializeBoard();
    
    let modal = new Modal('#modalShadow', "#modalBody", "#modalMessage", "#modalButton" );
    modal.updateMessage("Player One Dominates!");
    modal.init();

}
