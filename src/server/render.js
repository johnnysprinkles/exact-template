import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import baseStylesheet from './style';
import { renderStylesToString } from 'emotion-server';
import htmlescape from 'htmlescape';
import App from '../components/app';

// These properties will be automatically copied from "res.locals"
// to the props on the top level React component, and can make
// request specific data added by the middleware available to every
// page.
const AUTO_LOCALS = [];

let bundleCache = {};

export default function(res, view, data = {}) {
  let { props = {}, clientBundle } = data;

  AUTO_LOCALS.forEach((key) => {
    if (res.locals[key] !== undefined) {
      props[key] = res.locals[key];
    }
  });

  let html = '';
  if (view) {
    let element = React.createElement(view, props);
    let app = React.createElement(App, props, element);
    html = ReactDOMServer.renderToString(app);
    html = renderStylesToString(html);
  }

  let js = '';
  if (clientBundle) {
    if (!clientBundle.bundle) {
      throw new Error('Your clientBundle needs to be wrapped in the "bundle" tagged template literal so Webpack knows to compile it.');
    }
    if (bundleCache[clientBundle]) {
      js = bundleCache[clientBundle];
    } else {
      js = fs.readFileSync(`./dist/client/${clientBundle}`);
      bundleCache[clientBundle] = js;
    }
  }

  // Need to use htmlescape() below and not simply JSON.stringify()! Because
  // of strings that happen to contain "</script>" in them.

  return String.raw`<!doctype html>
    <html>
      <head>
        <title>${data.title || ''}</title>
        <link rel="icon" type="image/png" href="/static/favicon.png">
        <style>${baseStylesheet}</style>
        <link href="/static/fontawesome/css/all.min.css" rel="stylesheet">
      </head>
      <body>
        <div id="react-root">${html}</div>
        <script>window.ROOT_PROPS = ${htmlescape(props)};</script>
        <script>${js}</script>
      </body>
    </html>
  `;
}

// Basically a no-op. Just adds a "bundle" property that can be checked for
// presence. The real purpose is as a compile-time annotation that's searched for
// by regex.
export function bundle(strings) {
  let path = new String(strings[0]);
  path.bundle = true;
  return path;
}
