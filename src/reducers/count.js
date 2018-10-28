function counter(state = 0, action) {
    const reducer = {
        'increament': () => state + 1,
        'decreament': () => state - 1
    };
    const fn = reducer[action.type];
    return fn ? fn() : state;
};

export default counter;