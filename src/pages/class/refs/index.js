import React, { Component,createRef } from 'react';
import Child from "./child";
import InputForward from "./forwardRef"

export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.domRef = createRef();
    this.childRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    // this.childRef.changeText('lalalala')
    this.inputRef.current.focus()
  }
  handleClick(str){
      this.childRef.current.changeText(str)
  }
  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef}></Child>
        <button onClick={()=>this.handleClick('lalala')}>click</button>
        <InputForward ref={this.inputRef}></InputForward>
      </div>
    );
  }
}
