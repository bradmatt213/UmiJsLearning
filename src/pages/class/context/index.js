import React, { Component } from 'react';
import SearchContext from './searchContext';
import Search from './search';
import Lists from './lists';
import { getLists } from '@/services/search';
import Consumer from './consumer';
import LazyLoad from '@/components/LazyLoad';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }
  handleDispatch = async action => {
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload,
        });
      case 'Lists':
        const res = await getLists(action.payload);
        return this.setState({
          lists: res.lists,
        });
    }
  };
  render() {
    const house={
      info:''
    }
    return (
      <div>
        <SearchContext.Provider
          value={{
            state: this.state,
            dispath: this.handleDispatch,
          }}
        >
          {house?.info2?.id}
          <Search />
          <LazyLoad component={import('./lists')}></LazyLoad>
          <Consumer></Consumer>
        </SearchContext.Provider>
      </div>
    );
  }
}
