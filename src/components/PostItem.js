import React from 'react';

export default class CommentItem extends React.Component {
  render() {
    const title = this.props.parent.title;
    const mappedTitles = title.map(title =>
      (<li key={title.objectID}>
        {' '}{title.title}{' '}
      </li>),
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
