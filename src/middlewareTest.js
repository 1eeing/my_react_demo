function logger(store) {
    return function(next) {
        return function(action) {
            console.log(action.type);
            console.log('dispatching', action);
            let result = next(action);
            console.log('next state', store.getState());
            console.log(action.type);
            return result;
        }
    }
}