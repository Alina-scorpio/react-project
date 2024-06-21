import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100
    };
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassComponent;
