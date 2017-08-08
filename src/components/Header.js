import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'emotion/react';

const HeaderWrapper = styled('div')`
  border: 0;
  width: 100%;
  background-color: #ff6600;
  padding-top: 2px;
  padding-left: 2px;
`;

const TopLinks = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: ${props => (props.isHackerNews ? '53px' : 0)};
  &.activetag {
    color: white;
  }
`;

const Logo = styled('img')`
  border: 1px white solid;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <TopLinks isHackerNews to="/home">
          <Logo src="../pics/y18.gif" /> <b>Hacker News</b>
        </TopLinks>{' '}
        {'  '}
        <TopLinks activeClassName="activetag" to="/newposts">
          new
        </TopLinks>{' '}
        |{' '}
        <TopLinks activeClassName="activetag" to="/comments">
          comments
        </TopLinks>
      </HeaderWrapper>
    );
  }
}
