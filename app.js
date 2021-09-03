const Player = (name, marker) => {
    return {name, marker};
};

const displayController = (() => {
    const button = document.querySelector("button");

    
    button.addEventListener("click", () => {
        let playerOneName = document.querySelector("#playerOneName").value;
        let playerTwoName = document.querySelector("#playerTwoName").value;
        if (playerOneName == "") {
            playerOneName = "X"
        }
        if (playerTwoName == "") {
            playerTwoName = "O"
        }
        player1 = Player(playerOneName, "X");
        player2 = Player(playerTwoName, "O");
        document.querySelector("#results").textContent = "";
        document.querySelectorAll(".boardTile").forEach(tile => {
            tile.textContent = ""
        });
        gameBoard.gameArray = ["", "", "", "", "", "", "", "", ""]
    if (player1.name != "" || player2.name != "") {
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
                if (turn == "first" && tile.textContent=="" && document.querySelector("#results").textContent == "") {
                    gameBoard.gameArray.splice(tile.id, 1, 1)
                    document.querySelectorAll(".boardTile")[tile.id].textContent = player1.marker
                    turn = "second";
                    gameBoard.whoIsWinner();
                    
                } else if (turn == "second" && tile.textContent=="" && document.querySelector("#results").textContent == "") {
                    gameBoard.gameArray.splice(tile.id, 1, -1)
                    document.querySelectorAll(".boardTile")[tile.id].textContent = player2.marker
                    turn = "first";
                    gameBoard.whoIsWinner();
                }
            })
        })
    }
})

 
})();

const gameBoard = (() => {
    const gameArray = ["", "", "", "", "", "", "","",""]
    // X = 1 ; O = -1. this function checks if any row in the game array has a sum of 3 or -3 and declares a winner
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
        if (gameBoard.gameArray.includes("") == false) {
            document.querySelector("#results").textContent = "It's a tie!"
        }
    };
    return {gameArray, whoIsWinner}
})();