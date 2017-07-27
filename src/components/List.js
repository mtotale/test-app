import React from 'react';

import CommentItem from './CommentItem';
import PostItem from './PostItem';

export default class List extends React.Component {
  render() {
    if (this.props.type === 'comment') {
      return <CommentItem {...this.props} />;
    }
    if (this.props.type === 'title') {
      return <PostItem {...this.props} />;
    }
  }
}
