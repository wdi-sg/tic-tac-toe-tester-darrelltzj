var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var moves = []
var currentPlayer = 0
var winnerResult = 0

function playTurn(index) {
  if (moves.includes(index) || isGameOver()) {
    return false
  }
  else {
    moves.push(index)
    if (currentPlayer === 1) {
      board[index] = 1
      if (checkWinner(board,1) !== 0) {
        winnerResult = checkWinner(board, 1)
      }
      else {
        currentPlayer = 2
      }
    }
    else if (currentPlayer === 2) {
      board[index] = 2
      if(checkWinner(board,2) !== 0) {
        winnerResult = checkWinner(board, 2)
      }
      else {
        currentPlayer = 1
      }
    }
    return true
  }
}

function checkWinner(arr, player) {
  var output = 0
  switch (true) {
    case (arr[0] !== 0 && arr[0] === arr[1] && arr[0] === arr[2]):
      output = player
      break
    case (arr[3] !== 0 && arr[3] === arr[4] && arr[3] === arr[5]):
      output = player
      break
    case (arr[6] !== 0 && arr[6] === arr[7] && arr[6] === arr[8]):
      output = player
      break
    case (arr[0] !== 0 && arr[0] === arr[3] && arr[0] === arr[6]):
      output = player
      break
    case (arr[1] !== 0 && arr[1] === arr[4] && arr[1] === arr[7]):
      output = player
      break
    case (arr[2] !== 0 && arr[2] === arr[5] && arr[2] === arr[8]):
      output = player
      break
    case (arr[0] !== 0 && arr[0] === arr[4] && arr[0] === arr[8]):
      output = player
      break
    case (arr[2] !== 0 && arr[2] === arr[4] && arr[2] === arr[6]):
      output = player
      break
    case (!board.includes(0)):
      output = 3
      break
    default:
    output = 0
    break
  }
  return output
}

function isGameOver() {
  if (moves.length >= 9 || winnerResult !== 0) {
    return true
  }
  else {
    return false
  }
}

function whoWon() {
  if(isGameOver()) {
    return winnerResult //draw 3
  }
  else {
    return 0
  }
}

function restart() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  moves = []
  winnerResult = 0
  currentPlayer = 1
}
