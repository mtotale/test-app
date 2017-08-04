import React from 'react';
import glamorous from 'glamorous';


export const Subtext = glamorous.div({
  fontSize: '8pt',
  color: '#828282',
  marginBottom: '0.5em',
});

export const Post = glamorous.a({
  ':link': {
    color: '#000000',
    textDecoration: 'none',
  },
  ':visited': {
    color: '#828282',
    textDecoration: 'none',
  },
});

export default class PostItem extends React.Component {
  render() {
    return (
      <li key={this.props.objectID}>
        <Post href={this.props.url}>
          {this.props.title}
        </Post>
        <Subtext>
          {this.props.points} {this.props.points > 1 ? 'points' : 'point'} by {this.props.author} |{' '}
          {this.props.num_comments} comments{' '}
        </Subtext>
      </li>
    );
  }
}
