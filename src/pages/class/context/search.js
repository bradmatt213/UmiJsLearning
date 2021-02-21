import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import SearchContext from './searchContext';

export default class Search extends Component {
  static contextType = SearchContext;
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange = value => {
    this.setState({
      value: value,
    });
  };
  handleSubmit = () => {
    this.context.dispath({
      type: 'TEXT',
      payload: this.state.value,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}
