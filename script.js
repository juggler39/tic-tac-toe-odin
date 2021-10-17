const gameboard = (() => {
    const board = ['O', null, 'O', 'X', 'O', 'O', 'O', 'O', 'O']; //Array(9).fill(null);
    let xIsNext = true;
    const move = (cell) => {
        this.history.push(cell);
        xIsNext = !xIsNext;
    };
    const render = () => {
        board.forEach((cell, index) => {
            document.getElementById(index).innerHTML = cell;
        });
    };
    return { move, render };
})();

const Player = (initialName, id) => {
    let name = initialName;
    let score = 0;

    const changeName = (e) => (name = e.target.value);
    document.getElementById(id).addEventListener('input', changeName);

    const addScore = () => score++;
    const getScore = () => score;
    const getName = () => name;

    return { addScore, getScore, getName };
};

//initialization
const player1 = Player('Player 1', 'player1');
const player2 = Player('Player 2', 'player2');

gameboard.render();
