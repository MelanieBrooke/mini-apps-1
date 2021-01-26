var currentPlayer = 'X';
var xScore = 0;
var oScore = 0;
var tScore = 0;

window.onload = function(){
  var resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', resetBoard);
  var title = document.getElementById('gameInfo');
  document.getElementById('gametable').addEventListener('click', function(event) {
    var space = event.target.id;
    placePiece(space);
  });
}

var resetBoard = function() {
  document.getElementById('gs1').innerHTML = '___';
  document.getElementById('gs2').innerHTML = '___';
  document.getElementById('gs3').innerHTML = '___';
  document.getElementById('gs4').innerHTML = '___';
  document.getElementById('gs5').innerHTML = '___';
  document.getElementById('gs6').innerHTML = '___';
  document.getElementById('gs7').innerHTML = '___';
  document.getElementById('gs8').innerHTML = '___';
  document.getElementById('gs9').innerHTML = '___';
  document.getElementById('gameInfo').innerHTML = 'Player X, place a piece to start!';
  currentPlayer = 'X';
};

var checkWinner = function() {
  var winner = false;
  var gs1 = document.getElementById('gs1').innerHTML;
  var gs2 = document.getElementById('gs2').innerHTML;
  var gs3 = document.getElementById('gs3').innerHTML;
  var gs4 = document.getElementById('gs4').innerHTML;
  var gs5 = document.getElementById('gs5').innerHTML;
  var gs6 = document.getElementById('gs6').innerHTML;
  var gs7 = document.getElementById('gs7').innerHTML;
  var gs8 = document.getElementById('gs8').innerHTML;
  var gs9 = document.getElementById('gs9').innerHTML;
  if (gs1 === gs2 && gs2 === gs3 && gs1 !== '___') {winner = true}
  if (gs4 === gs5 && gs5 === gs6 && gs4 !== '___') {winner = true}
  if (gs7 === gs8 && gs8 === gs9 && gs7 !== '___') {winner = true}
  if (gs1 === gs4 && gs4 === gs7 && gs1 !== '___') {winner = true}
  if (gs2 === gs5 && gs5 === gs8 && gs2 !== '___') {winner = true}
  if (gs3 === gs6 && gs6 === gs9 && gs3 !== '___') {winner = true}
  if (gs1 === gs5 && gs5 === gs9 && gs1 !== '___') {winner = true}
  if (gs3 === gs5 && gs5 === gs7 && gs3 !== '___') {winner = true}
  if (gs1 !== '___' && gs2 !== '___' && gs3 !== '___' && gs4 !== '___' && gs5 !== '___' && gs6 !== '___' && gs7 !== '___' && gs8 !== '___' && gs9 !== '___' && winner === false) {winner = 'tie'}
  return winner;
};

var placePiece = function(space) {
  var player = currentPlayer;
  var placed = '_' + player + '_';
  if (document.getElementById(space).innerHTML === '___') {
    document.getElementById(space).innerHTML = placed;
    console.log('placed', placed)
    var winner = checkWinner();
    if (winner === true) {
      document.getElementById('gameInfo').innerHTML = 'Player ' + currentPlayer + ' wins!';
      if (currentPlayer === 'X') {
        xScore += 1;
        document.getElementById('xScore').innerHTML = xScore;
      } else if (currentPlayer === 'O') {
        oScore += 1;
        document.getElementById('oScore').innerHTML = oScore;
      }
      return;
    } else if (winner === 'tie') {
      document.getElementById('gameInfo').innerHTML = 'Uh oh. The game is tied. You both lost. Reset the board to try again!';
      tScore += 1;
      document.getElementById('tScore').innerHTML = tScore;
      return;
    }
    changePlayer();
  }
  else (alert('This space is taken!'));
};

var changePlayer = function() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';
  }
  document.getElementById('gameInfo').innerHTML = 'It\'s Player ' + currentPlayer + '\'s turn!';
};