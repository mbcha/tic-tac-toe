import React from 'react';
import Board from './Board';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      lastPlay: null,
      clickedUndo: false,
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const lastPlay = squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      lastPlay: lastPlay,
      clickedUndo: false,
      xIsNext: !this.state.xIsNext
    });
  }

  undo() {
    const backToStart = this.state.squares.filter((item) => item != null).length === 0
    if (backToStart) {
      this.restart()
      return
    }
    this.setState({
      lastPlay: this.state.squares,
      squares: this.state.lastPlay,
      clickedUndo: !this.state.clickedUndo,
      xIsNext: !this.state.xIsNext
    });
  }

  restart() {
    this.setState({
      squares: Array(9).fill(null),
      lastPlay: null,
      xIsNext: true
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    const beginning = this.state.lastPlay === null
    const undoClass = beginning || this.state.clickedUndo ? 'disabled' : ''
    const redoClass = beginning || !this.state.clickedUndo ? 'disabled' : ''

    let status;
    let infoClass;
    if (winner) {
      status = 'Winner: ' + winner;
      infoClass = 'game-finished';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-info">
          <div className={infoClass}>{status}</div>
        </div>
        <div className="game-board">
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-controllers">
          <div onClick={() => this.undo()} className={undoClass}>
            <FontAwesomeIcon icon={faUndo} />
          </div>
          <div onClick={() => this.undo()} className={redoClass}>
            <FontAwesomeIcon icon={faRedo} />
          </div>
        </div>
        <div className="game-restart">
          <button onClick={() => this.restart()}>Restart game</button>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
