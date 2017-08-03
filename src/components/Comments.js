import React from 'react';
import { connect } from 'react-redux';

import { getComments } from '../actions/Action';

import List from './List';

export class Comments extends React.Component {
  state = {};

  componentWillMount() {
    if (!this.props.isFetched) {
      this.props.getContents();
    }
  }

  render() {
    if (this.props.isFetching) {
      return <h1>Loading</h1>;
    }

    if (this.props.error) {
      return <button onClick={() => this.props.getContents()}>Try Again</button>;
    }

    return (
      <div>
        <List parent={this.props} type={'comment'} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.comments.comments,
    isFetched: state.comments.isFetched,
    isFetching: state.comments.isFetching,
    error: state.comments.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContents: () => {
      dispatch(getComments());
    },
  };
}

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments);

export default CommentsContainer;
