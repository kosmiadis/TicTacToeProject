let player1  
let player2 
var currentPlayer
let currentPlayerP

const fillNames = document.querySelector('.names-fill-container')

const Game = () => {
    const playBtn = document.querySelector('#play-btn')

    currentPlayerP = document.querySelector('#curr-player')
    

    const initializeGame = () => {
        currentPlayer = player1
        fillNames.style.opacity = '0'
        setTimeout(function () {
            fillNames.style.visibility = 'none'
            fillNames.style.display = 'none'
        }, 300)
        currentPlayerP.textContent = currentPlayer.name + "'s" + ' turn'
        GameBoard.createBoxes ()
        GameBoard.updateGameBoard()
    }    

    const reinitializeGame = () => {
        currentPlayer = player1
        GameBoard.clearBoard()
        GameBoard.updateGameBoard()    
    }

    const changePlayerOrder = (player1, player2) => {

        if (currentPlayer == player1) {
            currentPlayer = player2
        }
        else if (currentPlayer == player2) {
            currentPlayer = player1
        }
        currentPlayerP.textContent = currentPlayer.name + "'s" + ' turn'
    }

    playBtn.addEventListener('click', e => {
        player1 = Player(document.querySelector('#player1-name').value, 'X')
        player2 =  Player(document.querySelector('#player2-name').value, 'O') 
        currentPlayer = player1
        game.initializeGame()
    
    })

    return {changePlayerOrder, initializeGame}
}

const game = Game()
document.addEventListener('touchmove', function(e) {e.preventDefault()}, false);



