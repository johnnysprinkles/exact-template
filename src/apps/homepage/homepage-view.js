import React from 'react';
import Nav from '../../components/nav';
import { css } from 'emotion';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;

    p {
      font-size: 20px;
    }
  `,
};

export default function HomepageView(props) {
  return (
    <div>
      <Nav />
      <div className={style.container}>
        <h1>Hello World</h1>
        <p>
          Welcome to your isomorphic multipage Node/Express/React
          initial scaffolding! You're currently looking at the "homepage"
          app under <code>src/apps/homepage</code>.
        </p>
        <p>
          These pages are isomorphic, meaning the server is giving back a
          string of HTML that can be rendered instantaneously, but it's
          also client-side React that everyone is familiar with. Go ahead
          and inspect with the React dev tools.
        </p>
      </div>
    </div>
  );
}