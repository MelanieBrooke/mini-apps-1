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
          1:{empty:true, color:"white", coordinates: [1, 1]},
          2:{empty:true, color:"white", coordinates: [1, 2]},
          3:{empty:true, color:"white", coordinates: [1, 3]},
          4:{empty:true, color:"white", coordinates: [1, 4]},
          5:{empty:true, color:"white", coordinates: [1, 5]},
          6:{empty:true, color:"white", coordinates: [1, 6]},
        },
        b: {
          1:{empty:true, color:"white", coordinates: [2, 1]},
          2:{empty:true, color:"white", coordinates: [2, 2]},
          3:{empty:true, color:"white", coordinates: [2, 3]},
          4:{empty:true, color:"white", coordinates: [2, 4]},
          5:{empty:true, color:"white", coordinates: [2, 5]},
          6:{empty:true, color:"white", coordinates: [2, 6]},
        },
        c: {
          1:{empty:true, color:"white", coordinates: [3, 1]},
          2:{empty:true, color:"white", coordinates: [3, 2]},
          3:{empty:true, color:"white", coordinates: [3, 3]},
          4:{empty:true, color:"white", coordinates: [3, 4]},
          5:{empty:true, color:"white", coordinates: [3, 5]},
          6:{empty:true, color:"white", coordinates: [3, 6]},
        },
        d: {
          1:{empty:true, color:"white", coordinates: [4, 1]},
          2:{empty:true, color:"white", coordinates: [4, 2]},
          3:{empty:true, color:"white", coordinates: [4, 3]},
          4:{empty:true, color:"white", coordinates: [4, 4]},
          5:{empty:true, color:"white", coordinates: [4, 5]},
          6:{empty:true, color:"white", coordinates: [4, 6]},
        },
        e: {
          1:{empty:true, color:"white", coordinates: [5, 1]},
          2:{empty:true, color:"white", coordinates: [5, 2]},
          3:{empty:true, color:"white", coordinates: [5, 3]},
          4:{empty:true, color:"white", coordinates: [5, 4]},
          5:{empty:true, color:"white", coordinates: [5, 5]},
          6:{empty:true, color:"white", coordinates: [5, 6]},
        },
        f: {
          1:{empty:true, color:"white", coordinates: [6, 1]},
          2:{empty:true, color:"white", coordinates: [6, 2]},
          3:{empty:true, color:"white", coordinates: [6, 3]},
          4:{empty:true, color:"white", coordinates: [6, 4]},
          5:{empty:true, color:"white", coordinates: [6, 5]},
          6:{empty:true, color:"white", coordinates: [6, 6]},
        },
        g: {
          1:{empty:true, color:"white", coordinates: [7, 1]},
          2:{empty:true, color:"white", coordinates: [7, 2]},
          3:{empty:true, color:"white", coordinates: [7, 3]},
          4:{empty:true, color:"white", coordinates: [7, 4]},
          5:{empty:true, color:"white", coordinates: [7, 5]},
          6:{empty:true, color:"white", coordinates: [7, 6]},
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
  }

  render() {
    return(
      <div>
        <h1>Connect Four</h1>
        <GameEnd player={this.state.player} gameOver={this.state.gameOver} win={this.state.win}/>
        <Board onClick={this.handleClick}/>
      </div>
    )
  }

  handleClick(event) {
    event.preventDefault();
    this.checkColumnForEmpty(event.target.id)
  }

  checkColumnForEmpty (row) {
    var currentColumn = this.state.pieces[row];
    var full = true;
    for (var i = 1; i < 7; i++) {
      if (currentColumn[i].empty === true) {
        this.state.pieces[row][i].empty = false;
        this.state.pieces[row][i].color = this.state.player;
        full = false;
        var piece = row.toString() + i.toString();
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
    // if (this.checkForWin() || this.checkTie()) {
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
    for (var col in this.state.pieces) {
      col = this.state.pieces[col];
      for (var j = 1; j < 4; j++) {
        if (col[j].empty === false) {
          if (col[j].color === col[j+1].color &&
            col[j].color === col[j+2].color &&
            col[j].color === col[j+3].color) {
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
          this.declareWin();
          return true;
        }
      }
    }
  }

  declareWin() {
    console.log('Win!'),
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
          // result.push(col, row);
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
          console.log('not a tie yet!')
          return false;
        }
      }
    }
    console.log('oh it\'s a tie now.')
    return true;
  }

  gameEnd() {
    this.setState({
      gameOver: true
    })
  }


}








ReactDOM.render(<App/>, document.getElementById('app'));

