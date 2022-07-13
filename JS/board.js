const GameBoard = (() => {
    
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
                console.log(e.target.innerHTML)
                e.target.textContent = currentPlayer.symbol
                game.changePlayerOrder(player1, player2)
                GameBoard.updateGameBoard()
            }
        }
        
    }

    const updateGameBoard = () => {  
        for (let i=0; i<=gameBoard.length; i++) {
            if (htmlBoard.children[i] == undefined) {
            }
            else {
                gameBoard[i] = new Set(htmlBoard.children[i].textContent)
            }
        }
    }

    const clearBoard = () => {
        gameBoard.forEach(box => box.splice(0))
        updateGameBoard(htmlBoard)
    }
    
    const checkForWin = (currentPlayer) => {

        if (gameBoard[0] == currentPlayer.symbol & gameBoard[1] == currentPlayer.symbol & gameBoard[2] == currentPlayer.symbol) {

        }
        if (gameBoard[3] == currentPlayer.symbol & gameBoard[4] == currentPlayer.symbol & gameBoard[5] == currentPlayer.symbol) {
            
        }  
        if (gameBoard[6] == currentPlayer.symbol & gameBoard[7] == currentPlayer.symbol & gameBoard[8] == currentPlayer.symbol) {
            
        } 

        if (gameBoard[0] == currentPlayer.symbol & gameBoard[3] == currentPlayer.symbol & gameBoard[6] == currentPlayer.symbol) {
            
        } 
        if (gameBoard[1] == currentPlayer.symbol & gameBoard[4] == currentPlayer.symbol & gameBoard[7] == currentPlayer.symbol) {
            
        } 
        if (gameBoard[2] == currentPlayer.symbol & gameBoard[5] == currentPlayer.symbol & gameBoard[8] == currentPlayer.symbol) {
            
        }    
    }

    return {clearBoard,updateGameBoard,createBoxes,checkForWin}
})();


