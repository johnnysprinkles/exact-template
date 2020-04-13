import React from 'react';
import Nav from '../../components/nav';
import { css } from 'emotion';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;

    > ul > li {
      margin-bottom: 0.8em;
    }
  `,
};

export default function Demos(props) {
  return (
    <div>
      <Nav current="demos" />
      <div className={style.container}>
        <h1>Demos</h1>
        <p>
          All data fetching has an artificial delay of {props.FAKE_API_DELAY}ms to
          simulate real service calls. Also keep in mind, in local development
          these unminified client bundles are huge! You can run <code>npm
          run dev-min</code> instead to preview more realistic performance.
        </p>
        <ul>
          <li>
            <b>Cowsay demo</b>. All three of these routes and handlers are using
            the exact same top level React component, just rendered in a different way.
            <ul>
              <li><a href="/demos/cowsay/clientside">Client rendered</a></li>
              <li><a href="/demos/cowsay/serverside">Server rendered</a></li>
              <li><a href="/demos/cowsay/isomorphic">Isomorphic rendered</a></li>
            </ul>
          </li>
          <li>
            <b><a href="/demos/spa">SPA demo</a></b>. Single Page App using react-router.
          </li>
          <li>
            <b><a href="/aksdfkaskfaskfdkas">/aksdfkaskfaskfdkas</a></b>. 404 page.
          </li>
          <li>
            <b><a href="/intentional_error">/intentional_error</a></b>. 500 page.
          </li>
        </ul>
      </div>
    </div>
  );
}
