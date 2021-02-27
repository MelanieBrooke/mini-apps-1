import React from 'react';

const GameEnd = (props) => {
  if (props.gameOver === true) {
    var playerName = props.player.charAt(0).toUpperCase() + props.player.slice(1);
    if (props.win === true) {
      return (
        <div>
          <h2>Congratulations! {playerName} is the winner!</h2>
          <h3>Refresh page to play again.</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h2>The game is tied. Refresh the page to try again.</h2>
        </div>
      )
    }
  } else {
    return (
      <div>
        <h2>It's {props.player} player's turn.</h2>
      </div>
    )
  }
}

export default GameEnd;