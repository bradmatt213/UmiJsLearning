import React, { Component, PureComponent } from 'react';

export default class ComponentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'demo',
    };
    console.log('constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log('props',props);
    console.log('state',state);
    return {
      state,
    };
  }
  getSnapshotBeforeUpdate(){

  }
  componentDidUpdate(){
      
  }

  handleClick = () => {
    this.setState({
      text: 2,
    });
  };

  render() {
    console.log('render');
    return (
      <div onClick={this.handleClick}>
        Componentnew--
        {this.state.text}
      </div>
    );
  }
}
