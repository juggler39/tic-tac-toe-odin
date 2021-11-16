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
        xIsNext = true;
        render();
    };
    const render = () => {
        board.forEach((cell, index) => {
            document.getElementById(index).innerHTML = cell;
        });
    };
    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    return { move, render, clearBoard, getCell, calculateWinner };
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
        gameBoard.clearBoard();
    };
    const handleClick = (cell) => {
        const id = gameBoard.getCell([cell.target.id]);
        if (id === null) {
            gameBoard.move(cell.target.id);
        }
        console.log(gameBoard.calculateWinner());
    };
    return { init, startGame };
})();

//initialization

gameController.init();
