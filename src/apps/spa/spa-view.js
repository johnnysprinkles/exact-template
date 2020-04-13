import React from 'react';
import Nav from '../../components/nav';
import { css } from 'emotion';
import { Route, Switch } from 'react-router';
import Router from '../../components/isomorphic-router';
import Subnav from './subnav';
import Description from './description';

let style = {
  container: css`
    padding: 50px;
    max-width: 1000px;
  `,
};

export default function SpaView(props) {
  return (
    <div>
      <Nav current="demos" />
      <div className={style.container}>
        <p>
          <i>
            A three-page Single Page App using react-router. Note the difference
            between a hard reload and a client-side transition between the
            pages. Either way the same data loading latency is applied. If you
            turn off Javascript you'll get a full page reload going from page to
            page, which is arguably a better experience!
          </i>
        </p>
        <Router basename="/demos/spa" location={props.location}>
          <Switch>
            <Route exact path="/b">
              <h4>Binomial coefficient</h4>
              <Description letter="b" key="b" initialData={props.initialData} />
              <Subnav />
            </Route>
            <Route exact path="/c">
              <h4>Coordinate system</h4>
              <Description letter="c" key="c" initialData={props.initialData} />
              <Subnav />
            </Route>
            <Route exact path={['/', '/a']}>
              <h4>Algebraic curve</h4>
              <Description letter="a" key="a" initialData={props.initialData} />
              <Subnav />
            </Route>
            <Route>
              Not found
              <Subnav />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}