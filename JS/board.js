const GameBoard = (() => {
    const gameBoard = [
        [],[],[],
        [],[],[],
        [],[],[]
    ]

    const updateGameBoard = (board) => {
        for (let i=0; i<=board.length; i++) {
            for (let j=0; j<=gameBoard[i].length; j++) {
                gameBoard[i][j] = board[i].textContent
            }
        }
    }

    const clearBoard = () => {
        console.log(gameBoard)
        gameBoard.forEach(row => row.forEach(box => box = null))
        console.log(gameBoard)
    }
    
    const checkForWin = () => {
    
    }


    return {
        clearBoard,
        updateGameBoard
    }
})()
