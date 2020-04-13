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
    blockquote {
      margin-left: 0;
      margin-right: 0;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 40px;
      background-color: #eee;
      display: block;
      font-size: 16px;
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
    background-color: transparent;
  `
};

export default function DocsIntroView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="intro" />
        </div>
        <div className={style.right}>
          <h3>What is this?</h3>
          <p>
            <i>
              Express + (ReactDOM + Webpack + Babel + NPM scripts) =&gt; Isomorphic React
            </i>
          </p>
          <p>
            Setting up an isomorphic React app isn't simple, and it's even less
            simple for the general case of a multipage app. You'd have a
            server-side route handler that loads data, then renders an HTML
            template that glues together the output of
            <code>ReactDOMServer.renderToString()</code> along with the
            client hydrating JS bundle and the top-level props made
            available for client-side use, where each clientside bundle comes
            from a dynamic multi-entry webpack config file.
          </p>
          <p>
            Primarily this is about providing that isomorphic glue in the form
            of simple Express handler helpers you can drop into your Express
            app.
          </p>
          <p>
            The core feature is the <code>src/server/render.js</code> helper.
            Imagine your Express app has various routes, this lets you add
            others which happen to be isomorphic React:
          </p>
          <code className={style.codeBlock}>
            let app = express();<br />
            app.get('/foo', (req, res) =&gt; res.send({'{'} name: 'Foo' {'}'})); // data route<br />
            app.get('/bar', (req, res) =&gt; res.send('&lt;html&gt;Bar!&lt;/html&gt;')); // html route<br />
            app.get('/baz', (req, res) =&gt; res.send(<span style={{color: 'red'}}>render(res, BazComponent, {'{'} ... {'}'})</span>);
          </code>
          <p>
            This "glue" isn't something that can really be pulled out as a library though, so instead,
            this whole thing is offered as a starter template that you can fork.
          </p>
          <p>
            Start by checking out the <a href="/demos">demos</a>, and their implementation
            under <code>src/apps</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
