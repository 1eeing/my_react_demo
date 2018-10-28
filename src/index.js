import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router/router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import count from './reducers/count';

const store = createStore(count);

const render = () => ReactDOM.render((
    <Root store={store} />
), document.getElementById('root'));

render();
// store.subscribe(render)
registerServiceWorker();
