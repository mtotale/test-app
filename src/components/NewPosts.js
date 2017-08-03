import React from 'react';
import { connect } from 'react-redux';

import { getNewPosts } from '../actions/Action';
import List from './List';

export class NewPosts extends React.Component {
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
        <List parent={this.props} type={'post'} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    title: state.newPosts.newPosts,
    isFetched: state.newPosts.isFetched,
    isFetching: state.newPosts.isFetching,
    error: state.newPosts.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContents: () => {
      dispatch(getNewPosts());
    },
  };
}

const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);

export default NewPostsContainer;
