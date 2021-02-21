import React, { Component,PureComponent } from 'react';

export default class ComponentOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'demo',
    };
    console.log('constructor');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
//   shouldComponentUpdate(props,states) {
//     console.log('shouldComponentUpdate');
//     console.log('props',props);
//     console.log('states',states);
//     return false;
//   }
  handleClick = () => {
    this.setState({
      text: 2,
    });
  };

  render() {
    console.log('render');
    return (
      <div onClick={this.handleClick}>
        ComponentOld--
        {this.state.text}
      </div>
    );
  }
}
