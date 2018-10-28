import React from 'react';
import ReactDOM from 'react-dom';
// import BasicExample from './router/router';
import App from './view/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import count from './reducers/count';

const store = createStore(count);

const render = () => ReactDOM.render((
    <App
        value={store.getState()}
        increament={() => store.dispatch({type: 'increament'})}
        decreament={() => store.dispatch({type: 'decreament'})}
    />
), document.getElementById('root'));

render();
store.subscribe(render)
registerServiceWorker();
