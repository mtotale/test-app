import React from 'react';

import { Comment } from '../styles';

export default class CommentItem extends React.Component {
  render() {
    const title = this.props.parent.title;
    const mappedTitles = title.map(title =>
      <Comment key={title.objectID} dangerouslySetInnerHTML={{ __html: title.comment_text }} />,
    );
    return (
      <ol>
        {mappedTitles}
      </ol>
    );
  }
}
