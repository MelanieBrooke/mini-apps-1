import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';
import '../dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "red",
      pieces: {
        a: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
        },
        b: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
        },
        c: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
        },
        d: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
        },
        e: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
        },
        f: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
        },
        g: {
          1:{empty:true, color:"white"},
          2:{empty:true, color:"white"},
          3:{empty:true, color:"white"},
          4:{empty:true, color:"white"},
          5:{empty:true, color:"white"},
          6:{empty:true, color:"white"},
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
  }

  render() {
    return(
      <div>
        <h1>Connect Four</h1>
        <h3>It's {this.state.player} player's turn.</h3>
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
    this.checkForWin();
    this.togglePlayer();
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
    this.detectColumnWin();
    this.detectRowWin();
    // this.detectMajorDiagonalWin();
    // this.detectMinorDiagonalWin();
  }

  detectColumnWin() {
    for (var col in this.state.pieces) {
      col = this.state.pieces[col];
      for (var j = 1; j < 4; j++) {
        if (col[j].empty === false &&
          col[j+1].empty === false &&
          col[j+2].empty === false &&
          col[j+3].empty === false) {
          if (col[j].color === col[j+1].color &&
            col[j].color === col[j+2].color &&
            col[j].color === col[j+3].color) {
            this.declareWin();
            break;
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
    console.log(rowObj);
    for (var row in rowObj) {
      for (var k = 0; k < 4; k++) {
        var current = rowObj[row];
        if (current[k].empty === false &&
        current[k+1].empty === false &&
        current[k+2].empty === false &&
        current[k+3].empty === false) {
          if (current[k].color === current[k+1].color &&
          current[k].color === current[k+2].color &&
          current[k].color === current[k+3].color) {
            this.declareWin();
          }
        }
      }
    }
  }

  detectMajorDiagonalWin() {

  }

  detectMinorDiagonalWin() {

  }

  declareWin() {
    console.log('Win!')
  }

}








ReactDOM.render(<App/>, document.getElementById('app'));

