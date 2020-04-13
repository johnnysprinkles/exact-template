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
          <DocsNav current="apps" />
        </div>
        <div className={style.right}>
          <h3>What's an "app"?</h3>
          <p>
            Your multipage app might have a couple dozen pages, each with
            various ajax handlers to power autocompleters, load infinite
            scrollers, and persist changes. Dumping this all as a flat list into
            {' '}
            <code>main.js</code> would quickly get messy. "Apps" are a way to
            keep things organized.
          </p>
          <p>
            An app is two things:
          </p>
          <ol>
            <li>
              A folder that contains all the files (handlers, components,
              styles, etc) for a page or a group of related pages, along with an
              {' '}
              <code>index.js</code> file that installs the routes.
            </li>
            <li>
              Apps also have a URL prefix scope, so that they can only install
              new routes on or under that path prefix. This prevents route
              collisions and ensures that every route has clear ownership.
            </li>
          </ol>
          <p>
            They're inspired a bit by <a href="https://docs.djangoproject.com/en/3.0/ref/applications/">Django
            applications</a>, and maybe also <a href="https://expressjs.com/en/api.html#router">Express Router</a>.
          </p>
          <p>
            To create an app, you make a new folder under <code>src/apps</code>,
            give it an <code>index.js</code>, and add that to
            {' '}
            <code>src/server/installed-apps.js</code>. The <code>index.js</code>
            {' '}
            should default export a function that accepts an <code>app</code>
            {' '}
            argument. This argument behaves like an Express instance with
            {' '}
            <code>get</code>, <code>post</code>, <code>use</code>, etc, but it's
            actually a sort of guarded proxy to the real Express app.
          </p>
          <p>
            Apps are all about having ownership at the directory level, while
            still having central control of the URL route space.
          </p>
        </div>
      </div>
    </div>
  );
}
