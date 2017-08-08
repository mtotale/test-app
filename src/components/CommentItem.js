import React from 'react';
import styled from 'emotion/react';

const Comment = styled('li')`
  font-size: 9pt;
  color: #000000;
  margin-bottom: 0.5cm;
`;

const Subtext = styled('div')`
  font-size: 8pt;
  color: #828282;
  margin-bottom: 0.5em;
  & a {
    &:link {
      color: #828282;
      text-decoration: none;
    }
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: #828282;
      text-decoration: none;
    }
  }
`;

export default class CommentItem extends React.Component {
  render() {
    return (
      <Comment key={this.props.objectID}>
        <Subtext>
          {this.props.author} | on: <a href={this.props.story_url}>{this.props.story_title}</a>{' '}
        </Subtext>
        <div dangerouslySetInnerHTML={{ __html: this.props.comment_text }} />
      </Comment>
    );
  }
}
