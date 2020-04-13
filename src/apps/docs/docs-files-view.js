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
  codeBlock: css`
    display: block;
    font-size: 16px;
    line-height: 20px;
  `
};

export default function DocsFilesView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="files" />
        </div>
        <div className={style.right}>
          <h3>Key files</h3>
          <dl>
            <dt>src/server/render.js</dt>
            <dd>
              This is where everything is married together. This module constructs the
              HTML response by combining server rendered HTML, client JS, props,
              base stylesheet, and anything else you want in your master HTML template.
            </dd>
            <dt>src/server/config.js</dt>
            <dd>
              Bare-bones config system with an arbitrary number of environments
              and config overrides by shell environment variable.
            </dd>
            <dt>webpack.config.js</dt>
            <dd>
              The config that makes a separate clientside bundle for each page of your
              multipage app.
            </dd>
            <dt>src/main.js</dt>
            <dd>
              The entry point to your Express application.
            </dd>
            <dt>src/components/...</dt>
            <dd>
              Common components used in your top-level React components, a.k.a. pages. These
              modules and all their dependences need to be isomorphic safe (i.e. not
              assuming "window" exists, or "fs" exists).
            </dd>
            <dt>src/apps/...</dt>
            <dd>
              Where the apps go, see <a href="/docs/apps">About Apps</a>.
            </dd>
            <dt>.babelrc</dt>
            <dd>
              Used by the @babel/register module, and what allows JSX and ES Module
              "import/export" to be used anywhere in serverside code.
            </dd>
            <dt>package.json</dt>
            <dd>
              Contains the scripts for "watch" which you'd use in development, and "start"
              which you'd use in production.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
