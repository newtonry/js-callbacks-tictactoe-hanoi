(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});
  var Game = root.Hanoi.Game = function() {
    this.board = [[1,2,3],[],[]];
  }

  var readline = require('readline');

  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  Game.prototype.run = function() {

    this.playTurn();
  }


  Game.prototype.isOver = function() {
    if((this.board[1].length === 3) || (this.board[2].length === 3) ) {
      return true;
    } else {
      return false;
    }
  }

  Game.prototype.display = function() {
    console.log(this.board);
  }

  Game.prototype.playTurn = function() {
    // var that = this;
    this.promptMove(this.makeMove.bind(this));
  }

  Game.prototype.makeMove = function(startPile, endPile) {

    if (this.isValidMove(startPile, endPile)) {
      console.log(this.board[startPile]);
      console.log(this.board[endPile]);
      this.board[endPile] = [this.board[startPile][0]].concat(this.board[endPile]);
      this.board[startPile].shift();
      this.display();

    } else {
      console.log("Invalid move. Try again");
    }

    if (this.isOver()) {
      console.log("Congrats, you are a winner!!!!!!!!!!");
    } else {
      this.playTurn();
    };
  };


  Game.prototype.isValidMove = function(startPile, endPile) {
    var startPile = this.board[startPile];
    var endPile = this.board[endPile];
    if (startPile.length === 0) {
      return false;
    } else if (startPile[0] > endPile[0]) {
      return false;
    } else {
      return true;
    }
  }

  Game.prototype.promptMove = function(callback) {
    var startPile = -1;
    var endPile = -1;

    reader.question("Which pile would you like to move from: ", function(answer) {
      startPile = parseInt(answer) - 1;

      reader.question("Which pile would you like to move to: ", function(answer) {
        endPile = parseInt(answer) - 1;

          callback(startPile, endPile);

      });
    });
  }

  // var game = Hanoi.game = function() {
  //
  // }
  //

  module.exports = Game;
})(this);

