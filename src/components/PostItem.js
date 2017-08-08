import React from 'react';
import styled from 'emotion/react';


const Subtext = styled('div')`
  font-size: 8pt;
  color: #828282;
  margin-bottom: 0.5em;
`;

const Post = styled('a')`
  :link {
    color: #000000;
    text-decoration: none;
  }
  :visited {
    color: #828282;
    text-decoration: none;
  }
`;

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
