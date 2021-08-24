const gameBoard = (() => {
    const gameArray = ["O","O","X","X","O","O","X","O","X"]
    return {gameArray}
}) ();

const Player = (name, marker) => {
    return {name, marker};
};

const player1 = Player("First", "X");
const player2 = Player("Second", "O");

