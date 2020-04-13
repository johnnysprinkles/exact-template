import React from 'react';
import Nav from '../../components/nav';
import DocsNav from './docs-nav';
import { css } from 'emotion';

const SERVER = 'aliceblue';
const ISO = 'powderblue';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;
    display: flex;

    div > code {
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
  `,
  diagram: css`
    background-color: ${SERVER};
    font-size: 14px;
    display: inline-block;
    padding: 0px 10px;
  `,
  iso: css`
    background-color: ${ISO};
    margin-left: 10px;
    margin-right: 10px;
  `,
  swatch: css`
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  `,
};


export default function DocsIntroView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="render" />
        </div>
        <div className={style.right}>
          <h3>Render</h3>
          <p>
            An "ismorphic" page is just a regular HTML page that includes a
            <code>&lt;script&gt;</code> which <a href="https://reactjs.org/docs/react-dom.html#hydrate">hydrates</a> your
            root React <code>&lt;div&gt;</code>.
          </p>
          <p>
            The server renders the <span className={style.swatch} style={{ backgroundColor: SERVER }} /> outer
            part, while the <span className={style.swatch} style={{ backgroundColor: ISO }} /> inner
            part is rendered by both the client and the server. 
          </p>
          <div className={style.diagram}>
            <pre>
{`<!doctype html>
<html>
  <head>
    <!-- title -->
    <!-- favicon -->
    <!-- base stylesheet -->
    <!-- misc (fontawesome, meta tags, etc) -->  
  </head>
  <body {{backgroundColor}}>
    <div id="react-root">`}
            </pre>
            <pre className={style.iso}>
{`      <App>
        <NavBar />
        <Content>
          <h1>Hello</h1>
          <p>Text text text</p>
        </Content>
      </App>`}
            </pre>
            <pre>
{`    </div>
    <script>{{props}}</scr ipt>
    <script>hydrate()</scr ipt>

    <!-- Google analytics? -->
    <!-- ASCII art comments -->
  </body>
</html>`}
            </pre>
          </div>
          <p>
            Example:
          </p>
          <code className={style.codeBlock}>
            <pre>
{`import render, { bundle } from '../../server/render';

let html = render(res, WidgetList, {
  title: 'All Widgets',
  clientBundle: bundle\u0060apps/widgets/list-widgets-view.js\u0060,
  props: {
    widgets: [/* ... */],
    user: '/* ... */',
  },
});`}
            </pre>
          </code>
          <p>
            It takes 3 arguments, and returns an HTML string suitable
            for <code>res.send()</code>.
          </p>
          <ul>
            <li>
              <code><b>res</b></code>: The Express response, so you'll have access
              to any <code>res.locals</code> set by the middleware
            </li>
            <li>
              <code><b>component</b></code>: The React component class or function.
            </li>
            <li>
              <code><b>data</b></code>: This is an object nested much like the diagram above, with values
              for the outer server-side template at the top level, and
              values for the inner React app a level down in <code>props</code>.
            </li>
          </ul>
          <p>
            <code>clientBundle</code> is what makes the page isomorphic, it should be the
            path to the module containing your view component as a default export, relative to
            the <code>src</code> folder, and wrapped in the <code>bundle`/* ... */`</code> tagged
            template literal. If you omit
            the <code>clientBundle</code> you'll have a purely server-rendered page, which
            is fine for pages with no interactivity.
          </p>
          <p>
            The data passed for <code>props</code> would generally come from
            a handful of upstream service calls in a <code>Promise.all()</code>
            in your handler.
          </p>
        </div>
      </div>
    </div>
  );
}
