import { VisibilityFilters } from '../actions';

export const getVisibleTodos = (todos, visibilityFilter) => {
    switch(visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            break;
    }
};