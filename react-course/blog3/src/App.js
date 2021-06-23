import React from 'react';
import './App.css';

// use of class component
// use of state in class component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Tree",
      val: 0
    }
  }
  apple() {
    this.setState({ data: "Plant" })
    this.setState({ val: this.state.val + 1 })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <h1>{this.state.val}</h1>
        <button onClick={() => this.apple()}>Update Data</button>
      </div>
    );
  }
}

export default App;
