(function(root) {
  var TicTacToe = root.TicTacToe = (root.TicTacToe || {});
  var Game = root.TicTacToe.Game = function() {
    this.board = new Array;
    this.currentPlayer = "X"

    for (var i = 0; i < 3; i++) {
      this.board.push(new Array(3));
    }
  }

  var readline = require('readline');

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


  Game.prototype.switchPlayer = function() {
    this.currentPlayer = (this.currentPlayer === "x") ? "o" : "x";
  }

  Game.prototype.playTurn = function() {
    this.printBoard();
    this.promptMove(this.makeMove.bind(this));
    this.switchPlayer();
  }

  Game.prototype.promptMove = function(callback) {
    reader.question("Where would you like to move?", function(answer) {
      answer = answer.split(',');
      var move = [parseInt(answer[0]), parseInt(answer[1])];

      callback(move);
    });
  }

  Game.prototype.makeMove = function(move) {
    if (this.isValid(move)) {
      this.board[move[0]][move[1]] = this.currentPlayer;
    } else {
      console.log("Invalid move, try again!");
    }

    if (this.isOver()) {
      console.log("Congrats, " + this.currentPlayer + " is the winner!");
    } else {
      this.playTurn();
    }
  }

  Game.prototype.isOver = function() {
    for (var i = 0; i < 3; i++) {
      if ((this.board[i][0] === this.board[i][1]) && (this.board[i][1] === this.board[i][2]) && (this.board[i][0] != undefined)) {
        return true;
      }
    }
    for (var i = 0; i < 3; i++) {
      if ((this.board[0][i] === this.board[1][i]) && (this.board[1][i] === this.board[2][i])
          && (this.board[0][i] != undefined)) {
        return true;
      }
    }
    if ((this.board[0][0] === this.board[1][1]) && (this.board[1][1] === this.board[2][2])
        && (this.board[0][0] != undefined)) {
      return true;
    }
    if ((this.board[0][2] === this.board[1][1]) && (this.board[1][1] === this.board[2][0])
        && (this.board[0][2] != undefined)) {
      return true;
    }
    return false;
  }

  Game.prototype.isValid = function(move) {
    if([0,1,2].indexOf(move[0]) === -1 || [0,1,2].indexOf(move[1]) === -1 ) {
      return false;
    } else {
      return (this.board[move[0]][move[1]] === undefined);
    }
  }

  Game.prototype.printBoard = function() {
    for (var i = 0; i < 3; i++) {
      var row = ""
      for (var j = 0; j <3 ; j++) {
        if (this.board[i][j] === undefined) {
          row = row + "---";
        } else if(this.board[i][j] === 'x') {
          row = row + " x ";
        } else {
          row = row + " o ";
        }
      }
      console.log(row);
    }
  }

  module.exports = Game;
})(this);