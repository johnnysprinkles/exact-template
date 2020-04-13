import React from 'react';
import Nav from '../../components/nav';
import { css } from 'emotion';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;
  `,
};

export default function PhilosophyView(props) {
  return (
    <div>
      <Nav current="philosophy" />
      <div className={style.container}>
        <h1>Philosophy</h1>
        <h2>
          Why isomorphic?
        </h2>
        <p>
          Superior user experience. The user waits a bit, then the page pops in
          fully formed like a piece of toast that goes "ding." No spinners and
          placeholders and parts of the page loading in and jumping around, just
          a solid HTML page that appears basically atomically.
        </p>
        <p>
          But that's just the argument for server-side rendering. Why then
          isomorphic? So you can add interactivity and dynamicism in a seamless
          and frictionless way.
        </p>
        <h2>
          Why multipage?
        </h2>
        <p>
          If you accept the benefits of server side rendering, why only do it on
          the first page? Hardly seems worth the effort. If you also accept that
          the first hit is by far the most important hit, and optimize that
          experience, how about giving the user the first hit experience on
          every page?
        </p>
        <p>
          SPA is overused. Sure there are good reasons for it, when you have
          a highly fluid app-like website, perhaps with persisent elements like
          music players and chat windows, but for most of us a website is just a
          tree of pages that have forms and tables. These needs are better
          served by full page reloading.
        </p>
        <p>
          Don't you hate fake things? Like a sports car with fake engine noise
          piped into the cabin, or a beach house with fake dormers just for
          "curb appeal?" SPA has fake page navigations. Just use a real page
          navigation!
        </p>
      </div>
    </div>
  );
}