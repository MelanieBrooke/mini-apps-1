import React from 'react';

const Board = (props) => {
  return(
    <div>
      <table id="gameboard">
      <tr id="columns" onClick={props.onClick}>
        <th id="a" name="a"></th>
        <th id="b" name="b"></th>
        <th id="c" name="c"></th>
        <th id="d" name="d"></th>
        <th id="e" name="e"></th>
        <th id="f" name="f"></th>
        <th id="g" name="g"></th>
      </tr>
      <tr id="6">
          <td><div id="a6" class="a 6 white"></div></td>
          <td><div id="b6" class="b 6 white"></div></td>
          <td><div id="c6" class="c 6 white"></div></td>
          <td><div id="d6" class="d 6 white"></div></td>
          <td><div id="e6" class="e 6 white"></div></td>
          <td><div id="f6" class="f 6 white"></div></td>
          <td><div id="g6" class="g 6 white"></div></td>
        </tr>
      <tr id="5">
          <td><div id="a5" class="a 5 white"></div></td>
          <td><div id="b5" class="b 5 white"></div></td>
          <td><div id="c5" class="c 5 white"></div></td>
          <td><div id="d5" class="d 5 white"></div></td>
          <td><div id="e5" class="e 5 white"></div></td>
          <td><div id="f5" class="f 5 white"></div></td>
          <td><div id="g5" class="g 5 white"></div></td>
        </tr>
      <tr id="4">
          <td><div id="a4" class="a 4 white"></div></td>
          <td><div id="b4" class="b 4 white"></div></td>
          <td><div id="c4" class="c 4 white"></div></td>
          <td><div id="d4" class="d 4 white"></div></td>
          <td><div id="e4" class="e 4 white"></div></td>
          <td><div id="f4" class="f 4 white"></div></td>
          <td><div id="g4" class="g 4 white"></div></td>
        </tr>
      <tr id="3">
          <td><div id="a3" class="a 3 white"></div></td>
          <td><div id="b3" class="b 3 white"></div></td>
          <td><div id="c3" class="c 3 white"></div></td>
          <td><div id="d3" class="d 3 white"></div></td>
          <td><div id="e3" class="e 3 white"></div></td>
          <td><div id="f3" class="f 3 white"></div></td>
          <td><div id="g3" class="g 3 white"></div></td>
        </tr>
      <tr id="2">
          <td><div id="a2" class="a 2 white"></div></td>
          <td><div id="b2" class="b 2 white"></div></td>
          <td><div id="c2" class="c 2 white"></div></td>
          <td><div id="d2" class="d 2 white"></div></td>
          <td><div id="e2" class="e 2 white"></div></td>
          <td><div id="f2" class="f 2 white"></div></td>
          <td><div id="g2" class="g 2 white"></div></td>
        </tr>
        <tr id="1">
          <td><div id="a1" class="a 1 white"></div></td>
          <td><div id="b1" class="b 1 white"></div></td>
          <td><div id="c1" class="c 1 white"></div></td>
          <td><div id="d1" class="d 1 white"></div></td>
          <td><div id="e1" class="e 1 white"></div></td>
          <td><div id="f1" class="f 1 white"></div></td>
          <td><div id="g1" class="g 1 white"></div></td>
        </tr>
      </table>
    </div>
  )
}

export default Board;