import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';

// Styles
import './styles/index.css';

ReactDOM.render(<Routes />, document.querySelector('#root'));
registerServiceWorker();
