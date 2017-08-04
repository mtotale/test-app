import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';
// import styled, { injectGlobal } from 'styled-components';
import glamorous from 'glamorous';

import HomeContainer from './Home';
import CommentsContainer from './Comments';
import NewPostsContainer from './NewPosts';
import Header from './Header';

const Body = glamorous.div({
  backgroundColor: '#f6f6ef',
  marginTop: '2px',
  fontFamily: 'Verdana, Geneva, sans-serif',
  color: '#828282',
  fontSize: '10pt',
  border: '0',
  width: '85%',
  margin: 'auto',
});

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
