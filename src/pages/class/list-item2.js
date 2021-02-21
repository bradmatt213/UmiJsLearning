import React, { Component } from 'react';

export default class ListItem2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Item2--{this.props.name}</h1>
      </div>
    );
  }
}
