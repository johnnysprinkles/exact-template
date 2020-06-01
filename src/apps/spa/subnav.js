import React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';

let style = {
  nav: css`
    padding-top: 20px;
    font-size: 16px;

    a {
      font-size: 20px;
    }
  `,
};

export default function Subnav(props) {
  return (
    <div className={style.nav}>
      Jump to:
      &nbsp;&nbsp;
      <NavLink to="/a" isActive={(match, location) => { return match || location.pathname == '' || location.pathname == '/'; }}>A</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to="/b">B</NavLink>&nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to="/c">C</NavLink>
    </div>
  );
}
