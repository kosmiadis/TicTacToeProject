
const GameBoard = (() => {

    const htmlBoard = document.querySelector('.board')
    const gameBoard = [
        [],[],[],
        [],[],[],
        [],[],[]
    ]

    const createBoxes = () => {
        let box
        for (let j=1; j<=gameBoard.length; j++) {
            box = document.createElement('div')
            box.classList.add('box')
            box.classList.add('box' + j)
            box.addEventListener('click', e => {
                addEventToBox(e)
            })
            htmlBoard.appendChild(box)
        }
        
        const addEventToBox = (e) => {
            if (e.target.innerText == '') {
                currentPlayer.placeSymbol(e.target)
                GameBoard.updateGameBoard()
                checkForWin(currentPlayer)
                game.changePlayerOrder(player1, player2)
                console.log(gameBoard)
                
                
            }
        }
        
    }

    const updateGameBoard = () => {  
        for (let i=0; i<=gameBoard.length; i++) {
            if (htmlBoard.children[i] == undefined) {
            }
            else {
                gameBoard[i] = new Map()
                gameBoard[i].set('Symbol', htmlBoard.children[i].textContent)
            }
        }
    }

    const clearBoard = () => {
        gameBoard.forEach(box => box.delete('Symbol'))
        updateGameBoard(htmlBoard)
        for (let i=0; i<=htmlBoard.length; i++) {
            if (htmlBoard[i] == undefined) {

            }
            else {
                htmlBoard[i].textContent = gameBoard[i]
            }
        }
    }
    
    const checkForWin = (currentPlayer) => {
        
        if (gameBoard[0]['Symbol'] == currentPlayer.symbol & gameBoard[1]['Symbol'] == currentPlayer.symbol & gameBoard[2]['Symbol'] == currentPlayer.symbol) {
            currentPlayerP.textContent = currentPlayer.name + 'Won!'
            game.reinitializeGame()  
        }
        else if (gameBoard[3] == currentPlayer.symbol & gameBoard[4] == currentPlayer.symbol & gameBoard[5] == currentPlayer.symbol) {
            currentPlayerP.textContent = currentPlayer.name + 'Won!'
            game.reinitializeGame() 
        }  
        else if (gameBoard[6] == currentPlayer.symbol & gameBoard[7] == currentPlayer.symbol & gameBoard[8] == currentPlayer.symbol) {
            currentPlayerP.textContent = currentPlayer.name + 'Won!'
            game.reinitializeGame() 
        } 

        else if (gameBoard[0] == currentPlayer.symbol & gameBoard[3] == currentPlayer.symbol & gameBoard[6] == currentPlayer.symbol) {
            currentPlayerP.textContent = currentPlayer.name + 'Won!'
            game.reinitializeGame() 
        } 
        else if (gameBoard[1] == currentPlayer.symbol & gameBoard[4] == currentPlayer.symbol & gameBoard[7] == currentPlayer.symbol) {
            currentPlayerP.textContent = currentPlayer.name + 'Won!'
            game.reinitializeGame() 
        } 
        else if (gameBoard[2] == currentPlayer.symbol & gameBoard[5] == currentPlayer.symbol & gameBoard[8] == currentPlayer.symbol) {
            currentPlayerP.textContent = currentPlayer.name + 'Won!'
            game.reinitializeGame() 
        }    
    }

    return {clearBoard,updateGameBoard,createBoxes,checkForWin}
})();


