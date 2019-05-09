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

    renderSquare(i) {
      return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
    }       
    render() { 
      return (
        <div key={this.props.clickCount} className={this.props.dodgyMove ? "dodgyMove" : ""}>
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
    constructor(props) {
      super(props);
      this.state = {
        history: [{ 
          squares: Array(9).fill(null),
        }],
        xIsNext: true,
        dodgyMove: false,
        clickCount: 0,
      };
      this.winners = [[0,1,2],[3,4,5],[6,7,8],
                       [0,3,6],[1,4,7],[2,5,8],
                       [0,4,8],[2,4,6]];
    }

    checkForWin(squares, lastMover) {
      //only need to check for winning combinations for the last mover, i.e. if X was last to move then O cannot win on this turn      
      return this.winners.some((indices) => {
        return indices.every((squarePos) => squares[squarePos] === lastMover)
      });      
    }

    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const lastMover = this.state.xIsNext ? 'X' : 'O'; 
      const clickCount = this.state.clickCount + 1;

      if (squares[i]) {        
        this.setState({dodgyMove: true, clickCount: clickCount});
        return;
      }
      
      squares[i] = lastMover;
      const xIsNext = !this.state.xIsNext;
      
      this.setState({history: history.concat([{squares: squares,}]), xIsNext: xIsNext, dodgyMove: false, clickCount: clickCount});
    }

    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      let lastMover, nextMover;
      if (this.state.xIsNext) {
        lastMover = 'O'; nextMover = 'X';
      } else {
        lastMover = 'X'; nextMover = 'O';
      }
      const hasWinner = this.checkForWin(current.squares, lastMover);
      let status;
      if (hasWinner) {
        status = `Hot dog, we have a wiener: ${lastMover}!`;
      } else {
        status = `Next player: ${nextMover}`;
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              dodgyMove={this.state.dodgyMove}
              clickCount={this.state.clickCount}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>          
        </div>
      );
    }
  }
  
  // ========================================
  
export default Game;
  