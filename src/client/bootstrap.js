const React = require('react');
const ReactDOM = require('react-dom');
const TopLevelComponent = require('../' + TOP_LEVEL_COMPONENT).default;
const App = require('../components/app').default;

let component = React.createElement(TopLevelComponent, window.ROOT_PROPS);
let app = React.createElement(App, window.ROOT_PROPS, component);
let div = document.getElementById('react-root');

if (div.innerHTML.length > 0) {
  ReactDOM.hydrate(app, div);
} else {
  ReactDOM.render(app, div);
}
