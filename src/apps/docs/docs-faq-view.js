import React from 'react';
import Nav from '../../components/nav';
import DocsNav from './docs-nav';
import { css } from 'emotion';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;
    display: flex;


    dt {
      font-weight: bold;
    }
    dd {
      margin-bottom: 1.5em;
    }
  `,
  left: css`
    width: 150px;
    margin-right: 20px;
  `,
  right: css`
    flex: 1;
  `,
  comparison: css`
    font-size: 14px;
    border-spacing: 0;
    border-collapse: collapse;
    th, td {
      border: 1px solid #ddd;
      padding: 1px 5px;
    }
    td {
      padding-bottom: 6px;
      vertical-align: top;
    }
    thead th {
      background-color: #eee;
    }
    tbody th {
      text-align: left;
    }
  `,
};

export default function DocsFaqView(props) {
  return (
    <div>
      <Nav current="docs" />
      <div className={style.container}>
        <div className={style.left}>
          <DocsNav current="faq" />
        </div>
        <div className={style.right}>
          <h3>FAQ</h3>
          <dl>
            <dt>What about Next.js?</dt>
            <dd>
              <p>
                Just different approaches. Next.js kind of steers you away from
                server-side rendering, while Exact is all about it.
                Here's a table comparing the two:
              </p>
              <table className={style.comparison}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Next.js</th>
                    <th>Exact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Form factor</th>
                    <td>Library and service</td>
                    <td>Template</td>
                  </tr>
                  <tr>
                    <th>Style</th>
                    <td>Convention over configuration, influenced by Rails</td>
                    <td>Explicit is better than implicit, influenced by Python</td>
                  </tr>
                  <tr>
                    <th>Express</th>
                    <td><a href="https://nextjs.org/docs/advanced-features/custom-server">Possible to use</a>, but doesn't look that idiomatic</td>
                    <td>Yes, through and through. Who doesn't love <a href="https://expressjs.com/">Express</a>?</td>
                  </tr>
                  <tr>
                    <th>Upgrading</th>
                    <td>Next.js wins here, being a library</td>
                    <td>No, snapshotted at app creation time</td>
                  </tr>
                  <tr>
                    <th>Server-side code</th>
                    <td><code><a href="https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering">getServerSideProps</a></code> is intermingled with the React component's module</td>
                    <td>Clearly separated, with a separate file for the server-side Express handler of each route</td>
                  </tr>
                  <tr>
                    <th>Multipage</th>
                    <td>I think you could use regular A tags instead of <a href="https://nextjs.org/docs/api-reference/next/link">next/link</a> but it's not really designed to be used that way</td>
                    <td>Yes. N pages have N Express handlers and N client-side bundles.</td>
                  </tr>
                </tbody>
              </table>
            </dd>
            <dt>Why Emotion?</dt>
            <dd>
              <p>
                You can swap that out with <code>styled-components</code> or whatever you like, it's just
                important to use some kind of CSS-in-JS solution so that everything follows from the
                JS module dependency graph. Keeps your app maintainable in the long run.
              </p>
              <p>
                I personally like <code><a href="https://emotion.sh/docs/introduction">emotion</a></code> because it lets you apply class names to vanilla
                HTML elements. React is all about composition: you build simple components, compose
                those into more complex components, compose those into even more complex components.
                But at the lowest level, down to the metal, you should be able to see and read
                what the HTML is. You should see the DIVs and SPANs. With styled-components for
                example you never do.
              </p>
            </dd>
            <dt>Isn't Express 5 still in alpha?</dt>
            <dd>
              <p>
                Yes but I've been using it in production for over a year and half.
                It's been in alpha for 5 years, I think releasing 5.0.0 is just a formality
                at this point.
              </p>
            </dd>
            <dt>What about the const mafia?</dt>
            <dd>
              <p>
                If you really think it's important, every time you declare an implementation variable,
                to stop for a moment and think about "will this ever be reassigned or not?" then
                feel free to fork this project as "the ESLint prefer-const edition". <code>"let"</code> reads better
                than <code>"const"</code>, no bugs have ever happened because of inadvertently reassigning
                a variable in ES6, and "const but mutable" is
                pretty pointless. 
              </p>
            </dd>
            <dt>Why is the JS just inlined?</dt>
            <dd>
              <p>
                This keeps the HTML and JS in sync when you deploy across a
                cluster that's behind a load balancer, and it avoids the need
                for cache invalidation/cache busting. A future version of Exact
                might externalize the react/react-dom part out as a separate
                cacheable script, since it changes infrequently, even thought
                that's somewhat at odds with the design goal of
                "repeatability."
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
