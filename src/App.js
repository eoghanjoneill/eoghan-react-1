import React, { Component } from 'react';
import Game from './Game/Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
    this.setCounter = this.setCounter.bind(this);
  }

  setCounter(x) {
    this.setState(state => ({
      counter: state.counter + x,
    }));
  } 

  render() {    
    return (
      <div className='App'>
        <Button clickHandler={() => this.setCounter(2)} counter={this.state.counter} />
        <Display displayText={this.state.counter} />
        <br />
        <Game />
      </div>
    );
  }
}

/*const Button = ({clickHandler, counter}) => {
  return <button onClick={clickHandler}>{counter}</button>;
}*/

function Button(props) {  
  return <button onClick={props.clickHandler}>{props.counter}</button>;  
}

function Display(props) {
  return <div>The state is {props.displayText}</div>;  
}

export default App;