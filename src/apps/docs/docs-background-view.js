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

export default function DocsBackgroundView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="background" />
        </div>
        <div className={style.right}>
          <h3>Background</h3>
          <p>
            This starter template and framework wasn't designed so much as it was "extracted"
            from years of building isomorphic React web apps. I really built it for myself,
            so I can spin up a new app in one click that has all the patterns in place already.
            Patterns that I know work well.
          </p>
          <p>
            There's been a lot of trial and error and a lot of mistakes made along the way,
            including:
          </p>
          <ul>
            <li>
              At one time I thought it was a good idea to Webpack my server-side code down
              to a single file. Then I learned that some modules need to know a correct
              current filename in source code to work.
            </li>
            <li>
              I tried using CommonJS everywhere so my JSX-free server side code could run
              without Babel. That wasn't so bad, but I think it's worth having @babel/register
              in there to enjoy the more pleasant ES Module syntax, even if it possibly
              slows the build down.
            </li>
            <li>
              Played around a bit with Node's <code>--experimental-modules</code>&hellip; yeah no.
              Hopefully they kill the whole notion of mjs, cjs, and having the entire package in a
              particular module "mode." Someday.
            </li>
            <li>
              One of the security engineers when I was at OfferUp found a nasty XSS bug I'd
              introduced: passing props from server to client by printing
              them in a <code>&lt;script&gt;</code> tag with JSON.stringify(). React is
              inherently XSS safe, and JSON is inherently XSS safe, but the serialization of data via HTML
              may not be!
            </li>
            <li>
              For a while I was using the <code>.jsx</code> extension for JS files that
              happen to contain some JSX in them. That was short lived.
            </li>
            <li>
              When I started all this I was using Express 4, which means my handler had to
              accept <code>(req, res, next)</code> and I had to make sure to have a <code>catch</code> on
              every async operation so I could call <code>next()</code>, or else the connection
              never closed. So glad with Express 5 now you can just let the promise rejection
              bubble up.
            </li>
          </ul>
          <p>
            So if you're looking to build a new React app with server-side rendering, these
            patterns cultivated by some random engineer in Seattle, Washington seems like as good
            a place to start as any!
          </p>
          <p>
            &mdash; John Simons<br />
            <a href="https://github.com/johnnysprinkles">Github</a>&nbsp;•&nbsp;
            <a href="https://stackoverflow.com/users/205934/jpsimons">Stackoverflow</a>&nbsp;•&nbsp;
            <a href="https://www.linkedin.com/in/jpsimons/">LinkedIn</a>&nbsp;•&nbsp;
            <a href="https://www.discogs.com/user/jpsimons">Discogs</a>
          </p>
        </div>
      </div>
    </div>
  );
}
