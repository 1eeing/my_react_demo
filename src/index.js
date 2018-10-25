import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './router/router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BasicExample />
), document.getElementById('root'));
registerServiceWorker();
