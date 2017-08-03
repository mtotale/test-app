import React from 'react';
import { connect } from 'react-redux';

import { getTopPosts } from '../actions/Action';

import List from './List';

export class Home extends React.Component {
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
    title: state.home.home,
    isFetched: state.home.isFetched,
    isFetching: state.home.isFetching,
    error: state.home.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getContents: () => {
      dispatch(getTopPosts());
    },
  };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
