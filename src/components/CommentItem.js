import React from 'react';

export default class CommentItem extends React.Component {
  render() {
    const title = this.props.parent.title;
    const mappedTitles = title.map(title =>
      <li key={title.objectID} dangerouslySetInnerHTML={{ __html: title.comment_text }} />,
    );
    return (
      <div>
        <ol>
          {mappedTitles}
        </ol>
      </div>
    );
  }
}
