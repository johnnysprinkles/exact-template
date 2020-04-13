import React from 'react';
import Nav from '../components/nav';

export default function NotFoundView(props) {
  return (
    <div>
      <Nav />
      <div style={{ padding: '50px' }}>
        <h3><i className="fa fa-bomb" /> Not Found</h3>
      </div>
    </div>
  );
}
