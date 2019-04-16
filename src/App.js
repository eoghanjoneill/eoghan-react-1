import React, { Component } from 'react';
import Game from './Game/Game';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 1};
    this.setCounter = this.setCounter.bind(this);
  }

  setCounter() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  } 

  render() {    
    return (
      <div className='App'>
        <Button clickHandler={this.setCounter} counter={this.state.counter} />
        <Greetings displayText={this.state.counter} />
        <Game />
      </div>
    );
  }
}

const Button = ({clickHandler, counter}) => {
  return <button onClick={clickHandler}>{counter}</button>;
}

/*function Button(props) {
  // [stateObject, setter] = useState(initialStateValue);
  //const [counter, setCounter] = useState(1);
  
  return <button onClick={props.clickHandler}>{props.counter}</button>;  
}*/

class Greetings extends Component {
  render() {
    return <div>I said {this.props.displayText}</div>;
  }
}

export default App;