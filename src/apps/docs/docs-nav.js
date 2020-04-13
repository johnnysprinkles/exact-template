import React from 'react';
import { css, cx } from 'emotion';

let style = {
  container: css`
    font-size: 16px;
    line-height: 23px;
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style: none;
    }
  `,
  active: css`
    color: black;
    cursor: default;
    &:hover {
      color: black;
    }
  `,
};

export default function DocsNav({ current }) {
  return (
    <div className={style.container}>
      <ul>
        <li><a href="/docs/intro" className={cx({[style.active]: current == 'intro'})}>Intro</a></li>
        <li><a href="/docs/render" className={cx({[style.active]: current == 'render'})}>Render</a></li>
        <li><a href="/docs/files" className={cx({[style.active]: current == 'files'})}>Key Files</a></li>
        <li><a href="/docs/apps" className={cx({[style.active]: current == 'apps'})}>Apps</a></li>
        <li><a href="/docs/dev" className={cx({[style.active]: current == 'dev'})}>Local Dev</a></li>
        <li><a href="/docs/design" className={cx({[style.active]: current == 'design'})}>Design Goals</a></li>
        <li><a href="/docs/faq" className={cx({[style.active]: current == 'faq'})}>FAQ</a></li>
      </ul>
    </div>
  );
}
