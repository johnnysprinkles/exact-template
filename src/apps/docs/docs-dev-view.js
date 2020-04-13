import React from 'react';
import Nav from '../../components/nav';
import DocsNav from './docs-nav';
import { css } from 'emotion';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;
    display: flex;

    div > code {
      font-size: 16px;
    }

    dt {
      font-family: monospace;
      font-weight: bold;
    }
    dd {
      margin-bottom: 1em;
    }
  `,
  left: css`
    width: 150px;
    margin-right: 20px;
  `,
  right: css`
    flex: 1;
  `,
};

export default function DocsDevView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="dev" />
        </div>
        <div className={style.right}>
          <h3>Local development</h3>
          <p>
            There is no "dev server" or hot module loader&hellip; local development
            runs the same way prod runs, by executing <code>src/main.js</code>. If everything
            works locally, you can have confidence things will work when deployed.
          </p>
          <p><code>npm run dev</code></p>
          <p>
            Will start up in development mode. The only differences are:
          </p>
          <ul>
            <li><code>nodemon</code> instead of <code>node</code></li>
            <li><code>webpack</code> with <code>--watch</code> option</li>
            <li>clientside bundles not minified</li>
          </ul>
          <p>
            This does mean there is a small delay after making changes, a second or two
            on a small app, maybe 5 seconds on a large app. All changes will be automatically
            reflected, with one exception: After adding a new "app" you'll need to kill and
            restart your server, so Webpack will start compiling your new views.
          </p>
        </div>
      </div>
    </div>
  );
}
