import React from 'react';
import { Route } from 'react-router';
import { Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import Comments from './Comments';
import NewPosts from './NewPosts';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hacker-news</h1>
        <ul className="header">
          <li>
            <NavLink className="inactive" exact activclassName="tags" activeStyle={{ color: 'purple' }} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="inactive" activclassName="tags" activeStyle={{ color: 'purple' }} to="/newposts">
              New Posts
            </NavLink>
          </li>
          <li>
            <NavLink className="inactive" activclassName="tags" activeStyle={{ color: 'purple' }} to="/comments">
              Comments
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/comments" component={Comments} />
          <Route path="/newposts" component={NewPosts} />
        </Switch>
      </div>
    );
  }
}
