import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi';
const Item = List.Item;
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>class Demo</h1>
        <List>
          <Item>
            <Link to="/class/component-old">component-old</Link>
          </Item>
          <Item>
            <Link to="/class/component-new">component-new</Link>
          </Item>
          <Item>
            <Link to="/class/lists">lists</Link>
          </Item>
          <Item>
            <Link to="/class/dva">Dva</Link>
          </Item>
          <Item>
            <Link to="/class/context">Context</Link>
          </Item>
          <Item>
            <Link to="/class/lazy-load">lazyload</Link>
          </Item>
        </List>
      </div>
    );
  }
}
