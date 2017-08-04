import React from 'react';
import glamorous from 'glamorous';

export const Comment = glamorous.li({
  fontSize: '9pt',
  color: '#000000',
  marginBottom: '0.5cm',
});

export const Subtext = glamorous.div({
  fontSize: '8pt',
  color: '#828282',
  marginBottom: '0.5em',
  '>a': {
    ':link': {
      color: '#828282',
      textDecoration: 'none',
    },
    ':hover': {
      textDecoration: 'underline',
    },
    ':visited': {
      color: '#828282',
      textDecoration: 'none',
    },
  },
});

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
