import React, { Component, lazy, Suspense } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _renderLazy = () => {
    let Lazy;
    const { component, delay, ...other } = this.props;
    if (!component || component.constructor.name !== 'Promise') {
      Lazy = import('./error');
    }
    Lazy = lazy(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(component);
        }, delay || 300);
      });
    });
    return <Lazy {...other}></Lazy>;
  };

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>{this._renderLazy()}</Suspense>
      </div>
    );
  }
}
