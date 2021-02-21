import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

export default class Search extends Component {
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
    // this.props.dispatch({
    //   type: 'search/getListsAsync',
    //   payload: this.state.value,
    // });
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
