const player1 = Player('Player1', 'X')
const player2 = Player('Player2', 'O')  
var currentPlayer = player1
const htmlBoard = document.querySelector('.board')
const currentPlayerSpan = document.querySelector('#curr-player')

const Game = () => {
    

    const initializeGame = () => {
        GameBoard.createBoxes ()
        GameBoard.updateGameBoard()
    }    

    const changePlayerOrder = (player1, player2) => {

        if (currentPlayer == player1) {
            currentPlayer = player2
        }
        else if (currentPlayer == player2) {
            currentPlayer = player1
        }
        currentPlayerSpan.textContent = currentPlayer.symbol
        
    }

    const returnCurrentPlayer = () => {
        return currentPlayer
    }

    return {changePlayerOrder, returnCurrentPlayer, initializeGame}
}

const game = Game()
game.initializeGame()

