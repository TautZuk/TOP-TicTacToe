const boardSize = 9
const boardContainer = document.querySelector("#boardContainer")
for (let i = 0; i < boardSize; i++) {
    const boardTile = document.createElement("div")
    boardTile.classList.add("boardTile")
    boardTile.setAttribute("id", i)
    boardContainer.appendChild(boardTile);
}

const gameBoard = (() => {
    const gameArray = []
    return {gameArray}
})();

const Player = (name, marker) => {
    return {name, marker};
};

const player1 = Player("First", "X");
const player2 = Player("Second", "O");

const displayController = (() => {
    for (let i = 0; i < gameBoard.gameArray.length; i++) {
        document.querySelectorAll(".boardTile")[i].textContent = gameBoard.gameArray[i]
    }
})();

