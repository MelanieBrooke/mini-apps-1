import React from 'react';

const GameEnd = (props) => {
  if (props.gameOver === true) {
    var playerName = props.player.charAt(0).toUpperCase() + props.player.slice(1);
    console.log('game end - gameOver:', props.gameOver, 'game end - winner', props.win)
    if (props.win === true) {
      return (
        <div>
          <h3>Congratulations! {playerName} is the winner!</h3>
        </div>
      )
    } else {
      return (
        <div>
          <h3>The game is tied. Refresh the page to try again.</h3>
        </div>
      )
    }
  } else {
    return (
      <div>
        <h3>It's {props.player} player's turn.</h3>
      </div>
    )
  }
}

export default GameEnd;