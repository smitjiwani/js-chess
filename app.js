import { wking, wqueen, wrook, wbishop, wknight, wpawn, bking, bqueen, brook, bbishop, bknight, bpawn } from './pieces.js';

const chessBoard = document.querySelector('.chessboard');
const chessBoardSize = 8;

// create chess squares

for (let i = 0; i < chessBoardSize; i++) {
    for (let j = 0; j < chessBoardSize; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = `${i}${j}`;
        chessBoard.appendChild(square);
        if ((i + j) % 2 === 0) {
            square.classList.add('light');
        } else {
            square.classList.add('dark');
        }
    }
}



const chessPieces = [
    [10, 8, 9, 11, 12, 9, 8, 10],
    [7, 7, 7, 7, 0, 7, 7, 7],
    [0, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [4, 2, 3, 5, 6, 3, 2, 4]
];

// create pieces on board

for (let i = 0; i < chessBoardSize; i++) {
    for (let j = 0; j < chessBoardSize; j++) {
        const square = document.getElementById(`${i}${j}`);
        switch (chessPieces[i][j]) {
            case 0:
                break;
            case 1:
                square.innerHTML = bpawn;
                break;
            case 2:
                square.innerHTML = bknight;
                break;
            case 3:
                square.innerHTML = bbishop;
                break;
            case 4:
                square.innerHTML = brook;
                break;
            case 5:
                square.innerHTML = bqueen;
                break;
            case 6:
                square.innerHTML = bking;
                break;
            case 7:
                square.innerHTML = wpawn;
                break;
            case 8:
                square.innerHTML = wknight;
                break;
            case 9:
                square.innerHTML = wbishop;
                break;
            case 10:
                square.innerHTML = wrook;
                break;
            case 11:
                square.innerHTML = wqueen;
                break;
            case 12:
                square.innerHTML = wking;
                break;
        }
    }
}

// create a class of pieces with oncurrent position and target position

class Piece {
    constructor(name, color, currentPosition, targetPosition) {
        this.name = name;
        this.color = color;
        this.currentPosition = currentPosition;
        this.targetPosition = targetPosition;
    }
}



// add event listeners to pieces

const pieces = document.querySelectorAll('.wpieces, .bpieces');

pieces.forEach(piece => {
    piece.classList.add('unselected');
});

// define target element for piece type



// select only one element at a time
function getTargetElement(selectedPiece) {

    let targetElement = [];

    if (selectedPiece.id === 'wpawn' && selectedPiece.parentElement.id < 20) {
        targetElement.push(parseInt(selectedPiece.parentElement.id) + 10);
        targetElement.push(parseInt(selectedPiece.parentElement.id) + 20);
    } else if (selectedPiece.id === 'wpawn' && selectedPiece.parentElement.id < 70) {
        targetElement.push(parseInt(selectedPiece.parentElement.id) + 10);
    }

    if (selectedPiece.id === 'bpawn' && selectedPiece.parentElement.id > 59) {
        targetElement.push(parseInt(selectedPiece.parentElement.id) - 10);
        targetElement.push(parseInt(selectedPiece.parentElement.id) - 20);
    } else if (selectedPiece.id === 'bpawn' && selectedPiece.parentElement.id > 9) {
        targetElement.push(parseInt(selectedPiece.parentElement.id) - 10);
    }


    return targetElement;
}

let selectedPiece = null;

pieces.forEach(piece => {
    piece.addEventListener('click', () => {
        if (piece.classList.contains('unselected')) {
            if (selectedPiece !== null) {
                selectedPiece.classList.replace('selected', 'unselected');
            }
            piece.classList.replace('unselected', 'selected');
            
            selectedPiece = piece;
        }

    })
});


//add targetPosition for selected piece













