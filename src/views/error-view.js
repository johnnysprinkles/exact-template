import React from 'react';
import Nav from '../components/nav';

export default function ErrorView(props) {
  return (
    <div>
      <Nav />
      <div style={{ padding: '50px' }}>
        <h3><i className="fa fa-bug" /> Internal Error</h3>
        {props.stack &&
          <pre>
            <code>{props.stack}</code>
          </pre>
        }
      </div>
    </div>
  );
}
