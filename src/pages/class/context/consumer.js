import React, { Component } from 'react';
import SearchContext from './searchContext';
export default class Consumer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <SearchContext.Consumer>
          {({state, dispath}) => (
            <h1
              onClick={()=>dispath({
                  type:"TEXT",
                  payload:"tet"
              })}
            >
              consumer:{state.text}
            </h1>
          )}
        </SearchContext.Consumer>
      </div>
    );
  }
}
