import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';
import GameEnd from './components/GameEnd.jsx';
import '../dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      win: false,
      gameOver: false,
      player: "red",
      pieces: {
        a: {
          1:{html: 'a1', empty:true, color:"white", coordinates: [1, 1]},
          2:{html: 'a2', empty:true, color:"white", coordinates: [1, 2]},
          3:{html: 'a3', empty:true, color:"white", coordinates: [1, 3]},
          4:{html: 'a4', empty:true, color:"white", coordinates: [1, 4]},
          5:{html: 'a5', empty:true, color:"white", coordinates: [1, 5]},
          6:{html: 'a6', empty:true, color:"white", coordinates: [1, 6]},
        },
        b: {
          1:{html: 'b1', empty:true, color:"white", coordinates: [2, 1]},
          2:{html: 'b2', empty:true, color:"white", coordinates: [2, 2]},
          3:{html: 'b3', empty:true, color:"white", coordinates: [2, 3]},
          4:{html: 'b4', empty:true, color:"white", coordinates: [2, 4]},
          5:{html: 'b5', empty:true, color:"white", coordinates: [2, 5]},
          6:{html: 'b6', empty:true, color:"white", coordinates: [2, 6]},
        },
        c: {
          1:{html: 'c1', empty:true, color:"white", coordinates: [3, 1]},
          2:{html: 'c2', empty:true, color:"white", coordinates: [3, 2]},
          3:{html: 'c3', empty:true, color:"white", coordinates: [3, 3]},
          4:{html: 'c4', empty:true, color:"white", coordinates: [3, 4]},
          5:{html: 'c5', empty:true, color:"white", coordinates: [3, 5]},
          6:{html: 'c6', empty:true, color:"white", coordinates: [3, 6]},
        },
        d: {
          1:{html: 'd1', empty:true, color:"white", coordinates: [4, 1]},
          2:{html: 'd2', empty:true, color:"white", coordinates: [4, 2]},
          3:{html: 'd3', empty:true, color:"white", coordinates: [4, 3]},
          4:{html: 'd4', empty:true, color:"white", coordinates: [4, 4]},
          5:{html: 'd5', empty:true, color:"white", coordinates: [4, 5]},
          6:{html: 'd6', empty:true, color:"white", coordinates: [4, 6]},
        },
        e: {
          1:{html: 'e1', empty:true, color:"white", coordinates: [5, 1]},
          2:{html: 'e2', empty:true, color:"white", coordinates: [5, 2]},
          3:{html: 'e3', empty:true, color:"white", coordinates: [5, 3]},
          4:{html: 'e4', empty:true, color:"white", coordinates: [5, 4]},
          5:{html: 'e5', empty:true, color:"white", coordinates: [5, 5]},
          6:{html: 'e6', empty:true, color:"white", coordinates: [5, 6]},
        },
        f: {
          1:{html: 'f1', empty:true, color:"white", coordinates: [6, 1]},
          2:{html: 'f2', empty:true, color:"white", coordinates: [6, 2]},
          3:{html: 'f3', empty:true, color:"white", coordinates: [6, 3]},
          4:{html: 'f4', empty:true, color:"white", coordinates: [6, 4]},
          5:{html: 'f5', empty:true, color:"white", coordinates: [6, 5]},
          6:{html: 'f6', empty:true, color:"white", coordinates: [6, 6]},
        },
        g: {
          1:{html: 'g1', empty:true, color:"white", coordinates: [7, 1]},
          2:{html: 'g2', empty:true, color:"white", coordinates: [7, 2]},
          3:{html: 'g3', empty:true, color:"white", coordinates: [7, 3]},
          4:{html: 'g4', empty:true, color:"white", coordinates: [7, 4]},
          5:{html: 'g5', empty:true, color:"white", coordinates: [7, 5]},
          6:{html: 'g6', empty:true, color:"white", coordinates: [7, 6]},
        },
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkColumnForEmpty = this.checkColumnForEmpty.bind(this);
    this.dropPiece = this.dropPiece.bind(this);
    this.togglePlayer = this.togglePlayer.bind(this);
    this.declareWin = this.declareWin.bind(this);
    this.detectColumnWin = this.detectColumnWin.bind(this);
    this.detectRowWin = this.detectRowWin.bind(this);
    this.detectMajorDiagonalWin = this.detectMajorDiagonalWin.bind(this);
    this.detectMinorDiagonalWin = this.detectMinorDiagonalWin.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.findPieceByCoordinates = this.findPieceByCoordinates.bind(this);
    this.createDiagonalSearchArray = this.createDiagonalSearchArray.bind(this);
    this.checkTie = this.checkTie.bind(this);
    this.gameEnd = this.gameEnd.bind(this);
    this.winnerToken = this.winnerToken.bind(this);
  }

  render() {
    return(
      <div>
        <h1>Connect Four</h1>
        <h3>Click on the top of the gameboard to drop a piece in a column</h3>
        <GameEnd player={this.state.player} gameOver={this.state.gameOver} win={this.state.win}/>
        <Board onClick={this.handleClick}/>
      </div>
    )
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.gameOver === false) {
      this.checkColumnForEmpty(event.target.id)
    }
  }

  checkColumnForEmpty (col) {
    var currentColumn = this.state.pieces[col];
    var full = true;
    for (var row = 1; row < 7; row++) {
      if (currentColumn[row].empty === true) {
        this.state.pieces[col][row].empty = false;
        this.state.pieces[col][row].color = this.state.player;
        full = false;
        var piece = this.state.pieces[col][row].html;
        this.dropPiece(piece);
        break;
      }
    }
    if (full === true) {
      alert('This column is full!')
    }
  }

  dropPiece(space) {
    document.getElementById(space).classList.add(this.state.player.toString())
    document.getElementById(space).classList.remove("white");
    if (this.checkForWin()) {
      this.gameEnd();
    } else if (this.checkTie()) {
      this.gameEnd();
    } else {
      this.togglePlayer();
    }
  };

  togglePlayer() {
    if (this.state.player === "red") {
      this.state.player = "black";
    } else {
      this.state.player = "red";
    }
    this.setState({
      player: this.state.player
    })
  }

  checkForWin() {
    if (this.detectColumnWin() ||
    this.detectRowWin() ||
    this.detectMajorDiagonalWin() ||
    this.detectMinorDiagonalWin()) {
      return true;
    }
  }

  detectColumnWin() {
    for (var column in this.state.pieces) {
      var col = this.state.pieces[column];
      for (var j = 1; j < 4; j++) {
        if (col[j].empty === false) {
          if (col[j].color === col[j+1].color &&
            col[j].color === col[j+2].color &&
            col[j].color === col[j+3].color) {
            this.winnerToken([col[j].html, col[j+1].html, col[j+2].html, col[j+3].html]);
            this.declareWin();
            return true;
          }
        }
      }
    }
  }

  detectRowWin() {
    var rowObj = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[]};
    for (var num = 1; num < 7; num++) {
      for (var col in this.state.pieces) {
        rowObj[num].push(this.state.pieces[col][num])
      }
    }
    for (var row in rowObj) {
      for (var k = 0; k < 4; k++) {
        var current = rowObj[row];
        if (current[k].empty === false) {
          if (current[k].color === current[k+1].color &&
          current[k].color === current[k+2].color &&
          current[k].color === current[k+3].color) {
            this.winnerToken([current[k].html, current[k+1].html, current[k+2].html, current[k+3].html]);
            this.declareWin();
            return true;
          }
        }
      }
    }
  }

  detectMajorDiagonalWin() {
    var check = this.createDiagonalSearchArray('major');
    for (var l = 0; l < check.length; l++) {
      if (check[l].empty === false) {
        var cords = check[l].coordinates;
        var diag1 = this.findPieceByCoordinates([(cords[0] + 1), (cords[1] - 1)]);
        var diag2 = this.findPieceByCoordinates([(cords[0] + 2), (cords[1] - 2)]);
        var diag3 = this.findPieceByCoordinates([(cords[0] + 3), (cords[1] - 3)]);
        if (check[l].color === diag1.color &&
        check[l].color === diag2.color &&
        check[l].color === diag3.color) {
          this.winnerToken([check[l].html, diag1.html, diag2.html, diag3.html]);
          this.declareWin();
          return true;
        }
      }
    }
  }

  detectMinorDiagonalWin() {
    var check = this.createDiagonalSearchArray('minor');
    for (var l = 0; l < check.length; l++) {
      if (check[l].empty === false) {
        var cords = check[l].coordinates;
        var diag1 = this.findPieceByCoordinates([(cords[0] - 1), (cords[1] - 1)]);
        var diag2 = this.findPieceByCoordinates([(cords[0] - 2), (cords[1] - 2)]);
        var diag3 = this.findPieceByCoordinates([(cords[0] - 3), (cords[1] - 3)]);
        if (check[l].color === diag1.color &&
        check[l].color === diag2.color &&
        check[l].color === diag3.color) {
          this.winnerToken([check[l].html, diag1.html, diag2.html, diag3.html]);
          this.declareWin();
          return true;
        }
      }
    }
  }

  declareWin() {
    this.setState({
      win: true
    })
  }

  findPieceByCoordinates(crds) {
    var result;
    for (var col in this.state.pieces) {
      for (var row = 1; row < 7; row++) {
        if (this.state.pieces[col][row].coordinates[0] === crds[0] &&
          this.state.pieces[col][row].coordinates[1] === crds[1]) {
          result = this.state.pieces[col][row]
          return result;
        }
      }
    }
  }

  createDiagonalSearchArray(type) {
    var array = [];
    var p = this.state.pieces;
    if (type === 'major') {
      array.push(p['a'][6], p['b'][6], p['c'][6], p['d'][6], p['a'][5], p['b'][5], p['c'][5], p['d'][5], p['a'][4], p['b'][4], p['c'][4], p['d'][4]);
    } else {
      array.push(p['d'][6], p['e'][6], p['f'][6], p['g'][6], p['d'][5], p['e'][5], p['f'][5], p['g'][5], p['d'][4], p['e'][4], p['f'][4], p['g'][4]);
    }
    return array;
  }

  checkTie() {
    if (this.state.win === true) {
      return;
    }
    for (var col in this.state.pieces) {
      for (var row = 1; row < 7; row ++) {
        if (this.state.pieces[col][row].empty === true) {
          return false;
        }
      }
    }
    return true;
  }

  gameEnd() {
    this.setState({
      gameOver: true
    })
  }

  winnerToken(array) {
    document.getElementById(array[0]).classList.add('winner');
    document.getElementById(array[1]).classList.add('winner');
    document.getElementById(array[2]).classList.add('winner');
    document.getElementById(array[3]).classList.add('winner');
  }

}








ReactDOM.render(<App/>, document.getElementById('app'));

