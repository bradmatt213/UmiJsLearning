import React, { Component } from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text, lists } = this.props.search;
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
