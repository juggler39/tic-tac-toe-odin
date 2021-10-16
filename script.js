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

    return {
        move,
        render,
    };
})();

const Player = (name) => {
    const sayName = () => console.log(name);
    return { sayName };
};

const jimmie = Player('jimmie');

jimmie.sayName();

gameboard.render();
