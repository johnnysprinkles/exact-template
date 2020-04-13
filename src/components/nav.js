import React, { useState, useEffect } from 'react';
import { css, cx } from 'emotion';

let style = {
  nav: css`
    font-size: 20px;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 9px;
    display: flex;
  `,
  left: css`
    flex: 1;
    > ul {
      margin: 0;
      padding: 0;

      > li {
        display: inline-block;
        list-style: none;
        margin-right: 12px;

        > a {
          display: block;
          padding: 1px 0;
        }
      }
    }
  `,
  right: css`
    position: relative;
  `,
  current: css`
    color: #95b6f2;
    border-bottom: 2px solid #95b6f2;
    &:hover {
      text-decoration: none;
    }
  `,
  menuContainer: css`
    position: relative;

    &:hover > ul {
      display: block;
    }
  `,
  menu: css`
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    margin: 0;
    padding: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

    > li {
      list-style: none;
      white-space: nowrap;

      &:last-child a {
        border-bottom-style: none;
      }

      > a {
        display: block;
        padding: 5px 10px;
        border-bottom: 1px solid #ddd;

        &:hover {
          color: black;
          background-color: #eef;
        }
      }
    }
  `,
  info: css`
    position: absolute;
    right: 0;
    font-size: 16px;
    min-width: 400px;
    border: 1px solid #ccc;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    padding: 10px;
  `,
};

export default function Nav(props) {
  let [ showInfo, setShowInfo ] = useState(false);
  let [ viewport, setViewport ] = useState([0, 0]);

  useEffect(() => {
    let onResize = () => {
      setViewport([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => setShowInfo(true), []);

  return (
    <nav className={style.nav}>
      <div className={style.left}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/docs/intro" className={cx({[style.current]: props.current == 'docs'})}>Docs</a></li>
          <li><a href="/philosophy" className={cx({[style.current]: props.current == 'philosophy'})}>Philosophy</a></li>
          <li className={style.menuContainer}>
            <a href="/demos" className={cx({[style.current]: props.current == 'demos'})}>Demos</a>
            <ul className={style.menu}>
              <li><a href="/demos/cowsay/clientside">Cowsay: client rendered</a></li>
              <li><a href="/demos/cowsay/serverside">Cowsay: server rendered</a></li>
              <li><a href="/demos/cowsay/isomorphic">Cowsay: isomorphic rendered</a></li>
              <li><a href="/demos/spa">Single Page App</a></li>
              <li><a href="/asjdakafsldfaks">404 page</a></li>
              <li><a href="/intentional_error">500 page</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={style.right}>
        {showInfo && <span><b>Viewport:</b> {viewport[0]}&#x200a;x&#x200a;{viewport[1]}</span>}
      </div>
    </nav>
  );
}
