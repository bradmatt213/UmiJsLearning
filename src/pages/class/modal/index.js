import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CreatePortal></CreatePortal>
      </div>
    );
  }
}
