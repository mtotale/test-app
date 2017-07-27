import React from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions/Action';

import List from './List';

@connect(store => ({
  title: store.comments.comments,
  isFetched: store.comments.isFetched,
  isFetching: store.comments.isFetching,
  error: store.comments.error,
}))
export default class Comments extends React.Component {
  state = {
    title: [],
  };

  componentWillMount() {
    if (!this.props.isFetched) {
      this.getContents();
    }
  }

  getContents() {
    this.props.dispatch(getComments());
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
        <List parent={this.props} type={'comment'} />
      </div>
    );
  }
}
