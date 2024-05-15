
const createGameboard = function() {
    let board = Array.from({ length: 3 }, () => Array(3).fill(undefined));


    let clear = function() {
        board = Array.from({ length: 3 }, () => Array(3).fill(undefined));
    }

    let occupied = function(xaxis,yaxis) {
        return board[xaxis][yaxis] === undefined;

    }

    let count = function(array, symbol) {
        let num=0
        for (let i = 0; i < array.length; i++)
            if (array[i] === symbol)
                num+=1

        return num;
    }

    let haswon = function(symbol) {
        for (let i=0; i < 3; i++) {
            let arr1 = []
            let arr2 = []
            for (let j = 0; j < 3; j++) {
                arr1.push(board[i][j]);
                arr2.push(board[j][i]);
            }
            if (count(arr1, symbol) === 3)
                return true;

            if (count(arr2, symbol) === 3)
                return true
        }

        if (count([board[0][0], board[1][1], board[2][2]], symbol) === 3)
            return true

        return count([board[2][0], board[1][1], board[0][2]], symbol) === 3;


    }

    let place_symbol = function (xaxis, yaxis, symbol) {
        console.log(xaxis, yaxis, symbol, board[xaxis][yaxis]);
        board[xaxis][yaxis] = symbol;
        console.log(board)
        return haswon(symbol);
    }

    return {board, clear, occupied, place_symbol}
}

const createPlayer = function(name, symbol) {
    let roundsWon = 0
    let winRound = function() {roundsWon++}
    return {name, symbol, roundsWon, winRound}
}

const ticTacToe = function(name1, name2) {
    let rounds=0
    let gameboard = createGameboard()

    let player1 = createPlayer(name1,'x')

    let player2 = createPlayer(name2,'o')

    const newRound = function() {rounds+=1}

    const player1win = function() {player1.winRound()}
    const player2win = function() {player2.winRound()}

    const occupied = function(xaxis,yaxis) {return gameboard.occupied(xaxis,yaxis);}
    const playermove = function(xaxis, yaxis, symbol) {return gameboard.place_symbol(xaxis, yaxis, symbol);}

    return {newRound, player1win, player2win, occupied, playermove}
}

const displayDOM = function(name1,name2) {
    let currentSymbol = 'x'
    const game = ticTacToe(name1,name2)

    const clearBoard = function() {
        for (let i=0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let button = document.getElementById('button-' + i+'-'+j)
                button.textContent = ''
            }
        }
    }

    const setup = function() {
        let name1DOM = document.getElementById('name-1')
        let name2DOM = document.getElementById('name-2')
        let score1 = document.getElementById('score-1')
        let score2 = document.getElementById('score-2')
        let rounds = document.getElementById('rounds')

        name1DOM.innerText = name1
        name2DOM.innerText = name2
        score1.innerText = 0
        score2.innerText = 0
        rounds.innerText = 0

        for (let i=0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let button = document.getElementById('button-'+i+'-'+j)
                button.addEventListener('click', ev => {
                    if (button.innerText==='') {
                        button.innerText=currentSymbol
                        if (game.playermove(i,j,currentSymbol)) {
                            console.log("you won")
                            clearBoard()
                        }
                        currentSymbol = (currentSymbol === 'x') ? 'o': 'x'
                    }
                })
            }
        }
    }

    const updateBoard = function(xaxis,yaxis,symbol) {
        let button = document.getElementById('button-'+(xaxis*3+yaxis))
        button.textContent = symbol
    }

    return {clearBoard, setup, updateBoard}
}

let play = displayDOM("hello",'amantha')
play.setup()