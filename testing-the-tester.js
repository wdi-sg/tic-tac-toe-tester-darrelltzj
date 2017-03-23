$(document).ready(function () {
  var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  var currentPlayer = 0
  var winnerResult = whoWon()

  function playTurn(index) {
    if (board[index] !== 0 || isGameOver()) {
      return false
    }
    else {
      if (currentPlayer === 1) {
        board[index] = 1
        if (whoWon() === 0) {
          currentPlayer = 2
        }
      }
      else if (currentPlayer === 2) {
        board[index] = 2
        if(whoWon() === 0) {
          currentPlayer = 1
        }
      }
      return true
    }
  }

  function isGameOver() {
    if (whoWon() === 0) {
      return false
    }
    else {
      if (winnerResult === 1) {
        alert('Winner is X')
      }
      else if (winnerResult === 2) {
        alert('Winner is O')
      }
      else if (winnerResult === 3) {
        alert('Draw')
      }
      restart()
      return true
    }
  }

  function whoWon() {
    switch (true) {
      case (board[0] !== 0 && board[0] === board[1] && board[0] === board[2]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[3] !== 0 && board[3] === board[4] && board[3] === board[5]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[6] !== 0 && board[6] === board[7] && board[6] === board[8]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[0] !== 0 && board[0] === board[3] && board[0] === board[6]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[1] !== 0 && board[1] === board[4] && board[1] === board[7]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[2] !== 0 && board[2] === board[5] && board[2] === board[8]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[0] !== 0 && board[0] === board[4] && board[0] === board[8]):
        winnerResult = currentPlayer
        return winnerResult
      case (board[2] !== 0 && board[2] === board[4] && board[2] === board[6]):
        winnerResult = currentPlayer
        return winnerResult
      case (!board.includes(0)):
        winnerResult = 3
        return winnerResult
      default:
        winnerResult = 0
        return winnerResult
    }
  }

  function restart() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    winnerResult = 0
    currentPlayer = 1
    updateGrid()
  }

  function updateGrid() {
    board.forEach(function (player, i) {
      var eachBox = $('.box:nth-child(' + (i + 1) + ')')
      if (player === 1) {
        eachBox.text('X')
      }
      else if (player === 2) {
        eachBox.text('O')
      }
      else {
        eachBox.text('')
      }
    })
  }

  $('body').on('click', '#restart', restart)

  $('.grid').on('click', '.box', function() {
    playTurn($('.box').index($(this)))
    updateGrid()
    isGameOver()
  })
  restart()
})
