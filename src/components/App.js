import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import styled from 'emotion/react';

import HomeContainer from './Home';
import CommentsContainer from './Comments';
import NewPostsContainer from './NewPosts';
import Header from './Header';

injectGlobal`
  body {
    font-family:Verdana, Geneva, sans-serif;
    color:#828282;
    font-size:10pt;
    border:0;
    width:85%;
    background-color:#ffffff;
    margin: auto;
  }
`;

const Body = styled('div')`
  background-color: #f6f6ef;
  margin-top: 2px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Body>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route path="/home" component={HomeContainer} />
          <Route path="/comments" component={CommentsContainer} />
          <Route path="/newposts" component={NewPostsContainer} />
        </Switch>
      </Body>
    );
  }
}
