import React from 'react';

// What goes in here? Maybe nothing. But if you do need something available on
// every page, such as an error messaging overlay, this would be a good place
// for it.
//
// Also if you have anything in global context like a "theme", you could add
// that here.

export default function App(props) {
  return (
    <>
      {props.children}
    </>
  );
}
