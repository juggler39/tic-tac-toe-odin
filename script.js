const gameBoard = (() => {
    const board = ['O', null, 'O', 'X', 'O', 'O', 'O', 'O', 'O'];
    let xIsNext = true;
    const move = (cell) => {
        const mark = xIsNext ? 'X' : 'O';
        board[cell] = mark;
        xIsNext = !xIsNext;
        render();
    };
    const getCell = (id) => {
        return board[id];
    };
    const clearBoard = () => {
        board.fill(null);
        render();
    };
    const render = () => {
        board.forEach((cell, index) => {
            document.getElementById(index).innerHTML = cell;
        });
    };

    return { move, render, clearBoard, getCell };
})();

const Player = (initialName, id, mark) => {
    let name = initialName;
    let score = 0;
    const getMark = () => mark;

    const changeName = (e) => (name = e.target.value);
    document.getElementById(id).addEventListener('input', changeName);

    const addScore = () => score++;
    const getScore = () => score;
    const getName = () => name;

    return { addScore, getScore, getName, getMark };
};

const gameController = (() => {
    const init = () => {
        const player1 = Player('Player 1', 'player1', 'X');
        const player2 = Player('Player 2', 'player2', 'O');
        gameBoard.clearBoard();
        document.querySelectorAll('.js-cell').forEach((cell) => {
            cell.addEventListener('click', handleClick);
        });
        document
            .getElementById('js-start')
            .addEventListener('click', startGame);
    };
    const startGame = () => {
        console.log('Start');
    };
    const handleClick = (cell) => {
        const id = gameBoard.getCell([cell.target.id]);
        if (id === null) {
            console.log(cell.target.id);
            gameBoard.move(cell.target.id);
        }
    };
    return { init, startGame };
})();

//initialization

gameController.init();
