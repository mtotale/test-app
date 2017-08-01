import React from 'react';

import { A, Subtext } from '../styles';


export default class PostItem extends React.Component {
  render() {
    const title = this.props.parent.title;
    const mappedTitles = title.map(title =>
      <li key={title.objectID}>
        <A href={title.url}>{title.title}</A>
        <Subtext>{title.points} points by {title.author} | {title.num_comments} comments </Subtext>
      </li>);
    return (
      <ol>
        {mappedTitles}
      </ol>
    );
  }
}
