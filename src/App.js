import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  nameUpdate = () => {
    this.setState({ name: 'saxeli' });
    window.alert(this.state.name);
    
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <button type='button' className='' onClick={this.nameUpdate}>Click me</button>
      </div>
    );
  }
}

export default App;
