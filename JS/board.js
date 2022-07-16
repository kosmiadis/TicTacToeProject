
const GameBoard = (() => {

    const htmlBoard = document.querySelector('.board')

    const gameBoard = [
        [],[],[],
        [],[],[],
        [],[],[]
    ]

    let emptyBoxes = 9

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
                emptyBoxes--
                
                
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
        let win = false
        if (emptyBoxes > 0) {
            if (gameBoard[0].get('Symbol') == currentPlayer.symbol & gameBoard[1].get('Symbol') == currentPlayer.symbol & gameBoard[2].get('Symbol') == currentPlayer.symbol) {
                currentPlayerP.textContent = currentPlayer.name + ' Won!'
                console.log(htmlBoard[0],htmlBoard[1],htmlBoard[2])
                htmlBoard[0].style.color = 'green'
                htmlBoard[1].style.color = 'green'
                htmlBoard[2].style.color = 'green'
                
                game.reinitializeGame()  
                win = true
            }
            else if (gameBoard[3].get('Symbol') == currentPlayer.symbol & gameBoard[4].get('Symbol') == currentPlayer.symbol & gameBoard[5].get('Symbol') == currentPlayer.symbol) {
                currentPlayerP.textContent = currentPlayer.name + ' Won!'
                htmlBoard[3].style.color = 'green'
                htmlBoard[4].style.color = 'green'
                htmlBoard[5].style.color = 'green'
                game.reinitializeGame() 
                win = true
            }  
            else if (gameBoard[6].get('Symbol') == currentPlayer.symbol & gameBoard[7].get('Symbol') == currentPlayer.symbol & gameBoard[8].get('Symbol') == currentPlayer.symbol) {
                currentPlayerP.textContent = currentPlayer.name + ' Won!'
                htmlBoard[6].style.color = 'green'
                htmlBoard[7].style.color = 'green'
                htmlBoard[8].style.color = 'green'
                game.reinitializeGame() 
                win = true
            } 
            else if (gameBoard[0].get('Symbol') == currentPlayer.symbol & gameBoard[3].get('Symbol') == currentPlayer.symbol & gameBoard[6].get('Symbol') == currentPlayer.symbol) {
                currentPlayerP.textContent = currentPlayer.name + ' Won!'
                htmlBoard[0].style.color = 'green'
                htmlBoard[3].style.color = 'green'
                htmlBoard[6].style.color = 'green'
                game.reinitializeGame()
                win = true 
            } 
            else if (gameBoard[1].get('Symbol') == currentPlayer.symbol & gameBoard[4].get('Symbol') == currentPlayer.symbol & gameBoard[7].get('Symbol') == currentPlayer.symbol) {
                currentPlayerP.textContent = currentPlayer.name + ' Won!'
                htmlBoard[1].style.color = 'green'
                htmlBoard[4].style.color = 'green'
                htmlBoard[7].style.color = 'green'
                game.reinitializeGame()
                win = true 
            } 
            else if (gameBoard[2].get('Symbol') == currentPlayer.symbol & gameBoard[5].get('Symbol') == currentPlayer.symbol & gameBoard[8].get('Symbol') == currentPlayer.symbol) {
                currentPlayerP.textContent = currentPlayer.name + ' Won!'
                htmlBoard[2].style.color = 'green'
                htmlBoard[5].style.color = 'green'
                htmlBoard[8].style.color = 'green'
                game.reinitializeGame()
                win = true 
            }
        } 
        else if (emptyBoxes == 0 && win==false) {
            
            gameBoard.clearBoard()
        }
    }
    return {clearBoard,updateGameBoard,createBoxes,checkForWin}
})();


