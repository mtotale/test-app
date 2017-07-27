import React from 'react';
import { connect } from 'react-redux';

import { getTopPosts } from '../actions/Action';

import List from './List';

@connect(store => ({
  title: store.home.home,
  isFetched: store.home.isFetched,
  isFetching: store.home.isFetching,
  error: store.home.error,
}))
export default class Home extends React.Component {
  state = {
    title: [],
  };

  getContents() {
    this.props.dispatch(getTopPosts());
  }

  componentWillMount() {
    if (!this.props.isFetched) {
      this.getContents();
    }
  }

  render() {
    if (this.props.isFetching) {
      return <h1>Loading</h1>;
    }

    if (this.props.error) {
      return <button onClick={() => this.getContents()}>Try Again</button>;
    }

    return (
      <div>
        <List parent={this.props} type={'title'} />
      </div>
    );
  }
}
