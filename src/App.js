import React, { Component } from 'react';
import Game from './Game/Game';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Greetings displayText='zee' />
        <Game />
      </div>
    );
  }
}

function Hello() {
  //return <div>Hello World!</div>;
  return React.createElement('h1', null, 'Hello Worldzzz!!!');
}

class Greetings extends Component {
  render() {
    return <div>I said {this.props.displayText}</div>;
  }
}
export default App;