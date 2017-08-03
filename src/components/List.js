import React from 'react';

import CommentItem from './CommentItem';
import PostItem from './PostItem';

export default class List extends React.Component {
  render() {
    let mappedTitles;
    if (this.props.type === 'comment') {
      mappedTitles = this.props.parent.title.map(item => <CommentItem {...item} />);
    }
    if (this.props.type === 'post') {
      mappedTitles = this.props.parent.title.map(item => <PostItem {...item} />);
    }
    return (
      <ol>
        {mappedTitles}
      </ol>
    );
  }
}
