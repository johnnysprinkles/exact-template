import React from 'react';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export default function IsomorphicRouter(props) {
  let Router = (typeof window !== 'undefined') ? BrowserRouter : StaticRouter;
  return <Router {...props}>{props.children}</Router>;
}
