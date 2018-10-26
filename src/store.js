import { createStore } from 'redux';

// this is a reducer
function counter(state, action) {
    const reducer = {
        'increament': () => state.count + 1,
        'decreament': () => state.count - 1
    };
    return reducer[action.type];
}

const store = createStore(counter);