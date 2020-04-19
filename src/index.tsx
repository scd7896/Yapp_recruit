import * as React from 'react';
import * as ReactDom from 'react-dom';
import App from './pages/App'
import './polyfil/index.js'


ReactDom.render(<App />, document.querySelector('#root'));