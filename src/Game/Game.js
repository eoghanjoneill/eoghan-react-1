import React from 'react';
import './Game.css';

  function Square (props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
    
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        next: "X",
        winner: null
      };
      this.winners = [[0,1,2],[3,4,5],[6,7,8],
                       [0,3,6],[1,4,7],[2,5,8],
                       [0,4,8],[2,4,6]];
    }    

    renderSquare(i) {
      return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      const lastMover = this.state.next;
      squares[i] = lastMover;
      const next = lastMover === "X" ? "O" : "X";
      let winner = this.state.winner;
      if (this.checkForWin(squares, lastMover)) {
        winner = lastMover;
      }
      this.setState({squares: squares, next: next, winner: winner});
    }

    checkForWin(squares, lastMover) {
      //only need to check for winning combinations for the last mover, i.e. if X was last to move then O cannot win on this turn      
      return this.winners.some((indices) => {
        return indices.every((squarePos) => squares[squarePos] === lastMover)
      });      
    }
    
    render() {
      const status = `Next player: ${this.state.next}`;
      const winStatus = this.state.winner ? `Hot dog, we have a wiener: ${this.state.winner}!` : '';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="status">{winStatus}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>          
        </div>
      );
    }
  }
  
  // ========================================
  
export default Game;
  