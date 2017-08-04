import React from 'react';
import { NavLink } from 'react-router-dom';
import glamorous from 'glamorous';

const HeaderWrapper = glamorous.div({
  border: '0',
  width: '100%',
  backgroundColor: '#ff6600',
  paddingTop: '2px',
  paddingLeft: '2px',
});

const TopLinks = glamorous(NavLink)(
  {
    color: 'black',
    textDecoration: 'none',
    '&.activetag': {
      color: 'white',
    },
  },
  ({ isHackerNews = false }) => ({
    marginRight: isHackerNews ? '50px' : 0,
  }),
);

export const Logo = glamorous.img({ border: '1px white solid' });

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
