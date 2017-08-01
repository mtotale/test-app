import React from 'react';
import { Route } from 'react-router';
import { Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import Comments from './Comments';
import NewPosts from './NewPosts';
import { Body, Table, NavLink1 } from '../styles';

export default class App extends React.Component {
  render() {
    return (
      <center>
        <Body>
          <tr>
            <td>
              <Table>
                <tbody>
                  <tr>
                    <td>
                      <NavLink1 HackerNews to="/home">
                        <b>Hacker News</b>
                      </NavLink1>
                      <NavLink1 activeClassName="tag" to="/newposts">
                        new
                      </NavLink1> | <NavLink1 activeClassName="tag" to="/comments">
                        comments
                      </NavLink1>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </td>
          </tr>
          <tr>
            <td>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/comments" component={Comments} />
                <Route path="/newposts" component={NewPosts} />
              </Switch>
            </td>
          </tr>
        </Body>
      </center>

    );
  }
}
