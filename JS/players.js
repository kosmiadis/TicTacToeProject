const Player = (name, symbol) => {
    const placeSymbol = (box) => {
        box.textContent = symbol
    }
    return {name,placeSymbol ,symbol}
}



