import React from 'react';

const Board = (props) => {
  return(
    <div>
      <table id="gameboard">
      <tr id="2">
          <td id="a2">()</td><td id="b2">()</td><td id="c2">()</td><td id="d2">()</td><td id="e2">()</td><td id="f2">()</td><td id="g2">()</td>
        </tr>
        <tr id="1">
          <td id="a1">()</td><td id="b1">()</td><td id="c1">()</td><td id="d1">()</td><td id="e1">()</td><td id="f1">()</td><td id="g1">()</td>
        </tr>
      </table>
    </div>
  )
}

export default Board;