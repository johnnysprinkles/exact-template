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

export default function DocsDesignView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="design" />
        </div>
        <div className={style.right}>
          <h3>Design goals</h3>
          <h4>Clear separation between client and server code</h4>
          <p>
            Server-side code can do things that client-side code can't,
            obviously. It can access the filesystem, handle secrets, include all
            the large dependencies it wants without affecting page load times.
            It's important to not intermingle server-only code into the same
            modules that have isomorphic code. It's important to not rely on
            tree shaking to do the right thing. It's important for the developer
            to not have a muddled view of where their code is actually running.
          </p>
          <h4>Compartmentalization</h4>
          <p>
            The most important thing is that developer X can build page Y,
            making it as simple or as complex as they want, without affecting
            the rest of the app. And when page Y inevitably gets deleted, all
            remnants go away. Good compartamentalization makes the project scale
            with team size.
          </p>
          <h4>Most general solution</h4>
          <p>
            SPA is just a special case of multipage app where the number of
            pages happens to be one. And client side rendering is just a special
            case of server rendering where the server renders nothing but an
            empty DIV (and the server may be a CDN). This starter template seeks
            the most general, to keep all doors open.
          </p>
          <h4>Repeatability</h4>
          <p>
            The user should get the same experience whether they're loading the
            first page or the <i>n</i>th page. If you're like "the first hit is
            kind of slow but then things are cached so it's fast" you have the
            wrong idea. The first hit is the only hit that matters.
          </p>
        </div>
      </div>
    </div>
  );
}
