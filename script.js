let currentPlayer = 'X';
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cell, index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        cell.innerHTML = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        document.getElementById('status').innerText = `It's a draw!`;
        gameActive = false;
    }
}
