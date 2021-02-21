import React, { Component } from 'react';
import { List } from 'antd-mobile';
import SearchContext from './searchContext';

const Item = List.Item;

export default class Lists extends Component {
  static contextType = SearchContext;
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this)
    const {text,lists}=this.context.state
    return (
      <div>
        <h1>Text:{text}</h1>
        <List>
          {lists.map((item, i) => (
            <Item key={i}>{item}</Item>
          ))}
        </List>
      </div>
    );
  }
}
