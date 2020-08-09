import React from 'react';
import './App.css';
import Canvas from "../Canvas/Canvas";
import Control from "../Control/Control";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      red: [100, 150],
      green: [100,200],
      blue: [50, 100]
    }
  }

  render() {
    const {red, green, blue, shuffleOn} = this.state;
    return (
      <div className="App">
        <h2> Color Generator </h2>
        <Control
          red={red}
          green={green}
          blue={blue}
          shuffleOn={shuffleOn}
          colorChanged={this.colorChanged.bind(this)}
          shuffleChanged={this.shuffleChanged.bind(this)}
        />
        <Canvas
          red={red}
          green={green}
          blue={blue}
          shuffleOn={shuffleOn}
        />
      </div>
    );
  }

  colorChanged(color, value) {
    this.setState({
      ...this.state,
      [color]: value
    });
  }

  shuffleChanged(value) {
    this.setState({
      shuffleOn: !this.state.shuffleOn
    });
  }

}


export default App;
