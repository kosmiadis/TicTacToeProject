const Player = (name, symbol) => {
    const playerName = name
   
    const placeSymbol = (box) => {
        box.textContent = symbol
    }
    return {playerName,placeSymbol ,symbol}
}

