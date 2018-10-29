import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
// import Root from './router/router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
