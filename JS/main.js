const player1 = Player('Player1', 'X')
const player2 = Player('Player2', 'O')

const Game = () => {
    
    
    var currentPlayer = player1.playerName
    const board = document.querySelector('.board')
    GameBoard.clearBoard(board)
    GameBoard.updateGameBoard(board)
    const changePlayerOrder = (player1, player2) => {
        if (currentPlayer == player1.playerName) {
            currentPlayer = player2.playerName
        }
        else if (currentPlayer == player2.playerName) {
            currentPlayer = player1.playerName
        }
    }

    const returnCurrentPlayer = () => {
        return currentPlayer
    }

    return {changePlayerOrder, returnCurrentPlayer}
}

