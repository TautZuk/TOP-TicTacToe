const Player = (name, marker) => {
    return {name, marker};
};

const player1 = Player("First", "X");
const player2 = Player("Second", "O");

const gameBoard = (() => {
    const gameArray = ["","","","","","","","",""]
    return {gameArray}
})();

const displayController = (() => {
    const boardSize = 9
    let turn = "first"
    const boardContainer = document.querySelector("#boardContainer")
    for (let i = 0; i < boardSize; i++) {
        const boardTile = document.createElement("div")
        boardTile.classList.add("boardTile")
        boardTile.setAttribute("id", i)
        boardContainer.appendChild(boardTile);
    }
    document.querySelectorAll(".boardTile").forEach(tile => {
        tile.addEventListener("click", () => {
            if (turn == "first" && tile.textContent==""){
            gameBoard.gameArray.splice(tile.id, 1, player1.marker)
            document.querySelectorAll(".boardTile")[tile.id].textContent = gameBoard.gameArray[tile.id]
            turn = "second";
            } else if (turn == "second" && tile.textContent=="") {
            gameBoard.gameArray.splice(tile.id, 1, player2.marker)
            document.querySelectorAll(".boardTile")[tile.id].textContent = gameBoard.gameArray[tile.id]
            turn = "first";
            }
        })
    })
})();