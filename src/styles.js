import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Body = styled.table`
  font-family:Verdana, Geneva, sans-serif;
  font-size:10pt;
  color:#828282;
  border:0;
  cellpadding:0;
  cellspacing:0;
  width:85%;
  background-color:#f6f6ef;
`;

export const Table = styled.table`
  border:0;
  cellpadding:0;
  cellspacing:0;
  width:100%;
  background-color:#ff6600;
  style:padding:2px;
`;

export const NavLink1 = styled(NavLink)`
  color: black;
  text-decoration: none;

  ${props => props.HackerNews && css`
      margin-right: 5px;
  `};

  &.${'tag'} {
    color: white;
  }
`;

export const Subtext = styled.div`
font-family: Verdana, Geneva, sans-serif;
font-size: 8pt;
color: #828282;
margin-bottom: 0.5em;
`;

export const A = styled.a`
  font-size: 10pt;
  :link{
    color: #000000;
    text-decoration: none;
  }
  :visited{
    color:#828282;
    text-decoration:none;
  }
  :active{
    color:white;
    text-decoration:none;
  }
`;

export const Comment = styled.li`
  font-family:Verdana, Geneva, sans-serif;
  font-size: 9pt;
  color: #000000;
  margin-bottom: 0.5cm;
`;
