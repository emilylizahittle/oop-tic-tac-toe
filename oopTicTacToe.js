$(function() {

  // A starter Player constructor.
  function Player(sym) {
    // `this.mark` stores the X or O depending which
    // player it is.
    this.mark = sym;
  };

  // A starter Player constructor.
  function Board() {
    // `this.player1` is a new instance of a Player object.
    // note that `this.player1.mark` is 'X'.
    this.player1 = new Player('X');

    // `this.player1` is a new instance of a Player object.
    // note that `this.player2.mark` is 'O'.
    this.player2 = new Player('O');

    // `this.$boxes` stores the jQuery object of
    // DOM elements with `class='box'`.
    this.$boxes = $('.box');

    // `this.$reset` stores the jQuery object of
    // DOM elements with `id='reset'`.
    this.$reset = $('#reset');

    // `this.currentPlayer` is the current player.
    // As the game goes on, this value should
    // toggle between `this.player1` and 
    // `this.player2`. (we'll use the `nextPlayer` method
    // to make that toggling happen)
    this.currentPlayer = this.player1;

    // `this.counter` tracks how many moves have been made
    // so far. We use this attribute in the `nextPlayer`
    // method to toggle `this.currentPlayer`.
    this.counter = 1;
  };

  // `Board.prototype.nextPlayer` toggles the state
  // of `this.currentPlayer` between `this.player1`
  // and `this.player2`.
  Board.prototype.nextPlayer = function() {
    // Check to see if `this.counter` is even
    if (this.counter % 2 === 0) {

      // If it is, set `this.currentPlayer` to be
      // `this.player1`.
      this.currentPlayer = this.player1;
    } else {

      // If it is, set `this.currentPlayer` to be
      // `this.player1`.
      this.currentPlayer = this.player2;
    }

    // Increment `this.counter`.
    this.counter += 1;
  };

  // `Board.prototype.init` initializes our event listeners
  Board.prototype.init = function() {

    // One thing to be careful of when using
    // the `this` keyword, is that it can change
    // if we use it in a different context.
    var _this = this;

    // Check out your console. Outside
    // of the `this.$boxes.click`, the keyword
    // `this` means one thing.
    console.log("Outside this is", this);
    console.log("Outside _this is", _this);

    // Adding `click` event listeners. As of now they just
    // log information. I'll leave it to you to solve those
    // problems.
    this.$boxes.click(function(evnt) {

      // And inside we see that, the keyword
      // `this` is something else.
      console.log("\nInside this is", this);

      // However, note that `_this` is the same
      // in both places. Why?
      console.log("Inside _this is", _this);

      // Just checking out what `evnt` is
      console.log("\nEvent is", evnt);

      // Just checking out what `evnt` is
      console.log("Event Target is", evnt.target);

      // And showing how `_this.currentPlayer` is toggling
      // appropriately
      console.log("`_this.currentPlayer is", _this.currentPlayer);

      // This is where the toggling actually takes place
      _this.nextPlayer();
    });

    // I'll leave it to you to implement reset
    this.$reset.click(function(evnt) {
      console.log("We need to actually reset the board");
    });

  };

  var board = new Board();
  board.init();
});

