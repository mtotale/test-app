import React from 'react';
import { connect } from 'react-redux';

import { getNewPosts } from '../actions/Action';
import List from './List';

@connect(store => ({
  title: store.newPosts.newPosts,
  isFetched: store.newPosts.isFetched,
  isFetching: store.newPosts.isFetching,
  error: store.newPosts.error,
}))
export default class NewPosts extends React.Component {
  state = {
    title: [],
  };

  componentWillMount() {
    if (!this.props.isFetched) {
      this.getContents();
    }
  }
  getContents() {
    this.props.dispatch(getNewPosts());
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
