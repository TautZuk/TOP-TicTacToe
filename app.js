const Player = (name, marker) => {
    return {name, marker};
};

const player1 = Player("First", "X");
const player2 = Player("Second", "O");

const gameBoard = (() => {
    const gameArray = ["", "", "", "", "", "", "","",""]
    let whoIsWinner = function winner() {
        switch(gameBoard.gameArray[0] + gameBoard.gameArray[1] + gameBoard.gameArray[2]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[3] + gameBoard.gameArray[4] + gameBoard.gameArray[5]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[6] + gameBoard.gameArray[7] + gameBoard.gameArray[8]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[0] + gameBoard.gameArray[3] + gameBoard.gameArray[6]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[1] + gameBoard.gameArray[4] + gameBoard.gameArray[7]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[3] + gameBoard.gameArray[5] + gameBoard.gameArray[8]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[0] + gameBoard.gameArray[4] + gameBoard.gameArray[8]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
        switch(gameBoard.gameArray[2] + gameBoard.gameArray[4] + gameBoard.gameArray[6]) {
            case 3:
                document.querySelector("#results").textContent = player1.name + " is a winner";
                break;
            case -3:
                document.querySelector("#results").textContent = player2.name + " is a winner"
                break;
        }
    };
    return {gameArray, whoIsWinner}
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
            gameBoard.gameArray.splice(tile.id, 1, 1)
            document.querySelectorAll(".boardTile")[tile.id].textContent = player1.marker
            turn = "second";
            gameBoard.whoIsWinner();
            } else if (turn == "second" && tile.textContent=="") {
            gameBoard.gameArray.splice(tile.id, 1, -1)
            document.querySelectorAll(".boardTile")[tile.id].textContent = player2.marker
            turn = "first";
            gameBoard.whoIsWinner();
            }
        })
    })
})();

const cleanBoard = (() => {
    gameBoard.gameArray = ["","","","","","","","",""];
    document.querySelector("#results").textContent = "";
})
